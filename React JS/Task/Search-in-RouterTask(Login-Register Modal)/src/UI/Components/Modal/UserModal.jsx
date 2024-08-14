import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Swal from 'sweetalert2';

const initialData = {
  userName: "",
  password: "",
  cpassword: "",
  userType: "User"
};

export default function UserModal({ modal, toggle, logtoggle }) {

  const [data, setData] = useState(initialData);

  const usernameAlreadyExists = (username) => {
    const oldData = localStorage.getItem("userData");
    const convertedOldData = JSON.parse(oldData || "[]");
    return convertedOldData.find((user) => user.userName === username) !== undefined;
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const registUser = () => {
    if (!data.userName || !data.password || !data.cpassword || !data.userType) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill all input fields!",
      });
      setData(initialData);
      return false;
    }

    if (usernameAlreadyExists(data.userName)) {
      Swal.fire({
        icon: "warning",
        text: "Username is already registered. Please choose a different username.",
      });
      setData(initialData);
      return false;
    }

    if (data.password !== data.cpassword) {
      Swal.fire({
        icon: "warning",
        title: "Password Mismatch",
        text: "Password and Confirm Password do not match!",
      });
      setData(initialData);
      return false;
    } else if (!isValidPassword(data.password)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Password",
        text: "Password must be at least 8 characters long!",
      });
      setData(initialData);
      return false;
    }

    const oldData = localStorage.getItem('userData');
    const convertedOldData = JSON.parse(oldData || "[]");
    const finalData = [...convertedOldData, data];

    localStorage.setItem("userData", JSON.stringify(finalData));
    localStorage.setItem("loginData", JSON.stringify(data));
    toggle();
    setData(initialData);
    window.location.reload();
  };

  const cancelForm = () => {
    toggle();
    setData(initialData);
  };

  const signInAccount = () => {
    toggle();
    logtoggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register Form</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleUserName">
                UserName
              </Label>
              <Input
                id="exampleUserName"
                value={data.userName}
                name="UserName"
                placeholder="Enter a UserName"
                type="text"
                onChange={(e) => { setData({ ...data, userName: e.target.value }) }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Password
              </Label>
              <Input
                id="examplePassword"
                value={data.password}
                name="password"
                placeholder="Enter password"
                type="password"
                onChange={(e) => { setData({ ...data, password: e.target.value }) }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="cassword">
                Confirm Password
              </Label>
              <Input
                id="cassword"
                value={data.cpassword}
                name="cpassword"
                placeholder="Enter Confirm password"
                type="password"
                onChange={(e) => { setData({ ...data, cpassword: e.target.value }) }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">
                UserType
              </Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                onChange={(e) => { setData({ ...data, userType: e.target.value }) }}
              >
                <option>
                  User
                </option>
                <option>
                  Admin
                </option>
                <option>
                  Employee
                </option>
              </Input>
            </FormGroup>
            <p>Already have an account! <span role='button' onClick={signInAccount} style={{ color: "Blue" }}>Click Here!</span></p>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={registUser}>
            Register User
          </Button>{' '}
          <Button color="secondary" onClick={cancelForm}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
