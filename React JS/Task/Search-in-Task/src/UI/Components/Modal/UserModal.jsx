import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Swal from 'sweetalert2'

const intialData = {
  userName: "",
  password: "",
  cpassword: "",
  userType: "User"
}

export default function UserModal({ modal, toggle, logtoggle }) {

  let [data, setData] = useState(intialData);

  let registUser = () => {

    if (!data.userName || !data.password || !data.cpassword || !data.userType) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill all input fields!",
      });
      setData(intialData)
      return false;
    }
    
    else if (data.userName === data.userName) {
      Swal.fire({
        icon: 'warning',
        text: 'User Name is already exists..!!'
      })
      setData(intialData)

    }
    // else if (data.password !== data.cpassword) {
    //   window.alert("password dose not match")
    // }
    else {
      let oldData = localStorage.getItem('userData')
      let convertedOldData = JSON.parse(oldData || "[]")
      // console.log("🚀 ~ registUser ~ convertedOldData:", convertedOldData)
      const finalData = [...convertedOldData, data]
      
      localStorage.setItem("userData", JSON.stringify(finalData))
      localStorage.setItem("loginData", JSON.stringify(data))
      toggle()
      setData(intialData)
      window.location.reload();
    }
  }

  const cancelForm = () => {
    toggle()
    setData(intialData)
  }

  const signInAccount = () => {
    toggle()
    logtoggle()
  }

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
                type="UserName"
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
                placeholder="Enetr password"
                type="password"
                onChange={(e) => { setData({ ...data, password: e.target.value }) }}

              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Confirm Password
              </Label>
              <Input
                id="cassword"
                value={data.cpassword}
                name="cpassword"
                placeholder="Enetr Confirm password"
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
