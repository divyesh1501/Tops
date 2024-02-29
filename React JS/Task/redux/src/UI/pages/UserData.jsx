// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Button, Table } from 'reactstrap';
// import { fatchSingleUser } from '../../Redux/features/user/user';

// export default function UserData() {

//   const { user, status, error } = useSelector((state) => state?.user)

//   const { id } = useParams();

//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(fatchSingleUser(id))
//   }, [dispatch, id])

//   if (status === 'loading') {
//     return <div>Loading....</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }
//   return (
//     <>
//       <Table striped>
//         <thead>
//           <tr>
//             <th>
//               Sr.No
//             </th>
//             <th>
//               E-mail
//             </th>
//             <th>
//               Contact
//             </th>
//             <th>
//               Username
//             </th>
//             <th>
//               Deatils
//             </th>
//           </tr>
//         </thead>

//         <tbody>
//         {user && (
//           <tr>
//             <th scope="row">
//               {i + 1}
//             </th>
//             <td>
//               {user.email}
//             </td>
//             <td>
//               {user.phone}
//             </td>
//             <td>
//               {user.username}
//             </td>
//             <td>
//               <Button>Show Deatils</Button>
//             </td>
//           </tr>
//         )}
//         </tbody>
      
//       </Table>
//     </>
//   )
// }


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'reactstrap';
import { fatchSingleUser } from '../../Redux/features/user/user';
import { useParams, useNavigate } from 'react-router-dom';

export default function UserData() {
  const { user, pending, errorMsg } = useSelector((state) => state?.user);
  
  const { id } = useParams();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fatchSingleUser(id));
  }, [dispatch, id]);

  // const handleShowDetails = () => {
  //   // Add navigation logic here, navigate to another page
  //   navigate('/path-to-details-page');
  // };

  if (pending) return <h1>loading....</h1>
  if (errorMsg) alert(errorMsg)

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>E-mail</th>
            <th>Contact</th>
            <th>Username</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {user && (
            <tr>
              <th scope="row">1</th>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
              {/* <td>
                <Button onClick={handleShowDetails}>Show Details</Button>
              </td> */}
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}
