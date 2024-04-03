import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

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

const colorArry = ["Red", "White", "Black"]
const genderArry = ["male", "female", "other"]
const sizeArry = ["44", "45", "42", "43"]

export default function ProductForm({ toggle, productData, updateHandler, submitHandler }) {
    let [addProduct, setAddProduct] = useState(productData)
    let [discountPercentage, setDiscountPercentage] = useState(0);

    useEffect(() => {
        setAddProduct(productData)
    }, [productData])

    const showCategory = (selected) => {
        setAddProduct({ ...addProduct, category: selected });
    };

    const handleDiscountChange = (e) => {
        setDiscountPercentage(e.target.value);
        setAddProduct({ ...addProduct, discountPercentage: e.target.value });
    };

    const selectHandler = (selectedData, key) => {
        const updated = addProduct[key]?.includes(selectedData);
        if (updated) {
            let data = addProduct[key]?.filter((e) => e !== selectedData);
            setAddProduct({ ...addProduct, [key]: data });
        } else {
            setAddProduct({ ...addProduct, [key]: [...addProduct[key], selectedData] });
        }
    };

    const submitData = () => {
        submitHandler(addProduct)
    }
    const updateData = () => {
        updateHandler(addProduct)
    }

    return (
        <>
            <div>
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


                    <FormGroup>
                        <Label for="exampleSelect">Category</Label>
                        <Select options={options} isMulti
                            value={addProduct.category.map((e) => ({ label: e.toUpperCase().charAt(0) + e.slice(1), value: e }))}
                            onChange={(selected) => showCategory(selected)} />
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
                                onChange={handleDiscountChange}
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
                        <Button color="success" onClick={submitData}>
                            Submit
                        </Button>
                        <Button onClick={updateData} >Update</Button>
                        <Button color="dark" onClick={toggle}>
                            Cancel
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}
