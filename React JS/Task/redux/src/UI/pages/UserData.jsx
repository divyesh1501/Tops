import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'reactstrap';
// import { fatchSingleUser } from '../../Redux/features/user/user';
import { useNavigate } from 'react-router-dom';
import { Undo } from 'lucide-react';

export default function UserData() {
  let singleData = useSelector((store) => {
    return store?.apiSlice.user;
  })
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(fatchSingleUser());
  // }, [dispatch]);

  return (
    <>
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>ID No.</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Contact No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{singleData?.id}</td>
              <td>{singleData?.name?.firstname}</td>
              <td>{singleData?.email}</td>
              <td>{singleData?.phone}</td>
              <td>
                <Undo onClick={() => (navigate(-1))} role='button' />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
