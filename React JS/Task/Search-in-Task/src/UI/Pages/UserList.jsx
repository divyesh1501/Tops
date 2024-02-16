import React, { useState, useEffect } from 'react';
import { Button, Col, FormGroup, Input, Label, Table } from 'reactstrap';

export const UserList = ({creartaccount}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all'); // 'all', 'admin', 'employee' , 'user'
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Fetch user list from localStorage on component mount
    const storedUsers = JSON.parse(localStorage.getItem('userData')) || [];
    setAllUsers(storedUsers);
    setFilteredUsers(storedUsers);
  }, []);


  useEffect(() => {
    let filtered;

    if (selectedType === 'all') {
      filtered = allUsers.filter(user => user.userName.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      filtered = allUsers.filter(user => user.userType.toLowerCase() === selectedType && user.userName.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredUsers(filtered);

  }, [searchTerm, selectedType, allUsers])

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setSearchTerm(''); // Reset search term when changing user type
  };


  return (
    <div className='userTable d-flex align-items-center flex-column mt-3 '>

      <div>
        <FormGroup row>
          <Label
            for="exampleSelect"
            sm={1}
            style={{ width: "100px" }}
          >
            User Type:
          </Label>
          <Col sm={10}>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              value={selectedType}
              onChange={handleTypeChange}
              style={{ width: "60vw" }}
            >
              <option value="all">All</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
              <option value="user">User</option>
            </Input>
          </Col>
        </FormGroup>
      </div>

      <div className='d-flex flex-column' style={{marginLeft:"100px"}}>
        <div className='d-flex gap-3 ' style={{marginLeft:"108px"}}> 
          <Input
            type="text"
            placeholder="Search by username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "60vw" }}
          />
          <Button onClick={creartaccount} >Add User</Button>
        </div>
        <div>
          <Table striped style={{ width: "60vw", marginLeft:"108px" }}>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>UserName</th>
                <th>Password</th>
                <th>UserType</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((e, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.userName}</td>
                  <td>{e.password}</td>
                  <td>{e.userType}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

      </div>
    </div>

  );

};
