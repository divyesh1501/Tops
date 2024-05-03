import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ProductForm from '../../../Pages/Admin/ProductForm/ProductForm';

export default function ProductModal({ productModal, productToggle, productData, updateHandler, submitHandler }) {

    return (
        <div>
            <Modal isOpen={productModal} productToggle={productToggle} fullscreen className='w-50 m-auto'>
                <ModalHeader productToggle={productToggle}>Add Product To Chart</ModalHeader>
                <ModalBody>
                    <ProductForm updateHandler={updateHandler} productData={productData} productToggle={productToggle} submitHandler={submitHandler} />
                </ModalBody>
            </Modal>
        </div >
    );
}
