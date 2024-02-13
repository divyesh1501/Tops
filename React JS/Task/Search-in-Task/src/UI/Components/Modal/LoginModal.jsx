import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { Header } from '../Header/Header';
import Swal from 'sweetalert2'
import { resolvePath } from 'react-router';

const intialData = {
    userName: "",
    password: "",
}

export default function LoginModal({ modal, toggle, regtoggle }) {

    const creartaccount = () => {
        toggle()
        regtoggle()
    }
    
    const newUserAdded = (newUserData) => {
        setAllUsers(newUserData);
      };
    

    let [loginData, setLoginData] = useState(intialData);

    let loginUser = () => {

        if (loginData.userName == loginData.password) {
            toggle()
            setLoginData(intialData)
        //     Swal.fire({
        //         icon: "warning",
        //         title: "Oops...",
        //         text: "Please fill all input fiels!",
        //     });
        //     return false;
        // }
        // else {
        //     let oldData = localStorage.getItem('userData')
        //     let convertedOldData = JSON.parse(oldData || "[]")
        //     console.log("🚀 ~ registUser ~ convertedOldData:", convertedOldData)
        //     const finalData = [...convertedOldData, data]

        //     localStorage.setItem("userData", JSON.stringify(finalData))
        //     toggle()
        //     setLoginData(intialData)
        //     window.location.reload();
        }
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
                        <p>Don't have a account Creat account <span role='button' onClick={creartaccount} style={{color:"Blue"} }>Click Here!</span></p>

                    </Form>
                </ModalBody>
                
                <ModalFooter>
                    <Button color="primary" onClick={loginUser}>
                        SignIn
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </div>
    );
}
