
// Create Increment decrement state change by button click

import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function IncDec() {
    let [count, setcount] = useState(0)
    let x = 100;
    function IncerementHandler() {
        setcount(count + 1)
    }
    function DecerementHandler() {
        setcount(count - 1)
    }
    function Reset() {
        setcount(0)
    }

    return (
        <>
            <div style={{
                backgroundColor: "lightcoral",
                height: "750px"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "100%",
                    alignItems: "center"

                }}>
                    <h1 className='text-muted'>React Web</h1>
                    <h1>{count}</h1>
                    <div style={{
                        display: "flex",
                        gap: "30px"
                    }}>
                        <Button color="success" onClick={IncerementHandler} style={{
                            height: "50px",
                            width: '150px'
                        }}>Inc</Button>
                        <Button color="danger" onClick={DecerementHandler} style={{
                            height: "50px",
                            width: '150px'
                        }}>Dec</Button>
                    </div>
                    <Button color='warning' onClick={Reset} style={{
                        height: "50px",
                        width: '150px',
                        marginTop:"20px"
                    }}>Reset</Button>
                </div>
            </div>
        </>
    )
}