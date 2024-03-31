import React from 'react'
import {useStateValue} from './stateProvider'
function Products({id, title, image, rating, price}) {
    const [state,dispatch]= useStateValue();
    
    function addProduct() {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                title: title,
                image: image,
                rating: rating,
                price: price
            }
        })
    }
    return (
        <div  id={id} key={id} className='d-flex flex-column'>
            <h4>{title}</h4>
            <strong>{price}</strong>
            <p>
                {Array(rating).fill().map((_, i) => (
                    <span key={i}>*</span>
                ))}
            </p>
            <div className='d-flex flex-column align-items-center'>
                <img src={`/img/${image}`} className='w-50 mt-1' alt="PC" style={{height :"250px"}}/>
                <button onClick={addProduct}  className='btn btn-warning w-auto mt-3'>Add Product</button>
            </div>
        </div>
    )
    }
export default Products