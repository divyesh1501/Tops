import { Pencil, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'reactstrap'

export default function TableData({ toggle, productData, editHandler, deleteHandler }) {

    const [tableData, setTableData] = useState(productData)

    useEffect(() => {
        setTableData(productData)
    }, [productData])

    return (
        <>
            <div>
                <div className='d-flex justify-content-end pb-3 pe-5'>
                    <Button style={{ backgroundColor: "#42a1e994", color: "black", border: "none" }} onClick={toggle}>Add Product</Button>
                </div>
                {tableData.length === 0 ? <span style={{ fontWeight: "bold", fontSize: "30px", display: "flex", width: "100%", justifyContent: "center", marginBottom: "25px" }}>Data Not Found ..!!</span> : (<div className='p-5'>

                    <Table striped size='sm' style={{ width: "100%", textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Brand</th>
                                <th>Gender</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th style={{ width: "100px" }}>Final Price</th>
                                <th>Category</th>
                                <th style={{ width: "150px" }}>Color</th>
                                <th>Size</th>
                                <th>Image</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody >
                            {tableData.map((e, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{e.title}</td>
                                    <td>{e.description}</td>
                                    <td>{e.brand}</td>
                                    <td>{e.gender}</td>
                                    <td>{e.price}</td>
                                    <td >{e.discountPercentage}</td>
                                    <td >
                                        {e.discountPercentage === 0 || !e.discountPercentage ? (
                                            "No Discount"
                                        ) : (
                                            (e.price - (e.price * e.discountPercentage / 100)).toFixed(2)
                                        )}
                                    </td>
                                    <td>{e.category}</td>
                                    <td>{e.color.join(' ,')}</td>
                                    <td>{e.size.join(',')}</td>
                                    <td><img style={{ width: "100%", aspectRatio: "3/2" }} src={e.thumbnail} alt="" /></td>
                                    <th><Pencil onClick={() => editHandler(e)} color="#42a1e994" role="button" /></th>
                                    <th><Trash2 onClick={() => deleteHandler(e._id)} color="red" role="button" /></th>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                )}
            </div>
        </>
    )
}
