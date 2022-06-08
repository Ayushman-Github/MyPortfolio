import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import accessoriesItems from './Products/accessoriesdata'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { ADD } from '../../src/redux/actions/action';

const Accessories = () => {

  const [cartBtn] = useState("ADD TO CART")

  const dispatch = useDispatch();

  const handleCart = (accessoriesItem) => {
    if (cartBtn === "ADD TO CART") {

      dispatch(ADD(accessoriesItem));
    }
  }

  return (
    <div>
      <div className="accessories-header">
        <div style={{ textAlign: "center", }}>
          <h1 style={{ fontSize: "100px", color: "#1A6EFF" }}>ACCESSORIES</h1>
          <h1 style={{ fontSize: "50px", color: "#1A6EFF", letterSpacing: "10px" }}>SECTION</h1>
        </div>
      </div>

      <hr style={{ width: "90%", margin: "auto", marginTop: "40px" }} />


      <div className='products'>
        {accessoriesItems.map((accessoriesItem) => (
          <div className="cards">
            <Link style={{ textDecoration: "none", color: "black" }} to={`/Accessories/${accessoriesItem.id}`}>
              <div className='product-image'>
                {accessoriesItem.image}
              </div>

              <div className='product-text'>
                <p>{accessoriesItem.name}</p>
                <div style={{ display: "flex", textAlign: "center" }}>
                  <b><h5>{accessoriesItem.price}</h5></b>
                  <del style={{ fontSize: "14px" }}>{accessoriesItem.originalPrice}</del>
                  <p style={{ color: "green", fontSize: "14px" }}> <b>{accessoriesItem.discount}</b></p>
                </div>
              </div>
            </Link>
            <Button onClick={() => handleCart(accessoriesItem)} variant="contained" style={{ width: "100%" }} > {accessoriesItem.button} </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accessories