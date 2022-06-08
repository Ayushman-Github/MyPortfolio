import React, { useState } from 'react'
import kidsItems from "./Products/kidsdata"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { ADD } from '../../src/redux/actions/action';



const Kids = () => {

  const [cartBtn] = useState("ADD TO CART")

  const dispatch = useDispatch();

  const handleCart = (kidsItem) => {
    if (cartBtn === "ADD TO CART") {

      dispatch(ADD(kidsItem));
    }
  }

  return (
    <div>

      <div className="kid-header">
        <div style={{ position: "absolute", top: "150px", left: "30px", textAlign: "center" }}>
          <h1 style={{ color: "#1A6EFF", fontSize: "250px" }}>KID'S</h1>
          <h1 style={{ color: "#1A6EFF", fontSize: "70px", letterSpacing: "10px" }}>FASHION</h1>
        </div>
      </div>
      <hr style={{ width: "90%", margin: "auto", marginTop: "40px" }} />

      <div className='products'>
        {kidsItems.map((kidsItem) => (
          <div className="cards">

            <Link style={{ textDecoration: "none", color: "black" }} to={`/kids/${kidsItem.id}`}>
              <div className='product-image'>
                {kidsItem.image}
              </div>

              <div className='product-text'>
                <p>{kidsItem.name}</p>
                <div style={{ display: "flex", textAlign: "center" }}>
                  <b><h5>₹{kidsItem.price}</h5></b>
                  <del style={{ fontSize: "14px" }}>₹{kidsItem.originalPrice}</del>
                  <p style={{ color: "green", fontSize: "14px" }}> <b>( {kidsItem.discount} )</b></p>
                </div>
              </div>
            </Link>

            <Button onClick={() => handleCart(kidsItem)} variant="contained" style={{ width: "100%" }} > {kidsItem.button} </Button>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Kids