import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, FormGroup } from 'reactstrap';

const intialData = {
    email: "",
    password: "",
    userType: "",
}
export default function RegModal({ modal, toggle }) {
    let [user, setUser] = useState(intialData);
    console.log("🚀 ~ file: RegModal.jsx:10 ~ RegModal ~ user:", user)

    const handleSubmit = (e) => {
        e.preventDefault();
        let oldData = localStorage.getItem("userData") || "[]"
        let convertedOldData = JSON.parse(oldData) 
        console.log("🚀 ~ file: RegModal.jsx:18 ~ handleSubmit ~ convertedOldData:", convertedOldData)
        let matchUser = convertedOldData.find((e) => e.email === user.email)
        console.log("🚀 ~ file: RegModal.jsx:19 ~ handleSubmit ~ matchUser:", matchUser)
        if (matchUser) {
            alert("Data already exist")
            return
        } else {
            let finalData = [...convertedOldData, user]
            localStorage.setItem("userData", JSON.stringify(finalData));
            setUser(intialData);
            toggle();

        }
    }


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}  >
                <ModalHeader toggle={toggle}>Register User</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="enter your email"
                                type="email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e?.target?.value })}

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
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e?.target?.value })}

                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                                User Type
                            </Label>
                            <Input
                                id="exampleUserType"
                                name="userType"
                                type="select"
                                onChange={(e) => setUser({ ...user, userType: e?.target?.value })}
                            >
                                <option>
                                    User
                                </option>
                                <option>
                                    Admin
                                </option>

                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit" onClick={toggle} className='me-3'>
                                Register
                            </Button>

                            <Button color="secondary" onClick={toggle}>
                                Cancel
                            </Button>
                        </FormGroup>

                    </Form>
                </ModalBody>

            </Modal>
        </div>
    );
}

