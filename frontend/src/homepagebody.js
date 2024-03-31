import React from 'react'
import Products from './product';
//import {useStateValue,StateProvider} from './stateProvider'
function HomepageBody() {

return (
<div>
    <div className='w-100'>
        <img src="/img/banner.JPG" className='w-100' style={{height: "300px"}} alt="ecommerce"/>
    </div>
    <div className='products bg-light p-3'>
        <div className='p-2 d-flex'>
            <div className='w-50 p-2 bg-white m-2'>
            <Products id={"1"} title={"newIMg1"} image={'img1.jpg'} rating={"3"} price={"1000"}/>
            </div>
            <div className='w-50 p-2 bg-white m-2'>
            <Products id={"2"} title={"newIMg2"} image={'img2.jpg'} rating={"3"} price={"1000"}/>
            </div>
        </div>
        <div className='p-3 d-flex'>
            <div className=' p-2 bg-white m-2 col'>
            <Products id={"3"} title={"newIMg3"} image={'img3.jpeg'} rating={"3"} price={"1000"}/>
            </div>
            <div className=' p-2 bg-white m-2 col'>
            <Products id={"4"} title={"newIMg4"} image={'img4.jpeg'} rating={"3"} price={"1000"}/>
            </div>
            <div className='p-2 bg-white m-2 col'>
            <Products id={"5"} title={"newIMg5"} image={'img5.jpeg'} rating={"3"} price={"1000"}/>
            </div>
        </div>
    </div>
</div>
)
}
export default HomepageBody;