import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ProductModal from '../../../Components/Modal/ProductModal/ProductModal';
import TableData from './TableData';

const initialData = {
  title: "",
  description: "",
  brand: "",
  category: [],
  price: "",
  gender: "",
  discountPercentage: "0",
  color: [],
  size: [],

}

export default function Product() {
  const [productModal, setProductModal] = useState(false);
  let [fetchFlag, setFetchFlag] = useState(true)
  let [data, setData] = useState([])
  let [productData, setProductData] = useState(initialData)

  const productToggle = () => setProductModal(!productModal);
  const reFetchData = () => setFetchFlag(!fetchFlag)

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:9999/product/getAll',
    })
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res)
        setData(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err.response)
      });
  }, [fetchFlag]);


  const submitHandler = (data) => {
    axios({
      method: "post",
      url: `http://localhost:9999/product/create`,
      data: data,
    }).then((res) => {
      toast.success("Product Added Succesfully");
      productToggle();
      reFetchData()
      setAddProduct(initialData);
    })
      .catch((err) => {
        toast.error(err.response)
      });
    reFetchData()
    productToggle()
  }

  const updateHandler = (newData) => {
    axios({
      method: "put",
      url: `http://localhost:9999/product/update/${newData?._id}`,
      data: newData,
    })
      .then((res) => {
        toast.success("Product Updated Succesfully");
        productToggle();
        reFetchData()
        setAddProduct(initialData);
      })
      .catch((err) => {
        toast.error(err.response);
      });
    reFetchData()
    productToggle();
  }

  const deleteHandler = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${id}`
    })
      .then((res) => {
        reFetchData()
        toast.success("Product Removed Succesfully");

      })
      .catch((err) => {
        toast.error(err.response);

      });
  };

  const editHandler = (data) => {
    setProductData(data)
    productToggle()
  }

  const resetForm = () => {
    setProductData(initialData)
    productToggle()
  }

  return (
    <>
      <ProductModal productData={productData} productModal={productModal} productToggle={productToggle} updateHandler={updateHandler} submitHandler={submitHandler} />
      <TableData productToggle={productToggle} reFetchData={reFetchData} productData={data} editHandler={editHandler} deleteHandler={deleteHandler} resetForm={resetForm} />
    
    </>
  );
}
