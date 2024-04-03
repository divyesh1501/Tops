import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Table } from "reactstrap";
import { Pencil, PencilRuler, PlusSquare, Trash2 } from "lucide-react";
import { addInput, editInput, removeInput } from '../../Redux/features/Input/Input';

export default function InputData() {

  const [input, setInput] = useState("")
  const [editIndex, setEditIndex] = useState(null);

  const inputData = useSelector((store) => {
    return store.inputReducer.inputData
  })

  const dispatch = useDispatch()

  //creat
  let addData = () => {
    dispatch(addInput(input))
    setInput("")
  }

  //update
  let editData = (e, i) => {
    setInput(e);
    setEditIndex(i);
  }
  let updateData = () => {
    dispatch(editInput({ editIndex, input }));
    setInput("")
    setEditIndex(null);
  };
  
  //delete
  let removeData = (i) => {
    dispatch(removeInput(i))
  }
  
  return (
    <>
      <div className='d-flex justify-content-center' style={{ backgroundColor: "#ffa50057" }}>
        <div className='pt-5 pb-5 w-50 d-flex justify-content-center'>
          <Input
            onChange={(e) => setInput(e?.target?.value)}
            value={input}
            style={{ boxShadow: "none" }} />
          {editIndex === null ? (<Button color='success' style={{ boxShadow: "none" }} onClick={() => addData()}><PlusSquare /></Button>) :
            (<Button color='success' style={{ boxShadow: "none" }} onClick={() => updateData()}><PencilRuler /></Button>)}
        </div>
      </div>
      <div>
        {/* read */}
        <Table striped>
          <thead>
            <tr>
              <th>
                Sr.No
              </th>
              <th>
                Data
              </th>
              <th>
                Edit
              </th>
              <th>
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {inputData.map((e, i) => (

              <tr key={i}>
                <th scope="row">
                  {i + 1}
                </th>
                <td>
                  {e}
                </td>
                <td>
                  <Pencil role='button' color='orange' onClick={() => editData(e, i)} />
                </td>
                <td>
                  <Trash2 role='button' color='red' onClick={() => removeData(i)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}
