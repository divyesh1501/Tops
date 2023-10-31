import React, { useState } from 'react'
import { BadgeMinus, FileEdit } from 'lucide-react'
import { FormGroup, Input, Label, Button, Table, Form } from 'reactstrap'

export default function CurdTask() {
    let [car, setCar] = useState("")
    const [variant, setvariant] = useState("")
    let [carArr, setCarArr] = useState([])
    let [index, setIndex] = useState(null);
    let [updateMode, setUpdateMode] = useState(false);


    const getData = (element) => {
        setCar(element.target.value)
    }
    const getSpelling = (ele) => {
        setvariant(ele.target.value)

    }
    // Add to array
    function addToArr() {

        if (car === "" || variant === "") {
            alert("please enter any data")

        } else {
            setCarArr([...carArr, { car, variant }])
            setCar("")
            setvariant("")
        }
    }
    // Update array
    function updateHandler(data, index) {
        setIndex(index);
        setCar(data.car);
        setvariant(data.variant)
        setUpdateMode(true);
    }

    function updateDataToArray() {

        if (index || index === 0) {
            carArr.splice(index, 1, { car, variant });
            setCarArr([...carArr]);
            setCar("");
            setvariant("");
            setIndex(null);
            setUpdateMode(false);

        }
    }
    // DELETE button
    const deleteHandler = (index) => {
        // filter
        let filterdData = carArr.filter((e, i) => i !== index);
        setCarArr(filterdData);
    };

    // remove all data
    function removealldata() {
        const removealldata = window.confirm("Do you want delete all data?")
        if (removealldata) {
            setCarArr([])
        }
    }

    return (
        <>
            <br />
            <Form action="" className='border rounded-2 border-dark p-3 w-25 m-auto'>
                <FormGroup>
                    <Label for="exampleEmail">Car</Label>
                    <Input value={car} type="text" name="email" id="exampleEmail" placeholder="" onChange={(e) => getData(e)} />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Variant</Label>
                    <Input value={variant} type="text" name="text" id="examplePassword" placeholder="" onChange={(e) => getSpelling(e)} />
                </FormGroup>
                {updateMode ?
                    <Button color='warning' className='w-100' onClick={() => updateDataToArray()}>Update</Button> :
                    <Button color='success' className='w-100 mb-3' onClick={() => addToArr()}>Submit</Button>}
            </Form>
            <div className='d-flex justify-content-center mt-3'><Button color='danger' onClick={() => removealldata()}>Remove All</Button></div>
            <br />
            <Table dark className="p-3">
                <thead>
                    <tr>
                        <th>Sr. NO</th>
                        <th>Car Model</th>
                        <th>Variants</th>
                        <th>Action</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carArr.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1} </td>
                                    <td>{e.car} </td>
                                    <td>{e.variant} </td>
                                    <td>
                                        <FileEdit
                                            role="button"
                                            onClick={() => updateHandler(e, i)} />
                                    </td>
                                    <td>
                                        <BadgeMinus
                                            color="#ff0000"
                                            role="button"
                                            onClick={() => deleteHandler(i)} />
                                    </td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </Table>


        </>
    )
}