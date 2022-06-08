import React, { useState } from 'react'
import { useParams } from 'react-router'
import products from '../BrandPageData/WranglerPageData'
import { ADD } from '../../../redux/actions/action';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { DLT } from '../../../redux/actions/action';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Rating from '../../Subcomp/Rating';
import DeliveryDiningTwoToneIcon from '@mui/icons-material/DeliveryDiningTwoTone';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';



const WranglerPageDetails = () => {


  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(DLT(id))
  }

  const proid = useParams();
  const data = products.find(x => x.id === parseInt(proid.id));

  const [cartBtn] = useState("ADD TO CART")

  const handleCart = (data) => {
    if (cartBtn === "ADD TO CART") {

      dispatch(ADD(data));
    }
  }
  return (
    <>
      <h3 style={{ color: "#1A6EFF", textAlign: "center" }}>Product Details :</h3>
      <hr />
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">

          {/* MULTIPLE IMAGE SECTION==================== */}



          <div className="col-md-4">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  {data.image}
                </div>
                <div class="carousel-item">
                  {data.image}
                </div>
                <div class="carousel-item">
                  {data.image}
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-md-8">
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h5>{data.name}</h5>
                <div>
                  <div style={{ display: "flex", textAlign: "center" }}>
                    <b><h2>₹{data.price}</h2></b>
                    <h5><del style={{ fontSize: "14px" }}>₹{data.originalPrice}</del></h5>
                    <h3><p style={{ color: "green" }}> <b>{data.discount}</b></p></h3>
                  </div>
                </div>
                <p style={{ color: "green" }}>inclusive of all taxes</p>
                <div style={{ display: "flex" }}>
                  <Rating />
                  <p style={{ margin: "0px" }}>( 592 Ratings )</p>
                </div>
              </div>
              <div>
              
                  <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => remove(data.id)} > Delete </Button>
                
              </div>
            </div>
            <hr />
            <h6>Description</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel itaque sit nesciunt alias culpa in aliquid cupiditate quos quisquam. Nostrum deleniti commodi, similique pariatur distinctio animi? Omnis et rerum quas illum mollitia laborum molestias necessitatibus numquam quo non, illo repudiandae! Ea repudiandae corporis quidem alias quaerat. Quidem, ipsum quam!</p>
            <DeliveryDiningTwoToneIcon /> <i><b>Cash on delivery available</b></i>
            <br />
            <CompareArrowsTwoToneIcon /> <i><b>Easy 15 days return & exchange available</b></i>


            {/* LATER==================================================== */}
            
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={() => handleCart(data)} variant="contained">{data.button}</Button>

              <Link to="/mens" style={{ textDecoration: "none" }}>
                <Button variant="contained" color='success'>ADD MORE</Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default WranglerPageDetails