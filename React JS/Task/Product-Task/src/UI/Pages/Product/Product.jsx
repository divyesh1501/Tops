import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductModal from '../../Components/Modal/ProductModal';
import TableData from '../TableData';
import { toast } from 'react-toastify';

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
  const [modal, setModal] = useState(false);
  let [fetchFlag, setFetchFlag] = useState(true)
  let [data, setData] = useState([])
  let [productData, setProductData] = useState(initialData)

  const toggle = () => setModal(!modal);
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
      toggle();
      reFetchData()
      setAddProduct(initialData);
    })
      .catch((err) => {
        toast.error(err.response)
      });
    reFetchData()
    toggle()
  }

  const updateHandler = (newData) => {
    axios({
      method: "put",
      url: `http://localhost:9999/product/update/${newData?._id}`,
      data: newData,
    })
      .then((res) => {
        toast.success("Product Updated Succesfully");
        toggle();
        reFetchData()
        setAddProduct(initialData);
      })
      .catch((err) => {
        toast.error(err.response);
      });
    reFetchData()
    toggle();
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
    toggle()
  }

  const resetForm = () => {
    setProductData(initialData)
    toggle()
  }

  return (
    <>
      <ProductModal productData={productData} modal={modal} toggle={toggle} updateHandler={updateHandler} submitHandler={submitHandler} />
      <TableData toggle={toggle} reFetchData={reFetchData} productData={data} editHandler={editHandler} deleteHandler={deleteHandler} resetForm={resetForm} />
    </>
  );
}
