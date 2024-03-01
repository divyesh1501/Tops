import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import user, { fatchSingleUser, fatchUser } from '../../Redux/features/user/user';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function User() {

  const [data, setData] = useState([])


  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fatchUser())
  }, [dispatch])

  const userID = (id) => {
    dispatch(fatchSingleUser(id))
    navigate("/userdata");
  }

  let { user, errorMsg, pending } = useSelector((store) => {
    return store?.apiSlice;
  })

  useEffect(() => {
    if (Array.isArray(user)) {
      setData(user);
    }
  }, [user]);

  if (pending) return <h1>loading....</h1>
  if (errorMsg) alert(errorMsg)
  return (
    <>

      <Table striped>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            {/* <th>E-mail</th>
            <th>Contact No.</th> */}
            <th>Deatils</th>
          </tr>
        </thead>
        <tbody>

          {
            data?.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">
                    {i + 1}
                  </th>
                  <td>
                    {e?.name?.firstname}
                  </td>
                  {/* <td>
                    {e?.email}
                  </td>
                  <td>
                    {e?.phone}
                  </td> */}
                  <td>
                    <Button onClick={() => userID(e.id)}>Show Details</Button>
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
