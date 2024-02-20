import React from 'react'
import { UserList } from '../../Pages/UserList'

export default function AddModal({ modal, toggle, regtoggle }) {
  return (
    <>
      <UserList modal={modal} toggle={toggle} regtoggle={regtoggle} />
    </>
  )
}
