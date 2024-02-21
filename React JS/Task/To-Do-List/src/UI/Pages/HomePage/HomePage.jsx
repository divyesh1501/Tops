import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap';
import { Trash2 } from 'lucide-react';
import './index.css'

export default function HomePage() {

  let [addData, setAddData] = useState('');
  let [userData, setUserData] = useState([]);
  let [selectedData, setSelectedData] = useState([]);
  let [getData, setGetData] = useState([]);



  useEffect(() => {
    let doneData = JSON.parse(localStorage.getItem('donedata')) || []
    setUserData(doneData);
    let undoneData = JSON.parse(localStorage.getItem('undonedata')) || []
    setGetData(undoneData);

  }, [])

  const addToData = () => {
    setUserData([...userData, addData]);
    localStorage.setItem('donedata', JSON.stringify([...userData, addData]));
    setAddData('')
  };

  const checkHandler = (checkData) => {
    let index = selectedData?.indexOf(checkData)
    if (index !== -1) {
      selectedData.splice(index, 1)
      setSelectedData([...selectedData])
    } else {
      setSelectedData([...selectedData, checkData])
    }
  };

  const submitHandler = () => {

    const updateUserData = userData.filter((e) => !selectedData.includes(e));

    setUserData(updateUserData);
    localStorage.setItem('donedata', JSON.stringify(updateUserData));

    setGetData([...getData, ...selectedData]);
    localStorage.setItem("undonedata", JSON.stringify([...getData, ...selectedData]));

    setSelectedData([]);
  }

  const removeHandler = () => {
    const updateGetData = getData.filter((e) => !selectedData.includes(e));

    setGetData(updateGetData);
    localStorage.setItem("undonedata", JSON.stringify(updateGetData));

    setUserData([...userData, ...selectedData]);
    localStorage.setItem("donedata", JSON.stringify([...userData, ...selectedData]));

    setSelectedData([]);
  }


  return (
    <>
      <div className='d-flex justify-content-center mt-3'>
        <h3 className='text-white'>To Do List</h3>
      </div>

      <div>
        <Form className='todo mt-3'>
          <FormGroup className='d-flex w-50 gap-2'>
            <Input
              value={addData}
              id='todo'
              name='Todo'
              placeholder='Enter data'
              type='text'
              onChange={(e) => setAddData(e?.target?.value)}
            />
            <Button onClick={addToData}>
              Add Data
            </Button>
          </FormGroup>
        </Form>
      </div>

      <div class="content" className='d-flex gap-5 m-5 '>
        <div class="notebook-page" style={{ flex: "1" }}>
        <h4>Undone Task</h4>
          {userData.map((e, i) => (
            <ul style={{ listStyle: 'none' }} key={i} >
              <div className='d-flex align-item-center'>
                <span style={{paddingRight:"15px"}}>{i + 1}</span>
                <li  >

                  <Input
                    onChange={() => checkHandler(e)}
                    checked={selectedData.includes(e)}
                    type='checkbox'
                    style={{borderRadius:"50px", boxShadow:"none"}}
                  />
                  <Label style={{paddingLeft:"15px"}} >{e}</Label>
                </li>
              </div>
            </ul>
          ))}
          <div>
            <Button className='bg-danger border-0' onClick={submitHandler} >Add To Done</Button>
          </div>
        </div>

        <div class="notebook-page" style={{ flex: "1" }}>
        <h4>Done Task</h4>
          {getData.map((e, i) => (
            <ul style={{ listStyle: 'none' }} key={i}>
              <div className='d-flex align-item-center'>
                <span style={{paddingRight:"15px"}}>{i + 1}</span>
                <li >

                  <Input
                    onChange={() => checkHandler(e)}
                    checked={selectedData.includes(e)}
                    type='checkbox'
                    style={{borderRadius:"50px", boxShadow:"none"}}

                  />
                  <Label  style={{paddingLeft:"15px", paddingRight:"15px"}} >{e}</Label>
                </li>
                <span>
                  <Trash2 role='button' onClick={removeHandler}  />
                </span>
              </div>
            </ul>
          ))}
         
        </div>
      </div>

     

    </>
  );
}


