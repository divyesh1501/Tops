import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { decrementAmt, incrementAmt, incrementAmtFive, resetAmt } from '../../Redux/features/amount/amount';



export default function amount() {

    let amount = useSelector((store) => {
        return store?.amountReducer?.amount

    });

    let dispatch = useDispatch();

    return (
        <div className='d-flex justify-content-center flex-column align-items-center mt-5'>
            <div className='text-center border border-black rounded pt-5' style={{ width: "250px", height: "210px" }}>
                <h1>Amount is {amount}</h1>
                <div >
                    <Button color='success' onClick={() => dispatch(incrementAmt(amount))} className='me-3'>Inc</Button>
                    <Button color='success' onClick={() => dispatch(incrementAmtFive())} className='me-3'>Inc Five</Button>
                    <Button color='danger' onClick={() => dispatch(decrementAmt())} className='me-3'>Dec</Button>
                    <Button color='warning' onClick={() => dispatch(resetAmt())} className='mt-3'>Reset</Button>
                </div>
            </div>
        </div>
    )
}
