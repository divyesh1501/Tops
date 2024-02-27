import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Table } from 'reactstrap';
import { Pencil, PlusSquare, Trash2 } from 'lucide-react';
import { addInput, editInput, removeInput } from '../../Redux/features/Input/Input';

export default function InputData() {
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const inputData = useSelector((store) => store.inputReducer.inputData);
  const dispatch = useDispatch();

  useEffect(() => {
    // Update filteredData whenever inputData or search changes
    const filtered = inputData.filter((e) => e.toLowerCase().includes(search.toLowerCase()));
    setFilteredData(filtered);
  }, [inputData, search]);

  const addData = () => {
    if(input === ""){
      alert("please enter data")
      return;
    }
    if (editIndex !== null) {
      dispatch(editInput({ editIndex, input }));
      setEditIndex(null);
    } else {
      dispatch(addInput(input));
    }
    setInput('');
  };

  const removeData = (i) => {
    dispatch(removeInput(i));
  };

  const editData = (e, i) => {
    setInput(e);
    setEditIndex(i);
  };

  return (
    <>
      <div className='d-flex flex-column' style={{ backgroundColor: '#ffa50057' }}>
        <div className='mt-3 mb-3 d-flex justify-content-center'>
          <Input
            placeholder='Enter data'
            onChange={(e) => setInput(e.target.value)}
            value={input}
            style={{ boxShadow: 'none', width: '300px' }} />
          <Button color='success' style={{ boxShadow: 'none', marginLeft: '5px' }} onClick={() => addData()}>
            <PlusSquare />
          </Button>
        </div>
        <div className='mt-3 mb-3 d-flex justify-content-center'>
          <Input
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            style={{ boxShadow: 'none', width: '356px' }}
          />
        </div>
      </div>
      <div>
        {filteredData.length === 0 ? (<div className='d-flex justify-content-center' style={{ fontSize: "30px", fontWeight: "bold" }}><p>Data not found ..!!</p> </div>) : (<Table striped>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Data</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((e, i) => (
              <tr key={i}>
                <th scope='row'>{i + 1}</th>
                <td>{e}</td>
                <td>
                  <Pencil role='button' color='orange' onClick={() => editData(e, i)} />
                </td>
                <td>
                  <Trash2 role='button' color='red' onClick={() => removeData(i)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>)
        }
      </div>
    </>
  );
}
