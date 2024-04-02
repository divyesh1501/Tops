// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
// import Swal from 'sweetalert2';

// const initialData = {
//   userName: "",
//   userType: "User",
//   email: "",
//   number: "",
//   password: "",
//   cpassword: "",
//   age: "",
// };

// export default function UserModal({ regModal, regToggle, logtoggle }) {

//   const [data, setData] = useState(initialData);

//   const usernameAlreadyExists = (username) => {
//     const oldData = localStorage.getItem("userData");
//     const convertedOldData = JSON.parse(oldData || "[]");
//     return convertedOldData.find((user) => user.userName === username) !== undefined;
//   };

//   const isValidPassword = (password) => {
//     return password.length >= 8;
//   };

//   const registUser = () => {
//     if (!data.userName || !data.password || !data.cpassword || !data.userType) {
//       Swal.fire({
//         icon: "warning",
//         title: "Oops...",
//         text: "Please fill all input fields!",
//       });
//       setData(initialData);
//       return false;
//     }

//     if (usernameAlreadyExists(data.userName)) {
//       Swal.fire({
//         icon: "warning",
//         text: "Username is already registered. Please choose a different username.",
//       });
//       setData(initialData);
//       return false;
//     }

//     if (data.password !== data.cpassword) {
//       Swal.fire({
//         icon: "warning",
//         title: "Password Mismatch",
//         text: "Password and Confirm Password do not match!",
//       });
//       setData(initialData);
//       return false;
//     } else if (!isValidPassword(data.password)) {
//       Swal.fire({
//         icon: "warning",
//         title: "Invalid Password",
//         text: "Password must be at least 8 characters long!",
//       });
//       setData(initialData);
//       return false;
//     }

//     const oldData = localStorage.getItem('userData');
//     const convertedOldData = JSON.parse(oldData || "[]");
//     const finalData = [...convertedOldData, data];

//     localStorage.setItem("userData", JSON.stringify(finalData));
//     localStorage.setItem("loginData", JSON.stringify(data));
//     toggle();
//     setData(initialData);
//     window.location.reload();
//   };

//   const cancelForm = () => {
//     toggle();
//     setData(initialData);
//   };

//   const signInAccount = () => {
//     regToggle();
//     logtoggle();
//   };

//   return (
//     <div>
//       <Modal isOpen={regModal} toggle={regToggle}>
//         <ModalHeader toggle={regToggle}>Register Form</ModalHeader>
//         <ModalBody>


//           <Form>
//             <FormGroup>
//               <Label for="exampleUserName">
//                 Name
//               </Label>
//               <Input
//                 id="exampleUserName"
//                 value={data.userName}
//                 name="UserName"
//                 placeholder="Enter a UserName"
//                 type="text"
//                 onChange={(e) => { setData({ ...data, userName: e.target.value }) }}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="exampleSelect">
//                 UserType
//               </Label>
//               <Input
//                 id="exampleSelect"
//                 name="select"
//                 type="select"
//                 onChange={(e) => { setData({ ...data, userType: e.target.value }) }}
//               >
//                 <option>
//                   User
//                 </option>
//                 <option>
//                   Admin
//                 </option>
//                 <option>
//                   Employee
//                 </option>
//               </Input>
//             </FormGroup>
//             <FormGroup>
//               <FormGroup>
//                 <Label for="exampleEmail">
//                   Email
//                 </Label>
//                 <Input
//                   id="exampleEmail"
//                   value={data.email}
//                   name="email"
//                   placeholder="Enter your email"
//                   type="email"
//                   onChange={(e) => { setData({ ...data, email: e.target.value }) }}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="exampleNumber">
//                   Number
//                 </Label>
//                 <Input
//                   id="exampleNumber"
//                   value={data.number}
//                   name="number"
//                   placeholder="Enter your number"
//                   type="text"
//                   onChange={(e) => { setData({ ...data, number: e.target.value }) }}
//                 />
//               </FormGroup>
//               <Label for="examplePassword">
//                 Password
//               </Label>
//               <Input
//                 id="examplePassword"
//                 value={data.password}
//                 name="password"
//                 placeholder="Enter password"
//                 type="password"
//                 onChange={(e) => { setData({ ...data, password: e.target.value }) }}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="cassword">
//                 Confirm Password
//               </Label>
//               <Input
//                 id="cassword"
//                 value={data.cpassword}
//                 name="cpassword"
//                 placeholder="Enter Confirm password"
//                 type="password"
//                 onChange={(e) => { setData({ ...data, cpassword: e.target.value }) }}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="exampleAge">
//                 Age
//               </Label>
//               <Input
//                 id="exampleAge"
//                 value={data.age}
//                 name="age"
//                 placeholder="Enter your age"
//                 type="number"
//                 onChange={(e) => { setData({ ...data, age: e.target.value }) }}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="exampleAddress">
//                 Address
//               </Label>
//               <Input
//                 id="exampleAddress"
//                 value={data.address}
//                 name="address"
//                 placeholder="Enter your address"
//                 type="text"
//                 onChange={(e) => { setData({ ...data, address: e.target.value }) }}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="exampleCity">
//                 City
//               </Label>
//               <Input
//                 id="exampleCity"
//                 value={data.city}
//                 name="city"
//                 placeholder="Enter your city"
//                 type="text"
//                 onChange={(e) => { setData({ ...data, city: e.target.value }) }}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="exampleState">
//                 State
//               </Label>
//               <Input
//                 id="exampleState"
//                 value={data.state}
//                 name="state"
//                 placeholder="Enter your state"
//                 type="text"
//                 onChange={(e) => { setData({ ...data, state: e.target.value }) }}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="examplePinCode">
//                 Pin Code
//               </Label>
//               <Input
//                 id="examplePinCode"
//                 value={data.pinCode}
//                 name="pinCode"
//                 placeholder="Enter your pin code"
//                 type="text"
//                 onChange={(e) => { setData({ ...data, pinCode: e.target.value }) }}
//               />
//             </FormGroup>
//             <p>Already have an account! <span role='button' onClick={signInAccount} style={{ color: "Blue" }}>Click Here!</span></p>
//           </Form>


