import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { decrementOne, incrementOne, reset } from '../../Redux/features/count/count';



export default function Count() {

    let count = useSelector((store) => {
        return store?.counteReducer?.count

    });

    let dispatch = useDispatch();

    return (
        <div className='d-flex justify-content-center flex-column align-items-center mt-5'>
            <div className='text-center border border-black rounded pt-5' style={{ width: "250px", height: "210px" }}>
                <h1>Count is {count}</h1>
                <div >
                    <Button color='success' onClick={() => dispatch(incrementOne())} className='me-3'>Inc</Button>
                    <Button color='danger' onClick={() => dispatch(decrementOne())} className='me-3'>Dec</Button>
                    <Button color='warning' onClick={() => dispatch(reset())}>Reset</Button>
                </div>
            </div>
        </div>
    )
}
