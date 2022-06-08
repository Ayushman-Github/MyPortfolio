import React from 'react'
import products from '../BrandPageData/AdidasPageData'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ADD } from '../../../redux/actions/action'
import { useDispatch } from 'react-redux';
 

const Adidas = () => {


  const dispatch = useDispatch();

  const add = (products) => {
      dispatch(ADD(products));
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
        {products.map((product) => (
          <div className="cards">

            <Link style={{ textDecoration: "none", color: "black" }} to={`/Adidas/${product.id}`}>
              <div key={product.image} className='product-image'>
                {product.image}
              </div>

              <div className='product-text'>
                <p key={product.name}>{product.name}</p>
                <div style={{ display: "flex", textAlign: "center" }}>
                  <b><h5 key={product.price}>₹{product.price}</h5></b>
                  <del key={product.originalPrice} style={{ fontSize: "14px" }}>₹{product.originalPrice}</del>
                  <p key={product.discount} style={{ color: "green", fontSize: "14px" }}> <b>( {product.discount} )</b></p>
                </div>
              </div>
            </Link>
              <Button key={product.button} onClick={() => add(product)} variant="contained" style={{ width: "100%" }} > {product.button} </Button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Adidas