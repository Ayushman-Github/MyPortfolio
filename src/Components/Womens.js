import React from 'react'
import womensItems from "./Products/womensdata"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import { ADD } from '../../src/redux/actions/action';
 

const Womens = () => {



  const dispatch = useDispatch();

  const handleCart = (womensItem) => {

      dispatch(ADD(womensItem));
  }

  return (

    <div>
      <div className='women-header'>
        <div style={{ position: "absolute", top: "180px", left: "30px", textAlign: "center" }}>
          <h1 style={{ color: "#1A6EFF", fontSize: "200px" }}>WOMEN'S</h1>
          <h1 style={{ color: "#1A6EFF", fontSize: "70px", letterSpacing: "10px" }}>FASHION</h1>
        </div>
      </div>

      <hr style={{ width: "90%", margin: "auto", marginTop: "30px" }} />

      <div className='products'>
        {womensItems.map((womensItem) => (
          <div className="cards">
            <Link style={{ textDecoration: "none", color: "black" }} to={`/Womens/${womensItem.id}`}>

              <div className='product-image'>
                {womensItem.image}
              </div>

              <div className='product-text'>
                <p>{womensItem.name}</p>

                <div style={{ display: "flex", textAlign: "center" }}>
                  <b><h5>₹{womensItem.price}</h5></b>
                  <del style={{ fontSize: "14px" }}>₹{womensItem.originalPrice}</del>
                  <p style={{ color: "green", fontSize: "14px" }}> <b>{womensItem.discount}</b></p>
                </div>


              </div>
            </Link>
            
            <Button onClick={() => handleCart(womensItem)} variant="contained" style={{ width: "100%" }}>
              {womensItem.button}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Womens