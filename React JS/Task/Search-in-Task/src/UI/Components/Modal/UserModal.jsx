import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Swal from 'sweetalert2'

const intialData = {
  userName: "",
  password: "",
  userType: ""
}

export default function UserModal({ modal, toggle, logtoggle }) {

  let [data, setData] = useState(intialData);

  let registUser = () => {

    if (!data.userName || !data.password || !data.userType) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill all input fields!",
      });
      return false;
    }
    else {
      let oldData = localStorage.getItem('userData')
      let convertedOldData = JSON.parse(oldData || "[]")
      console.log("🚀 ~ registUser ~ convertedOldData:", convertedOldData)
      const finalData = [...convertedOldData, data]

      localStorage.setItem("userData", JSON.stringify(finalData))
      localStorage.setItem("loginData", JSON.stringify(data))
      toggle()
      setData(intialData)
      window.location.reload();
    }
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
                  ---select---
                </option>
                <option>
                  Admin
                </option>
                <option>
                  Employee
                </option>
                <option>
                  User
                </option>
              </Input>
            </FormGroup>
            <p>Already have an account! <span role='button' onClick={signInAccount} style={{color:"Blue"} }>Click Here!</span></p>
            
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={registUser}>
            Register User
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  );
}
