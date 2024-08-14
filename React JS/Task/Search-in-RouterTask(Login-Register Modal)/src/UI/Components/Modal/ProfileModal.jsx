import { Power, XCircle } from 'lucide-react';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

export default function ProfileModal({ logoutHandler, loggedUser, profilemodal, profiletoggle }) {
    

    return (
        <div>
          
            <Modal isOpen={profilemodal} toggle={profiletoggle}>
                <ModalHeader toggle={profiletoggle}>User Data</ModalHeader>
                <ModalBody>
                    <Table striped >
                        <thead>
                            <tr>
                                <th>UserName</th>
                                <th>UserType</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{loggedUser?.userName}</td>
                                <td>{loggedUser?.userType}</td>
                            </tr>
                        </tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                    
                    <Button style={{ backgroundColor: "transparent", border: "none" }} onClick={profiletoggle}><XCircle color='black' /></Button>
                    <Button style={{ backgroundColor: "transparent", border: "none" }} onClick={logoutHandler}><Power color='red' /></Button>
                </ModalFooter>
            </Modal>
            
        </div>
    );
}


