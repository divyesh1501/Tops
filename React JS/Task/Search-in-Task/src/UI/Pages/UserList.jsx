import React, { useState, useEffect } from 'react';
import { Button, Col, FormGroup, Input, Label, Table } from 'reactstrap';
import Select from "react-select";

export const UserList = ({ modal, toggle, regtoggle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState(['all']); // 'all' is initially selected

  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);



  const options = [
    { value: 'all', label: 'All' },
    { value: 'admin', label: 'Admin' },
    { value: 'employee', label: 'Employee' },
    { value: 'user', label: 'User' }
  ];


  useEffect(() => {
    // Fetch user list from localStorage on component mount
    const storedUsers = JSON.parse(localStorage.getItem('userData')) || [];
    setAllUsers(storedUsers);
    setFilteredUsers(storedUsers);
  }, []);

  useEffect(() => {
    let filtered;

    if (selectedTypes.includes('all')) {
      filtered = allUsers.filter(user => user.userName.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      filtered = allUsers.filter(user => selectedTypes.includes(user.userType.toLowerCase()) && user.userName.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredUsers(filtered);

  }, [searchTerm, selectedTypes, allUsers]);

  const handleTypeChange = (selected) => {
    const selectedValues = selected ? selected.map(option => option.value) : [];
    setSelectedTypes(selectedValues.length > 0 ? selectedValues : ['all']);
    setSearchTerm('');
  };

  const addUser = () => {
    toggle
    regtoggle()
  }


  return (
    <div className='userTable d-flex align-items-center flex-column mt-3 '>
      <div>
        <FormGroup row>
          <div className='d-flex'style={{width:"65.5vw", marginLeft:"165px", boxShadow:"none"}} >
            <Label
              for="exampleSelect"
              sm={1}
              style={{ width: "100px" }}
            >
              User Type:
            </Label>
            <Col sm={10}>
              <Select
                id="exampleSelect"
                name="select"
                value={options.filter(option => selectedTypes.includes(option.value))}
                options={options}
                isMulti
                onChange={(selected) => handleTypeChange(selected)}
              />
            </Col>
          </div>
        </FormGroup>
      </div>

      <div className='d-flex flex-column' style={{ marginLeft: "100px" }}>
        <div className='d-flex gap-3 ' style={{ marginLeft: "108px" }}>
          <Input
            type="text"
            placeholder="Search by username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "60vw" }}
          />
          <Button onClick={addUser} >Add User</Button>
        </div>
        <div>
          <Table striped style={{ width: "60vw", marginLeft: "108px" }}>
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
    </div >

  );

};
