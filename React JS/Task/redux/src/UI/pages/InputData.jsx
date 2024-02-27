import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Table } from 'reactstrap';
import { Pencil, PencilRuler, PlusSquare, Trash2, Search } from 'lucide-react';
import { addInput, editInput, removeInput } from '../../Redux/features/Input/Input';

export default function InputData() {
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState('');

  const inputData = useSelector((store) => store.inputReducer.inputData);
  const dispatch = useDispatch();

  const addData = () => {
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

  const filteredData = inputData.filter((e) => e.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <div className='d-flex flex-column' style={{ backgroundColor: '#ffa50057' }}>
        <div className='mt-3 mb-3 d-flex justify-content-center'>
          <Input onChange={(e) => setInput(e.target.value)} value={input} style={{ boxShadow: 'none', width: '300px' }} />
          <Button color='success' style={{ boxShadow: 'none', marginLeft:"5px" }} onClick={() => addData()}>
            <PlusSquare />
          </Button>
          <Button color='success' style={{ boxShadow: 'none', marginLeft:"5px" }} onClick={() => addData()}>
            <PencilRuler />
          </Button>
        </div>
        <div className='mt-3 mb-3 d-flex justify-content-center'>
          <Input
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            style={{ boxShadow: 'none', width: '410px' }}
          />
        </div>
      </div>
      <div>
        
        <Table striped>
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
        </Table>
      </div>
    </>
  );
}
