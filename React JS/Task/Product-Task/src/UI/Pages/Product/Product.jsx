import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'reactstrap';
import "./index.css"
import ProductModal from '../../Components/Modal/ProductModal';
import { Pencil, Trash2 } from "lucide-react";


export default function Product() {
  const [product, setProduct] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [data, setData] = useState(false)

  const toggle = () => setModal(!modal);
  const showElipsis =()=>{
    setData(!data)
  }

  const updateData = (index) => {
    setSelectedProduct(product[index])
    toggle()
  }

  const deletData = (id) => {
    axios({
      method:"delete",
      url:`http://localhost:9999/product/delete/${id}`
    })
    .then((res)=>{
      alert("Product Removed ...!!")
      showElipsis()
    })
    .catch((err)=>{
      alert("error")
    });
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:9999/product/getAll',
    })
      .then((res) => {
        console.log("------->", res.data);
        setProduct(res?.data?.data);
      })
      .catch((err) => {
        console.log("-------->", err);
      });
  }, [data]);

  return (
    <>
      <ProductModal modal={modal} toggle={toggle} seledctedProduct={selectedProduct} showElipsis={showElipsis} />
      <div>
        <div className='d-flex justify-content-end pb-3 pe-5'>
          <Button style={{ backgroundColor: "#42a1e994", color: "black", border: "none" }} onClick={toggle}>Add Product</Button>
        </div>
        {product.length === 0 ? <span style={{fontWeight:"bold", fontSize:"30px", display:"flex", width:"100%", justifyContent:"center", marginBottom:"25px"}}>Data Not Found ..!!</span>: (<div div className='p-5'>

          <Table dark striped size='sm' style={{ width: "100%", textAlign: "center" }}>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Brand</th>
                <th>Gender</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Category</th>
                <th style={{ width: "150px" }}>Color</th>
                <th>Size</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody >
              {product.map((e, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.title}</td>
                  <td>{e.description}</td>
                  <td>{e.brand}</td>
                  <td>{e.gender}</td>
                  <td>{e.price}</td>
                  <td >{e.discountPercentage}</td>
                  <td>{e.category}</td>
                  <td>{e.color.join(' ,')}</td>
                  <td>{e.size.join(',')}</td>
                  <td><img style={{width:"100%", aspectRatio:"3/2"}} src={e.thumbnail}alt="" /></td>
                  <th><Pencil onClick={() => updateData(i)} color="yellow" role="button" /></th>
                  <th><Trash2 onClick={() => deletData(e._id)} color="red" role="button" /></th>

                </tr>
              ))}
            </tbody>
          </Table>
        </div>)
        }
      </div >
    </>
  );
}