//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={registUser}>
//             Register User
//           </Button>{' '}
//           <Button color="secondary" onClick={cancelForm}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Toast } from 'reactstrap';
import { toast } from "react-toastify";
import axios, { } from "axios";
import Swal from 'sweetalert2';
import { BE_URL } from '../../../../Config';

const initialData = {
  userName: "",
  email: "",
  number: "",
  password: "",
  cpassword: "",
  age: "",
};

const initialAddressData = {
  address: "",
  city: "",
  state: "",
  pinCode: ""
};

export default function UserModal({ regModal, regToggle, logtoggle }) {

  const [data, setData] = useState(initialData);
  const [addressData, setAddressData] = useState(initialAddressData);

  const [cookies, setCookie] = useCookies();

  const usernameAlreadyExists = (username) => {
    const oldData = localStorage.getItem("userData");
    const convertedOldData = JSON.parse(oldData || "[]");
    return convertedOldData.find((user) => user.userName === username) !== undefined;
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const registUser = (e) => {
    e.preventDefault();
    if (
      !data.userName ||
      !data.email ||
      !data.number ||
      !data.password ||
      !data.cpassword ||
      !data.age ||
      !addressData.address ||
      !addressData.city ||
      !addressData.state ||
      !addressData.pinCode
    ) {
      toast.error("Please fill all input fields");
    } else if (data.password !== data.cpassword) {
      toast.warn("Password and Confirm Password are not Same");
    } else {
      let mainData = { ...data, addressData: [addressData] };
      axios({
        method: "post",
        url: `${BE_URL}/user/signup`,
        data: mainData
      })
        .then((res) => {
          setCookie("user", res.data.data);
          setCookie("token", res.data.token);
          console.log("🚀 ~ .then ~ res:", res)
        })
        .catch((err) => { });
      toast.success("Registration successful..!!");
      setAddressData(initialAddressData);
      setData(initialData);
      regToggle();
    }
  };


  const cancelForm = () => {
    toggle();
    setData(initialData);
    setAddressData(initialAddressData);
  };

  const signInAccount = () => {
    regToggle();
    logtoggle();
  };

  return (
    <div>
      <Modal isOpen={regModal} toggle={regToggle}>
        <ModalHeader toggle={regToggle}>Register Form</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleUserName">
                Name
              </Label>
              <Input
                id="exampleUserName"
                value={data.userName}
                name="UserName"
                placeholder="Enter a UserName"
                type="text"
                onChange={(e) => { setData({ ...data, userName: e.target.value }) }}
              />
            </FormGroup>
            
            <FormGroup>
              <Label for="exampleEmail">
                Email
              </Label>
              <Input
                id="exampleEmail"
                value={data.email}
                name="email"
                placeholder="Enter your email"
                type="email"
                onChange={(e) => { setData({ ...data, email: e.target.value }) }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleNumber">
                Number
              </Label>
              <Input
                id="exampleNumber"
                value={data.number}
                name="number"
                placeholder="Enter your number"
                type="text"
                onChange={(e) => { setData({ ...data, number: e.target.value }) }}
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
                placeholder="Enter password"
                type="password"
                onChange={(e) => { setData({ ...data, password: e.target.value }) }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="cassword">
                Confirm Password
              </Label>
              <Input
                id="cassword"
                value={data.cpassword}
                name="cpassword"
                placeholder="Enter Confirm password"
                type="password"
                onChange={(e) => { setData({ ...data, cpassword: e.target.value }) }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAge">
                Age
              </Label>
              <Input
                id="exampleAge"
                value={data.age}
                name="age"
                placeholder="Enter your age"
                type="number"
                onChange={(e) => { setData({ ...data, age: e.target.value }) }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress">
                Address
              </Label>
              <Input
                id="exampleAddress"
                value={addressData.address}
                name="address"
                placeholder="Enter your address"
                type="text"
                onChange={(e) => { setAddressData({ ...addressData, address: e.target.value }) }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleCity">
                City
              </Label>
              <Input
                id="exampleCity"
                value={addressData.city}
                name="city"
                placeholder="Enter your city"
                type="text"
                onChange={(e) => { setAddressData({ ...addressData, city: e.target.value }) }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleState">
                State
              </Label>
              <Input
                id="exampleState"
                value={addressData.state}
                name="state"
                placeholder="Enter your state"
                type="text"
                onChange={(e) => { setAddressData({ ...addressData, state: e.target.value }) }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePinCode">
                Pin Code
              </Label>
              <Input
                id="examplePinCode"
                value={addressData.pinCode}
                name="pinCode"
                placeholder="Enter your pin code"
                type="text"
                onChange={(e) => { setAddressData({ ...addressData, pinCode: e.target.value }) }}
              />
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
