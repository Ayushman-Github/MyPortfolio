import React from 'react'
import mensItems from "./Products/mensdata"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ADD } from '../../src/redux/actions/action';
import { useDispatch } from 'react-redux';


const Mens = () => {


  const dispatch = useDispatch();

  const add = (mensItem) => {
      dispatch(ADD(mensItem));
  }

  return (
    <div>

      <div className="men-header">
        <div style={{ position: "absolute", top: "180px", left: "30px", textAlign: "center" }}>
          <h1 style={{ color: "#1A6EFF", fontSize: "200px" }}>MEN'S</h1>
          <h1 style={{ color: "#1A6EFF", fontSize: "70px", letterSpacing: "10px" }}>FASHION</h1>
        </div>
      </div>
      <hr style={{ width: "90%", margin: "auto", marginTop: "40px" }} />

      <div className='products'>
        {mensItems.map((mensItem) => (
          <div className="cards">

            <Link style={{ textDecoration: "none", color: "black" }} to={`/Mens/${mensItem.id}`}>
              <div key={mensItem.image} className='product-image'>
                {mensItem.image}
              </div>

              <div className='product-text'>
                <p key={mensItem.name}>{mensItem.name}</p>
                <div style={{ display: "flex", textAlign: "center" }}>
                  <b><h5 key={mensItem.price}>₹{mensItem.price}</h5></b>
                  <del key={mensItem.originalPrice} style={{ fontSize: "14px" }}>₹{mensItem.originalPrice}</del>
                  <p key={mensItem.discount} style={{ color: "green", fontSize: "14px" }}> <b>( {mensItem.discount} )</b></p>
                </div>
              </div>
            </Link>

              <Button key={mensItem.button} onClick={() => add(mensItem)} variant="contained" style={{ width: "100%" }} > {mensItem.button} </Button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Mens