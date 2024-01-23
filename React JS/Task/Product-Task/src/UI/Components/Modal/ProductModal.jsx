import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Toast } from 'reactstrap';
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
const colorArry = ["Red", "White", "Black"]
// const categoryArry = ["Cloth", "T-Shirt", "Shirt", "Kurti", "Jecket", "Denim", "shoesdurable", "shoeslightweight", "smartphones4g", "smartphones5g", "smartphones3g4g"]
const options = [
    { value: 'Cloth', label: 'Cloth' },
    { value: 'T-Shirt', label: 'T-Shirt' },
    { value: 'Shirt', label: 'Shirt' },
    { value: 'Kurti', label: 'Kurti' },
    { value: 'Jecket', label: 'Jecket' },
    { value: 'Denim', label: 'Denim' },
    { value: 'shoesdurable', label: 'shoesdurable' },
    { value: 'shoeslightweight', label: 'shoeslightweight' },
    { value: 'smartphones4g', label: 'smartphones4g' },
    { value: 'smartphones5g', label: 'smartphones5g' },
    { value: 'smartphones3g4g', label: 'smartphones3g4g' }
]

const genderArry = ["Male", "Female", "Other"]
const sizeArry = ["44", "45", "42", "43"]

export default function ProductModal({ modal, toggle, seledctedProduct, showElipsis }) {
    let [addProduct, setAddProduct] = useState(initialData)
    let [discountPercentage, setDiscountPercentage] = useState(0);

    useEffect(() => {
        if (seledctedProduct) {
            setAddProduct(seledctedProduct)
        } else {
            setAddProduct(initialData);
        }
    }, [seledctedProduct])

    const addData = () => {
        // console.log("🚀 ~ addData ~ addData:", addData)
        console.log("======>12345", addProduct)
        axios({
            method: "post",
            url: `http://localhost:9999/product/create`,
            data: addProduct,
        }).then((res) => {
            console.log("+++++++++>>>>>>>>>>", res)
            toast.success("Product Added Succesfully");
            setAddProduct(initialData);
            toggle();
        })
            .catch((err) => {
                toast.error(err.response.error)
                console.log("===================erroe========", err)
            });
        showElipsis()
        toggle()
    }

    // const showCatogary = (selected) => {
    //     let select = selected.map((e) => {
    //         return e.label
    //     })
    //     setAddProduct({ ...addProduct, category: select })
    // }

    const handleCategoryChange = (selected) => {
        let select = selected.map((e) => e.value); // Extracting values from selected options
        setAddProduct({ ...addProduct, category: select });
    };

    const handleDiscount = (e) => {
        setDiscountPercentage(e.target.value);
        setAddProduct({ ...addProduct, discountPercentage: e.target.value });
    };
    // const showAllData = () => {
    //     console.log("showAllData ==>", addProduct)
    //     toggle()

    // }
    // const selectHandler = (selectedData, key) => {
    //     const updated = addProduct[key]?.includes(selectedData)
    //     if (updated) {
    //         let data = addProduct[key]?.filter((e) => e !== selectedData)
    //         setAddProduct({ ...addProduct, [key]: data })
    //     } else {
    //         setAddProduct({ ...addProduct, [key]: [...addProduct[key], selectedData] });
    //     }
    // };

    const selectHandler = (selectedData, key) => {
        const updated = addProduct[key]?.includes(selectedData);
        if (updated) {
            let data = addProduct[key]?.filter((e) => e !== selectedData);
            setAddProduct({ ...addProduct, [key]: data });
        } else {
            setAddProduct({ ...addProduct, [key]: [...addProduct[key], selectedData] });
        }
    };

    // const selectHandlerSize = (selectedSize) => {
    //     const updated = addProduct.size.includes(selectedSize)
    //     if (updated) {
    //         let data = addProduct.size.filter((e) => e !== selectedSize)
    //         setAddProduct({ ...addProduct, size: data })
    //     } else {
    //         setAddProduct({ ...addProduct, size: [...addProduct.size, selectedSize] });
    //     }
    // };
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} fullscreen className='w-50 m-auto'>
                <ModalHeader toggle={toggle}>Add Product To Chart</ModalHeader>
                <ModalBody>
                    <Form>
                        {
                            [{ key: "title", type: "text" },
                            { key: "description", type: "text" },
                            { key: "brand", type: "text" },
                            { key: "price", type: "number" },].map(({ key, type }) => {
                                return (
                                    <FormGroup>
                                        <Label for="exampleTitle"
                                            className='text-capitalize'>
                                            {key}
                                        </Label>
                                        <Input
                                            id="exampleTitle"
                                            name="title"
                                            value={addProduct[key]}
                                            placeholder={`Enter your ${key}`}
                                            type={type}
                                            onChange={(e) => { setAddProduct({ ...addProduct, [key]: e?.target?.value }) }}
                                        />
                                    </FormGroup>
                                )
                            })
                        }

                        {/* <FormGroup>
                            <Label for="exampleDescription">
                                Description
                            </Label>
                            <Input
                                id="exampleDescription"
                                name="description"
                                placeholder="Description"
                                type="text"
                                value={addProduct.description}
                                onChange={(e) => { setAddProduct({ ...addProduct, description: e?.target?.value }) }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleBrand">
                                Brand
                            </Label>
                            <Input
                                id="exampleBrand"
                                name="brand"
                                placeholder="Brand"
                                type="text"
                                value={addProduct.brand}
                                onChange={(e) => { setAddProduct({ ...addProduct, brand: e?.target?.value }) }}
                            />
                        </FormGroup> */}
                        {/* <FormGroup>
                                <Label for="examplenumber">
                                    Price
                                </Label>
                                <Input
                                    id="examplenumber"
                                    name="number"
                                    type="number"
                                    value={addProduct.price}
                                    onChange={(e) => { setAddProduct({ ...addProduct, price: e?.target?.value }) }}
                                />
                            </FormGroup> */}
                        {/* <FormGroup>
                            <Label for="exampleSelect">Category</Label>
                            <Select options={options} isMulti
                                onChange={(selected) => options(selected)} />
                        </FormGroup> */}
                        <FormGroup>
                            <Label for="exampleSelect">Category</Label>
                            <Select options={options} isMulti
                                onChange={(selected) => handleCategoryChange(selected)} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleRange">Discount</Label>
                            <div>
                                <Input
                                    type="range"
                                    name="range"
                                    id="exampleRange"
                                    min="0"
                                    max="100"
                                    value={discountPercentage}
                                    onChange={handleDiscount}
                                />
                                <span className='ms-2'>{discountPercentage}%</span>
                            </div>
                        </FormGroup>

                        <FormGroup tag="fieldset">
                            <div className='d-flex'>
                                <Label>Gender</Label>
                                {
                                    genderArry.map((e, i) => {
                                        return (
                                            <div key={i}>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    onChange={() => { setAddProduct({ ...addProduct, gender: e }) }}
                                                    className='ms-2 me-1'
                                                />
                                                <Label className='pe-2'>
                                                    {e}
                                                </Label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <div className='d-flex align-items-center'>
                                <Label for="exampleSelect">
                                    Color
                                </Label>
                                {
                                    colorArry.map((e, i) => {
                                        return (
                                            <div key={i}
                                                style={{ display: "flex", gap: "5px", alignItems: "center", flexDirection: "row" }} >
                                                <Input
                                                    id="exampleSelect"
                                                    name="select"
                                                    type="checkbox"
                                                    checked={addProduct?.color?.includes(e)}
                                                    onChange={() => selectHandler(e, "color")}
                                                    className='ms-2 me-1'
                                                />
                                                <div style={{
                                                    width: "15px",
                                                    height: "15px",
                                                    border: "solid 2px black",
                                                    borderRadius: "50%",
                                                    backgroundColor: e
                                                }}>

                                                </div>
                                                <Label className='text-capitalize pe-2'>{e}</Label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <div className='d-flex'>
                                <Label for="exampleSelect">
                                    Size
                                </Label>
                                {
                                    sizeArry.map((e, i) => {
                                        return (
                                            <div key={i}>
                                                <Input
                                                    id="exampleSelect"
                                                    name="select"
                                                    type="checkbox"
                                                    value="42"
                                                    checked={addProduct.size.includes(e)}
                                                    onChange={() => selectHandler(e, "size")}
                                                    className='ms-2 me-1'
                                                />
                                                <Label className='pe-2'>{e}</Label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleTitle" className='text-capitalize'>
                                Thumbnail
                            </Label>
                            <Input
                                id="exampleTitle"
                                value={addProduct.thumbnail}
                                placeholder="Enter Url"
                                type="text"
                                onChange={(e) => { setAddProduct({ ...addProduct, thumbnail: e?.target?.value }) }}
                            />
                        </FormGroup>

                        <div className='d-flex gap-3 justify-content-end' >
                            <Button color="success" onClick={addData}>
                                Submit
                            </Button>
                            <Button color="dark" onClick={toggle}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </div >
    );
}
