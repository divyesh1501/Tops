import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import user, { fatchUser } from '../../Redux/features/user/user';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from './UserData';

export default function User() {

  const [data, setData] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fatchUser())
  }, [dispatch])


  // const userID = (id) => {
  //   console.log(id)
  //   navigate("/userdata");
  // }

  const userID = (id) => {
    // console.log("Button clicked. Navigating...");
    navigate("/userdata");
    console.log("id==",id);
  }

  let { user, errorMsg, pending } = useSelector((store) => {
    return store?.apiSlice;
  })
  useEffect(() => {
    setData(user)
  }, [user])

  // console.log("=====ddd", data)

  // console.log("🚀 ~ let{user,errorMsg,pending}=useSelector ~ errorMsg:", errorMsg, !errorMsg)

  if (pending) return <h1>loading....</h1>
  if (errorMsg) alert(errorMsg)
  return (
    <>

      <Table striped>
        <thead>
          <tr>
            <th>
              Sr.No
            </th>
            <th>
              E-mail
            </th>
            <th>
              Contact
            </th>
            <th>
              Username
            </th>
            <th>
              Deatils
            </th>
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
                    {e?.email}
                  </td>
                  <td>
                    {e?.phone}
                  </td>
                  <td>
                    {e?.username}
                  </td>
                  <td>
                    <Button onClick={() => userID(e.id)}>Show Deatils</Button>
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
