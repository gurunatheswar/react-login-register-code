import React from 'react'
import CheckoutProduct from './Checkout Product'
import Subtotal from './Subtotal'
import {useStateValue} from './stateProvider'

function Checkout () {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className='container-fluid'>
            <div className='row mt-2 min-vh-100'>
                <div className='col-9'>
                    <img src="/Images/amazonads.png" className='w-100' style={{height: "120px"}} alt="" />
                    <div className='mt-2'>
                    <h3>Your Shopping Cart</h3>
                    </div>
                </div>
                <div className='col-3'>
                <Subtotal />
            </div>
            </div>
        </div>
    )

}