import React from 'react'
import bangles from "../Images/bangles.jpg"
import kurta from "../Images/kurta.jpg"
import blue from "../Images/blue.jpg"
import CommonProductComponent from './CommonProductComponent'
function Product() {
  return (
    <div className='container'>
      <h4 className='text-center mt-5'>Latest Product</h4>
      <hr></hr>
      <div className='text-center mt-4  d-flex justify-content-around flex-wrap'>
  <button type="button" class="btn btn-secondary btn-sm">All</button>
<button type="button" class="btn btn-secondary btn-sm">Men's clothing</button>
<button type="button" class="btn btn-secondary btn-sm">Women's clothing</button>

<button type="button" class="btn btn-secondary btn-sm">Jwellery</button>
</div>
<div className='d-flex mt-5 justify-content-around'>
  <CommonProductComponent src={bangles} title="bangles"/>
  <CommonProductComponent src={kurta} title="kurta"/>
  <CommonProductComponent src={blue} title="blue"/>
  
</div>





    </div>
  )
}

export default Product