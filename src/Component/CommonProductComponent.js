import React from 'react'

function CommonProductComponent({src, title}) {
  return (
        <div className="card" style={{width:"18em"}}>
  <img className="card-img-top" src={src} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <a href="#" className="btn btn-primary">Add To Cart</a>
  </div>
</div>
  )
}

export default CommonProductComponent