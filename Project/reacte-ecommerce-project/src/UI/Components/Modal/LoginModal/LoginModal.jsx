import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Swal from 'sweetalert2'

const intialData = {
    email: "",
    password: "",
}

export default function LoginModal({ logModal, logToggle, regtoggle }) {

    const creartaccount = () => {
        logToggle()
        regtoggle()
    }


    let [loginData, setLoginData] = useState(intialData);

    const loginUser = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: `${BE_URL}/user/signin`,
            data: loginData
        })
            .then((res) => {
                setCookie("user", res?.data?.data);
                setCookie("token", res?.data?.data);
                console.log("🚀 ~ Registration successful:", res);
                toast.success("LogIn successfully..!!");
                setLoginData(intialData);
                logToggle(); // Close the modal after successful registration
            })
            .catch((err) => {
                toast.error("Denied Access failed. Please try again later.");
            });
    
};

return (
    <>
        <div>

            <Modal isOpen={logModal} toggle={logToggle}>
                <ModalHeader toggle={logToggle}>Sign In User</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleUserName">
                                Email
                            </Label>
                            <Input
                                id="email"
                                value={loginData.email}
                                name="email"
                                placeholder="Enter a Email"
                                type="email"
                                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}

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
