import React from "react";

export default function Product(props) {
  return (
    <div className=" boxy row mt-3">
      {/* <img src={img} alt={title} /> */}
      {/* <img src={img} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className='product-name'>{name}</h4>
        <h4 className='product-ownername'>{ownername}</h4>
        <h4 className='item-price'>${price}</h4>
        </div> */}
        {/* <div className='col-6 img-div'>
          <img src={img} alt="menu-img" className='img-fluid' />
        </div> */}
        
        <div className="col-4 ">
        {props.product.ownername}<br/>
          {props.product.name}<br/>
          ₹{props.product.price}<br/>
          {props.product.email}<br/>
      </div>
      <div className="col-6">
          {props.product.desc}
      </div>
      
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}