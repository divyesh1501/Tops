import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const loginIntialData = {
  email: "",
  password: "",
}
export default function LoginModal({ modal, toggle }) {
  let [loginuser, setLoginUser] = useState(loginIntialData)

  const loginHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("loginuser", JSON.stringify(loginuser));
    setLoginUser(loginIntialData);
    toggle();
  }


  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>User Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={loginHandler}>
            <FormGroup>
              <Label for="exampleEmail">
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="enter your email"
                type="email"
                onChange={(e) => setLoginUser({ ...loginuser, email: e?.target?.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="enter password"
                type="password"
                onChange={(e) => setLoginUser({ ...loginuser, password: e?.target?.value })}
              />
            </FormGroup>

            <Button color="primary" type="submit"  className='me-3'>
              Submit
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>

          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}
