import React from 'react'
import productData from './product_data.json'
import { Table } from "reactstrap"

export default function ProductTable() {
    return (
        <>
            <Table >
                <thead>
                    <tr>
                        <th>
                            SR.NO
                        </th>
                        <th>
                            TIITLE
                        </th>
                        <th>
                            BRAND
                        </th>
                        <th>
                            CATAGORY
                        </th>
                        <th>
                            COLOR
                        </th>
                        <th>
                            SIZE
                        </th>
                        <th>
                            PRICE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productData.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        {e.title}
                                    </td>
                                    <td>
                                        {e.brand}
                                    </td>
                                    <td>
                                        {e.category[0]}
                                    </td>
                                    <td>
                                        {e.color[1]}
                                    </td>
                                    <td>
                                        {e.size[e.size.length - 1]}
                                    </td>
                                    <td>
                                        {e.price}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