// import React, { useEffect, useState } from 'react';
// import { Button, Form, FormGroup, Input, Table } from 'reactstrap';
// import { Trash2 } from 'lucide-react';
// import './index.css';

// export default function HomePage() {
//   let [addData, setAddData] = useState('');
//   let [userData, setUserData] = useState([]);
//   let [selectedData, setSelectedData] = useState([]);
//   let [getData, setGetData] = useState([]);

//   useEffect(() => {
//     let doneData = JSON.parse(localStorage.getItem('donedata')) || [];
//     setUserData(doneData);
//     let undoneData = JSON.parse(localStorage.getItem('undonedata')) || [];
//     setGetData(undoneData);
//   }, []);

//   const addToData = () => {
//     setUserData([...userData, addData]);
//     localStorage.setItem('donedata', JSON.stringify([...userData, addData]));
//     setAddData('');
//   };

//   const checkHandler = (isChecked, checkData) => {
//     let index = selectedData.indexOf(checkData);
//     if (index !== -1) {
//       selectedData.splice(index, 1);
//       setSelectedData([...selectedData]);
//     } else {
//       setSelectedData([...selectedData, checkData]);
//     }
//   };

//   const submitHandler = () => {
//     const updatedUserData = userData.filter((e) => !selectedData.includes(e));
//     setUserData(updatedUserData);
//     localStorage.setItem('donedata', JSON.stringify(updatedUserData));

//     setGetData([...getData, ...selectedData]);
//     localStorage.setItem('undonedata', JSON.stringify([...getData, ...selectedData]));

//     setSelectedData([]);
//   };

//   const removeHandler = () => {
//     const updatedGetData = getData.filter((e) => !selectedData.includes(e));
//     setGetData(updatedGetData);
//     localStorage.setItem('undonedata', JSON.stringify(updatedGetData));

//     setSelectedData([]);
//   };

//   return (
//     <>
//       <div>
//         <Form className='todo mt-3'>
//           <FormGroup className='d-flex w-50 gap-2'>
//             <Input
//               value={addData}
//               id='todo'
//               name='Todo'
//               placeholder='Enter data'
//               type='text'
//               onChange={(e) => setAddData(e?.target?.value)}
//             />
//             <Button onClick={addToData}>Add Data</Button>
//           </FormGroup>
//         </Form>
//       </div>
//       <div className='d-flex w-100 gap-5'>
//         <div className='table-1'>
//           <Table striped>
//             <thead>
//               <tr>
//                 <th>Sr.No</th>
//                 <th>Product</th>
//               </tr>
//             </thead>
//             <tbody>
//               {userData.map((e, i) => (
//                 <tr key={i}>
//                   <th>{i + 1}</th>
//                   <td>
//                     <Input
//                       onChange={(event) => checkHandler(event.target.checked, e)}
//                       checked={selectedData.includes(e)}
//                       type='checkbox'
//                     />
//                     {e}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           <div>
//             <Button className='bg-danger border-0' onClick={submitHandler}>
//               Add To Done
//             </Button>
//           </div>
//         </div>
//         <div className='table-2'>
//           <Table striped>
//             <thead>
//               <tr>
//                 <th>Sr.No</th>
//                 <th>Product</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {getData.map((e, i) => (
//                 <tr key={i}>
//                   <th>{i + 1}</th>
//                   <td>
//                     <Input
//                       onChange={(event) => checkHandler(event.target.checked, e)}
//                       checked={selectedData.includes(e)}
//                       type='checkbox'
//                     />
//                     {e}
//                   </td>
//                   <td>
//                     <Trash2 role='button' onClick={removeHandler} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </div>
//     </>
//   );
// }
