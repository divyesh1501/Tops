import React, { useEffect, useState } from "react";
import { Pencil, Trash2Icon } from "lucide-react";
import { Button, Table } from "reactstrap";

export default function TableData({
    productData,
    editHandler,
    deleteHandler,
    resetForm,
    productToggle
}) {
    let [data, setData] = useState(productData);
    let [expandedId, setExpandedId] = useState(null);
    let [titleExpand, setTitleExpand] = useState(null);

    useEffect(() => {
        setData(productData);
    }, [productData]);

    const clearForm = () => {
        resetForm();
        productToggle()
        console.log("=============")
    };

    return (
        <>
            <div className="d-flex justify-content-end pb-3 pe-5">
                <Button
                    style={{ backgroundColor: "#6fcdff", color: "black" }}
                    onClick={clearForm}
                >
                    Add Product
                </Button>
            </div>
            {data.length === 0 ? (
                <span
                    style={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                        marginBottom: "20px",
                    }}
                >
                    Data Not Found
                </span>
            ) : (
                <div>
                    <Table striped size="sm">
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Final Price</th>
                                <th>Color</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e, i) => {
                                const isExpanded = e?._id === expandedId;
                                const titleExpanded = e?._id === titleExpand;
                                return (
                                    <tr key={e._id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>
                                            <img
                                                style={{ width: "150px", aspectRatio: "3/2" }}
                                                src={e.thumbnail}
                                                alt=""
                                            />
                                        </td>
                                        <td>
                                            <div
                                                style={{
                                                    maxWidth: "150px",
                                                    whiteSpace: titleExpanded ? "unset" : "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: titleExpanded ? "unset" : "ellipsis",
                                                }}
                                                role="button"
                                                onClick={() =>
                                                    setTitleExpand(titleExpand ? null : e?._id)
                                                }
                                            >
                                                {e.title}
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                style={{
                                                    maxWidth: "150px",
                                                    whiteSpace: isExpanded ? "unset" : "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: isExpanded ? "unset" : "ellipsis",
                                                }}
                                                role="button"
                                                onClick={() =>
                                                    setExpandedId(isExpanded ? null : e?._id)
                                                }
                                            >
                                                {e.description}
                                            </div>
                                        </td>
                                        <td>{e.category}</td>
                                        <td>{e.price}</td>
                                        <td >{e.discountPercentage}</td>
                                        <td >
                                            {e.discountPercentage === 0 || !e.discountPercentage ? (
                                                "No Discount"
                                            ) : (
                                                (e.price - (e.price * e.discountPercentage / 100)).toFixed(1))}
                                        </td>
                                        <td>
                                            <div>
                                                {e.color.map((e, i) => (
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div
                                                            key={i}
                                                            style={{
                                                                width: "15px",
                                                                height: "15px",
                                                                backgroundColor: e,
                                                                borderRadius: "50%",
                                                                border: "1px solid black",
                                                            }}
                                                        ></div>
                                                        <p className="m-0">{e}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                        <th>
                                            <Pencil
                                                onClick={() => editHandler(e)}
                                                color="red"
                                                role="button"
                                            />
                                        </th>
                                        <th>
                                            <Trash2Icon
                                                role="button"
                                                onClick={() => deleteHandler(e._id)}
                                                color="red"
                                            />
                                        </th>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            )}
        </>
    );
}