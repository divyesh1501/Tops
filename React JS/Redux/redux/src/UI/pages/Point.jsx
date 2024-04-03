import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { decrementPnt, incrementPnt, resetPnt } from '../../Redux/features/point/point';



export default function Point() {

    let point = useSelector((store) => {
        return store?.pointReducer?.point

    });

    let dispatch = useDispatch();

    return (
        <div className='d-flex justify-content-center flex-column align-items-center mt-5'>
            <div className='text-center border border-black rounded pt-5' style={{ width: "250px", height: "210px" }}>
                <h1>Point is {point}</h1>
                <div>
                    <Button color='success' onClick={() => dispatch(incrementPnt())} className='me-3'>Inc</Button>
                    <Button color='danger' onClick={() => dispatch(decrementPnt())} className='me-3'>Dec</Button>
                    <Button color='warning' onClick={() => dispatch(resetPnt())}>Reset</Button>
                </div>
            </div>
        </div>
    )
}
