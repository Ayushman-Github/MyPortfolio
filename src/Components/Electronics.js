import React, { useState } from 'react'
import electronicsItems from './Products/electronicsdata'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { ADD } from '../../src/redux/actions/action';

const Electronics = () => {

  const [cartBtn] = useState("ADD TO CART")

  const dispatch = useDispatch();

  const handleCart = (electronicsItem) => {
    if (cartBtn === "ADD TO CART") {

      dispatch(ADD(electronicsItem));
    }
  }


  return (
    <div>
      <div className="electronics-header">
        <div style={{ position: "absolute", top: "200px", left: "30px", textAlign: "center" }}>
          <h1 style={{ color: "#1A6EFF", fontSize: "150px" }}>ELECTRONICS</h1>
          <h1 style={{ color: "#1A6EFF", fontSize: "70px", letterSpacing: "10px" }}>SECTION</h1>
        </div>      </div>
      <hr style={{ width: "90%", margin: "auto", marginTop: "40px" }} />


      <div className='products'>
        {electronicsItems.map((electronicsItem) => (
          <div className="cards">
            <Link style={{ textDecoration: "none", color: "black" }} to={`/Electronics/${electronicsItem.id}`}>
              <div className='product-image'>
                {electronicsItem.image}
              </div>

              <div className='product-text'>
                <p>{electronicsItem.name}</p>
                <div style={{ display: "flex", textAlign: "center" }}>
                  <b><h5>{electronicsItem.price}</h5></b>
                  <del style={{ fontSize: "14px" }}>{electronicsItem.originalPrice}</del>
                  <p style={{ color: "green", fontSize: "14px" }}> <b>{electronicsItem.discount}</b></p>
                </div>
              </div>
            </Link>

            <Button onClick={() => handleCart(electronicsItem)} variant="contained" style={{ width: "100%" }} > {electronicsItem.button} </Button> </div>
        ))}
      </div>
    </div>
  )
}

export default Electronics