import React, { Component } from 'react'
import { Table } from "reactstrap"
import ProductDATA from "./product_data.json"

export default class DataTable extends Component {
  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th>
              SR.NO
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
            ProductDATA.map((e, i) => {
              return (
                <tr key={i}>
                  <td>
                    {i + 1}
                  </td>
                  <td scope="row">
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
                </tr>)
            })

          }
        </tbody>
      </Table>
    )
  }
}
