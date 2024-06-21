import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import Select from "react-select";

const options = [
    { value: 'perfume', label: 'Perfume' },
    { value: 'deodorant', label: 'Deodorant' },
    { value: 'grooming', label: 'Groomig' }
]

const colorArry = ["red", "green", "white", "black", "blue"]

export default function ProductForm({ toggle, productData, updateHandler, submitHandler }) {
    let [addProduct, setAddProduct] = useState(productData)

    useEffect(() => {
        setAddProduct(productData)
    }, [productData])

    const selectHandler = (selectedData, key) => {
        const updated = addProduct[key].includes(selectedData)
        if (updated) {
            let data = addProduct[key].filter((e) => e !== selectedData)
            setAddProduct({ ...addProduct, [key]: data })
        } else {
            setAddProduct({ ...addProduct, [key]: [...addProduct[key], selectedData] });
        }
    };

    const showCategory = (selected) => {

        let select = selected.map((e) => {
            return e.label
        })
        setAddProduct({ ...addProduct, category: select })
    }
    const submitData = () => {
        submitHandler(addProduct)
    }

    const updateData = () => {
        updateHandler(addProduct)
    }

    return (
        <>
            <Form>
                {
                    [{ key: "title", type: "text" }, { key: "description", type: "text" },
                    { key: "price", type: "number" }].map(({ key, type }) => {
                        return (
                            <FormGroup>
                                <Label for="exampleTitle" className='text-capitalize'>
                                    {key}
                                </Label>
                                <Input
                                    id="exampleTitle"
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
                        onChange={(selected) => showCategory(selected)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleRange">Discount</Label>
                    <div className='d-flex'>
                        <Input
                            type="range"
                            name="range"
                            id="exampleRange"
                            min="0"
                            max="100"
                            value={addProduct.discountPercentage}
                            onChange={(e) => {
                                setAddProduct({ ...addProduct, discountPercentage: e.target.value });
                            }}
                        />
                        <span className="ms-2">{addProduct.discountPercentage}%</span>
                    </div>
                </FormGroup>
                <FormGroup>
                    <div>
                        <div>
                            <Label for="exampleSelect">
                                Color
                            </Label>
                        </div>
                        <div className='d-flex flex-wrap'>
                            {
                                colorArry.map((e, i) => {
                                    return (
                                        <div key={i} style={{ display: "flex", gap: "5px", alignItems: 'center', flexDirection: "row" }}>

                                            <Input
                                                id="exampleSelect"
                                                name="select"
                                                type="checkbox"
                                                checked={addProduct?.color?.includes(e)}
                                                onChange={() => { selectHandler(e, "color") }}
                                                className='ms-2 me-1'
                                            />
                                            <div style={{
                                                width: "15px",
                                                height: "15px",
                                                backgroundColor: e,
                                                borderRadius: "7.5px",
                                                border: "1px solid black"
                                            }}>
                                            </div>
                                            <lable className='text-capitalize pe-2'>{e}</lable>
                                        </div>
                                    )
                                })
                            }
                        </div>
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
                    <Button onClick={updateData}>Update</Button>
                    <Button color="danger" onClick={toggle}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </>
    )
}