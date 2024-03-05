import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ProductForm from '../../Pages/ProductForm/ProductForm';

export default function ProductModal({ modal, toggle, productData, updateHandler,submitHandler }) {

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} fullscreen className='w-50 m-auto'>
                <ModalHeader toggle={toggle}>Add Product To Chart</ModalHeader>
                <ModalBody>
                    <ProductForm updateHandler={updateHandler} productData={productData} toggle={toggle} submitHandler={submitHandler} />
                </ModalBody>
            </Modal>
        </div >
    );
}
