import { BadgeMinus, Eye, FileEdit } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function FullCurd() {
    let [userData, setUserdata] = useState({
        firstname: "",
        lastname: "",
        contact: "",
        email: "",
        password: "",
    });
    let [index, setIndex] = useState(null)
    let [updatemode, setUpdateMode] = useState(false)
    let [showIndex, setShowIndex] = useState([]);
    const [userArr, setUserArr] = useState([]);


    // useEffect(() => {
    //     let jsonStr = localStorage.getItem("dataArr")
    //     let normalData = JSON.parse(jsonStr)
    //     setUserArr(normalData)

    // }, [])

    useEffect(() => {
        let jsonStr = localStorage.getItem("dataArr");
        if (jsonStr) {
            let normalData = JSON.parse(jsonStr);
            setUserArr(normalData);
        }
    }, []);

    // add to array function on submit
    function addToarr() {
        if (userData.email === "" || userData.password === "") {
            alert("please enter email and password compulsory")
        } else {
            setUserArr([...userArr, userData])
            localStorage.setItem("dataArr", JSON.stringify([...userArr, userData]));
            setUserdata({
                firstname: "",
                lastname: "",
                contact: "",
                email: "",
                password: "",
            })
        }
    }
    // update array
    function updatArray(data, index) {
        setUserdata({ ...data });
        setIndex(index);
        setUpdateMode(true);
    }
    function updateDataToArray() {

        if (userData.email === "" || userData.password === "") {
            alert("please enter email and password compulsory")
        } else {
            (index || index === 0)
            userArr.splice(index, 1, { ...userData })
            setUserArr([...userArr])
            localStorage.setItem("dataArr", JSON.stringify([...userArr]));
            setIndex(null)
            setUserdata({ firstname: "", lastname: "", contact: "", email: "", password: "" })
            setUpdateMode(false)
        }
    }
    // remove single row
    let removeHandler = (index) => {
        const removeData = window.confirm("Do you want to remove this row?");
        if (removeData) {
            let filterData = userArr.filter((e, i) => {
                return i !== index
            })
            setUserArr(filterData)
            localStorage.setItem("dataArr", JSON.stringify(filterData))
        }
    }

    // remove all data
    function removealldata() {
        const removeall = window.confirm("Do you want to remove all data?")
        if (removeall) {
            const removealll = window.confirm("Are you sure you want to reomve all data?")
            if (removealll) {
                setUserArr([])
                localStorage.removeItem("dataArr")
            }
        }
    }

    // showPassHandler
    const showPassHandler = (i) => {
        if (showIndex.includes(i)){
            setShowIndex(showIndex.filter((index) => index !== i));
        }else {
            setShowIndex([...showIndex, i])
        }
    }

    return (
        <>
            <br />
            {/* ====== Form ====== */}
            <Form action="" className='border rounded-2 border-dark p-3 w-25 m-auto'>
                <FormGroup>
                    <Label for="firstname">FirstName</Label>
                    <Input

                        id="firstname"
                        name="firstname"
                        value={userData?.firstname}
                        placeholder="Enter your Firstname"
                        type="text"
                        onChange={(e) => setUserdata({ ...userData, firstname: e.target?.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="lastname">LastName</Label>
                    <Input
                        id="lastname"
                        name="lastname"
                        value={userData?.lastname}
                        placeholder="Enter your Lastname"
                        type="text"
                        onChange={(e) => setUserdata({ ...userData, lastname: e.target?.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="conatct">Contact No.</Label>
                    <Input
                        id="contact"
                        name="contact"
                        value={userData?.contact}
                        placeholder="Enter your Contact No"
                        type="text"
                        onChange={(e) => setUserdata({ ...userData, contact: e.target?.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email<span className="text-danger">*</span></Label>
                    <Input
                        id="email"
                        name="email"
                        value={userData?.email}
                        placeholder="Enter your Email"
                        type="text"
                        onChange={(e) => setUserdata({ ...userData, email: e.target?.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password<span className="text-danger">*</span></Label>
                    <Input
                        id="password"
                        name="password"
                        value={userData?.password}
                        placeholder="Enter your Password"
                        type="password"
                        onChange={(e) => setUserdata({ ...userData, password: e.target?.value })}
                    />
                </FormGroup>
                {updatemode ? (
                    <Button onClick={() => updateDataToArray()} color='warning' className='w-100' >Update</Button>) :
                    (<Button onClick={() => addToarr()} color='success' className='w-100 mb-3' >Submit
                    </Button>)}
            </Form>
            <br />
            <div className='d-flex justify-content-center'>
                <Button color='danger' onClick={() => removealldata()}>Remove All Data</Button>
            </div>
            <br />
            <hr className='m-0' />
            {/* ====== Table ====== */}
            <div className='d-flex justify-content-center text-danger fw-bold mt-3'>
                {userArr.length === 0 ? ("Data Not Available!") : (<Table dark className="p-3">
                    <thead>
                        <tr>
                            <th>Sr. NO</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Conatct No.</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                            <th>Remove</th>
                            <th>Show Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userArr?.map?.((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1} </td>
                                        <td>{e?.firstname} </td>
                                        <td>{e?.lastname} </td>
                                        <td>{e?.contact} </td>
                                        <td>{e?.email} </td>
                                        <td>{showIndex.includes(i) ? e.password: "********"} </td>
                                        <td>
                                            <FileEdit
                                                role="button"
                                                onClick={() => updatArray(e, i)}
                                            />
                                        </td>
                                        <td>
                                            <BadgeMinus
                                                color="#ff0000"
                                                role="button"
                                                onClick={() => removeHandler(i)}
                                            />
                                        </td>
                                        <td>
                                            <Eye
                                                color="#f50000"
                                                role="button"
                                                onClick={() => showPassHandler(i)}
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>)}
            </div>
        </>
    )
}
