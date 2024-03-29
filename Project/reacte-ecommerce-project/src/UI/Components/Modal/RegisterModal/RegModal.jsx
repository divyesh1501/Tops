// import React, { useState } from 'react'
// import RG from "../RegisterModal/Images/RGModal.webp";
// import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

// export default function RegModal() {
//     const [regmodal, setRegModal] = useState(false);
//     const regtoggle = () => setRegModal(!regmodal);
//     return (
//         <>
//             <div className='flex flex-row'>
//                 <div>
//                     <img src={RG} alt="" />
//                 </div>
//                 <div>
//                     <Modal isOpen={regmodal} toggle={regtoggle}>
//                         <ModalHeader toggle={regtoggle}>Register Form</ModalHeader>
//                         <ModalBody>
//                             <Form>
//                                 <FormGroup>
//                                     <Label for="exampleFirstName">
//                                         First Name
//                                     </Label>
//                                     <Input
//                                         id="exampleFirstName"
//                                         name="FirstName"
//                                         placeholder="First"
//                                         type="text"
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="exampleLastName">
//                                         Last Name
//                                     </Label>
//                                     <Input
//                                         id="exampleLastName"
//                                         name="LastName"
//                                         placeholder="LastName"
//                                         type="text"
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="ExampleEmail">
//                                         Email
//                                     </Label>
//                                     <Input
//                                         id="Exampleemail"
//                                         name="Email"
//                                         placeholder="Email"
//                                         type="text"
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="examplePassword">
//                                         Password
//                                     </Label>
//                                     <Input
//                                         id="examplePassword"
//                                         name="selepasswordct"
//                                         placeholder='password'
//                                         type="password"
//                                     />
//                                 </FormGroup>
//                             </Form>
//                         </ModalBody>
//                         <ModalFooter>
//                             <Button className='bg-red-800 uppercase rounded-full'>
//                                 create
//                             </Button>
//                         </ModalFooter>
//                     </Modal>
//                 </div>
//             </div>
//         </>
//     )
// }

import React, { useState } from 'react';
import RG from "../RegisterModal/Images/RGModal.jpg";
import hmark from "../RegisterModal/Images/heading-mark.webp";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default function RegModal() {
    const [regmodal, setRegModal] = useState(true); // Set initial state to true for modal to be displayed
    const regtoggle = () => setRegModal(!regmodal);

    return (
        // <div className='flex flex-row'>
        //     <div>
        //         <img src={RG} alt="" />
        //     </div>
        //     <div>

        //         <Modal isOpen={regmodal} toggle={regtoggle}>
        //             <ModalHeader toggle={regtoggle}>Register Form</ModalHeader>
        //             <ModalBody>
        //                 <Form>
        //                     <FormGroup>
        //                         <Label for="exampleFirstName">First Name</Label>
        //                         <Input id="exampleFirstName" name="FirstName" placeholder="First" type="text" />
        //                     </FormGroup>
        //                     <FormGroup>
        //                         <Label for="exampleLastName">Last Name</Label>
        //                         <Input id="exampleLastName" name="LastName" placeholder="LastName" type="text" />
        //                     </FormGroup>
        //                     <FormGroup>
        //                         <Label for="ExampleEmail">Email</Label>
        //                         <Input id="ExampleEmail" name="Email" placeholder="Email" type="text" />
        //                     </FormGroup>
        //                     <FormGroup>
        //                         <Label for="examplePassword">Password</Label>
        //                         <Input id="examplePassword" name="Password" placeholder="Password" type="password" />
        //                     </FormGroup>
        //                 </Form>
        //             </ModalBody>
        //             <ModalFooter>
        //                 <Button className='bg-red-800 uppercase rounded-full'>Create</Button>
        //             </ModalFooter>
        //         </Modal>
        //     </div>
        // </div>
        <>
            <div className='flex justify-center gap-10'>
                <div className='w-96 h-96'>
                    <img src={RG} alt="" className='rounded-s-2xl'/>
                </div>
                <div className='flex justify-center items-center'>
                    <Form>
                        <FormGroup className='flex flex-col'>
                            <Label>First Name</Label>
                            <Input
                                type='text'
                                className='border-b-2 border-black outline-none'
                            />
                        </FormGroup>
                        <FormGroup className='flex flex-col'>
                            <Label>Last Name</Label>
                            <Input
                                type='text'
                                className='border-b-2 border-black outline-none'
                            />
                        </FormGroup>
                        <FormGroup className='flex flex-col'>
                            <Label>Email</Label>
                            <Input
                                type='text'
                                className='border-b-2 border-black outline-none'
                            />
                        </FormGroup>
                        <FormGroup className='flex flex-col'>
                            <Label>Password</Label>
                            <Input
                                type='password'
                                className='border-b-2 border-black outline-none'
                            />
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </>
    );
}
