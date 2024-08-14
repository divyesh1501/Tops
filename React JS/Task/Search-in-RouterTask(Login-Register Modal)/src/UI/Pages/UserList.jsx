import React, { useState, useEffect } from 'react';
import { Button, Col, FormGroup, Input, Label, Table } from 'reactstrap';

export const UserList = ({ modal, toggle, regtoggle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]); // Use an array to store selected types
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const options = [
    { value: 'admin', label: 'Admin' },
    { value: 'employee', label: 'Employee' },
    { value: 'user', label: 'User' }
  ];

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('userData')) || [];
    setAllUsers(storedUsers);
    setFilteredUsers(storedUsers);
  }, []);

  useEffect(() => {
    let filtered;

    if (selectedTypes.length === 0) {
      filtered = allUsers.filter(user => user.userName.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      filtered = allUsers.filter(user => selectedTypes.includes(user.userType.toLowerCase()) && user.userName.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredUsers(filtered);

  }, [searchTerm, selectedTypes, allUsers]);

  const handleTypeChange = (type) => {
    const updatedTypes = [...selectedTypes];
    const index = updatedTypes.indexOf(type);

    if (index === -1) {
      updatedTypes.push(type);
    } else {
      updatedTypes.splice(index, 1);
    }
    setSelectedTypes(updatedTypes);
    setSearchTerm('');
  };


  return (
    <div className='userTable d-flex align-items-center flex-column mt-3 '>
      <div className='d-flex w-100'>
        <FormGroup row className='w-100'>
          <div className='d-flex justify-content-center w-100'>
            <div className='d-flex align-items-center' style={{marginRight:"50px"}}>
              <Label
                for="exampleSelect"
                sm={1}
                style={{ width: "100px" }}
              >
                User Type:
              </Label>
              <Col sm={10}>
                {options.map((option) => (
                  <div key={option.value} className="form-check form-check-inline align-items-center" style={{ marginTop: "10px" }}>
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      id={option.value}
                      checked={selectedTypes.includes(option.value)}
                      onChange={() => handleTypeChange(option.value)}
                    />
                    <Label className="form-check-label" for={option.value}>{option.label}</Label>
                  </div>
                ))}
              </Col>
            </div>

          </div>
        </FormGroup>
        <div style={{width:"23%"}}>
          <Button onClick={regtoggle} >Add User</Button>
        </div>
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
        </div>
        <div>
          {filteredUsers.length === 0 ? (
            <div className='d-flex justify-content-center m-5' style={{ fontSize: "30px", fontWeight: "bold" }}>
              <p>Data not found ..!!</p>
            </div>
          ) : (<Table striped style={{ width: "60vw", marginLeft: "108px" }}>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>UserName</th>
                <th>Password</th>
                <th>UserType</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.userName}</td>
                  <td>{user.password}</td>
                  <td>{user.userType}</td>
                </tr>
              ))}
            </tbody>
          </Table>)}

        </div>
      </div>
    </div >
  );
};

