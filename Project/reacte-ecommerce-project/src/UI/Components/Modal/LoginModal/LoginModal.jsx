import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Swal from 'sweetalert2'

const intialData = {
    userName: "",
    password: "",
}

export default function LoginModal({ logModal, logToggle, regtoggle }) {

    const creartaccount = () => {
        logToggle()
        regtoggle()
    }


    let [loginData, setLoginData] = useState(intialData);

    let loginUser = () => {
        let getData = JSON.parse(localStorage.getItem("userData")) || []
        let findGetData = getData.find((e) => e.userName === loginData.userName && e.password === loginData.password)
        if (!findGetData) {
            Swal.fire({
                icon: "warning",
                text: "Invalid username or password",
            });
            return false;
        }
        if (findGetData) {
            localStorage.setItem("loginData", JSON.stringify(findGetData))
            regtoggle()
            setLoginData(intialData)
            Swal.fire({
                icon: "success",
                text: "Login successfully..!!",
            });
            return false;
        }
    }

    return (
        <>
            <div>

                <Modal isOpen={logModal} toggle={logToggle}>
                    <ModalHeader toggle={logToggle}>Sign In User</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleUserName">
                                    UserName
                                </Label>
                                <Input
                                    id="exampleUserName"
                                    value={loginData.userName}
                                    name="UserName"
                                    placeholder="Enter a UserName"
                                    type="UserName"
                                    onChange={(e) => { setLoginData({ ...loginData, userName: e.target.value }) }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Password
                                </Label>
                                <Input
                                    id="examplePassword"
                                    value={loginData.password}
                                    name="password"
                                    placeholder="Enetr password"
                                    type="password"
                                    onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}

                                />
                            </FormGroup>
                            <p>Don't have a account Creat account <span role='button' onClick={creartaccount} style={{ color: "Blue" }}>Click Here!</span></p>

                        </Form>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={loginUser}>
                            SignIn
                        </Button>{' '}
                        <Button color="secondary" onClick={logToggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    );
}
