import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { toast } from "react-toastify";
import axios from "axios";
import { BE_URL } from '../../../../Config';

const initialData = {
  name: "",
  email: "",
  number: "",
  password: "",
  cpassword: "",
  age: "",
};

const initialAddressData = {
  city: "",
  state: "",
  pinCode: "",
};

export default function UserModal({ regModal, regToggle }) {
  const [data, setData] = useState(initialData);
  const [addressData, setAddressData] = useState(initialAddressData);
  const [cookies, setCookie] = useCookies();

  const registUser = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.number || !data.password || !data.cpassword || !data.age || !addressData.city || !addressData.state || !addressData.pinCode) {
      toast.error("Please fill all input fields");
    } else if (data.password !== data.cpassword) {
      toast.warn("Password and Confirm Password are not the same");
    } else {
      let mainData = { ...data, address: [addressData] };
      console.log("🚀 ~ registUser ~ mainData:", mainData)
      axios({
        method: "post",
        url: `${BE_URL}/user/signup`,
        data: mainData
      })
        .then((res) => {
          setCookie("user", res?.data?.data);
          setCookie("token", res?.data?.data);
          console.log("🚀 ~ Registration successful:", res);
          toast.success("Registration successful..!!");
          setAddressData(initialAddressData);
          setData(initialData);
          regToggle(); // Close the modal after successful registration
        })
        .catch((err) => {
          console.error("Registration failed:", err);
          toast.error("Registration failed. Please try again later.");
        });
    }
  };

  return (
    <div>
      {/* <Button onClick={regToggle}>Open Register Form</Button> */}
      <Modal isOpen={regModal} toggle={regToggle}>
        <ModalHeader toggle={regToggle}>Register Form</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">User Name</Label>
              <Input
                type="text"
                id="name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e?.target?.value })}
              />
            </FormGroup>
            {/* <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                id="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e?.target?.value })}
              />
            </FormGroup> */}
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"  // Change type to "email"
                id="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e?.target?.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label for="number">Phone Number</Label>
              <Input
                type="text"
                id="number"
                value={data.number}
                onChange={(e) => setData({ ...data, number: e?.target?.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e?.target?.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="cpassword">Confirm Password</Label>
              <Input
                type="password"
                id="cpassword"
                value={data.cpassword}
                onChange={(e) => setData({ ...data, cpassword: e?.target?.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                type="number"
                id="age"
                value={data.age}
                onChange={(e) => setData({ ...data, age: e?.target?.value })}
              />
            </FormGroup>
            {/* <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                id="address"
                value={addressData.address}
                onChange={(e) => setAddressData({ ...addressData, address: e?.target?.value })}
              />
            </FormGroup> */}
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                id="city"
                value={addressData.city}
                onChange={(e) => setAddressData({ ...addressData, city: e?.target?.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                type="text"
                id="state"
                value={addressData.state}
                onChange={(e) => setAddressData({ ...addressData, state: e?.target?.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="pinCode">Pin Code</Label>
              <Input
                type="number"
                id="pinCode"
                value={addressData.pinCode}
                onChange={(e) => setAddressData({ ...addressData, pinCode: e?.target?.value })}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={registUser}>Register User</Button>{' '}
          <Button color="secondary" onClick={regToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
