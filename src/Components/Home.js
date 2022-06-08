import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import img1 from "../image/img1.jpg"
import img2 from "../image/img2.jpg"
import img3 from "../image/img3.jpg"


const Home = () => {

  return (
    <div className='main-div'>

      {/* QUICKART============================================= */}


      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="4000">
            <img src={img1} class="d-block w-100" alt="" />

            <Link to="/Register"><button className='header-button'></button></Link>
          
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img src={img2} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img src={img3} class="d-block w-100" alt="" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* BRANDS LOGOS====================================================== */}
      <div className='our-top-brands'>
        <h1><i>Our Top Brands</i></h1>
        <b><hr /></b>
      </div>
      <div className="brands">
        <div className="brands-column">

          <Link to="/Puma">
            <div className="brand-logo-1"></div>
          </Link>


          <Link to="/Wrogn">
            <div className="brand-logo-2"></div>
          </Link>

          <Link to="/One8">
            <div className="brand-logo-3"></div>
          </Link>

          <Link to="/Hrx">
            <div className="brand-logo-4"></div>
          </Link>

          <Link to="/Nike">
            <div className="brand-logo-5"></div>
          </Link>

          <Link to="/Adidas">
            <div className="brand-logo-6"></div>
          </Link>
        </div>


        <div className="brands-column">

          <Link to="/PeterEngland">
            <div className="brand-logo-7"></div>
          </Link>

          <Link to="/Lee">
            <div className="brand-logo-8"></div>
          </Link>

          <Link to="/PepeJeans">
            <div className="brand-logo-9"></div>
          </Link>

          <Link to="/CalvinKlein">
            <div className="brand-logo-10"></div>
          </Link>

          <Link to="/USPOLO">
            <div className="brand-logo-11"></div>
          </Link>

          <Link to="/JackandJones">
            <div className="brand-logo-12"></div>
          </Link>
        </div>


        <div className="brands-column">

          <Link to="/LouisPhilippe">
            <div className="brand-logo-13"></div>
          </Link>

          <Link to="/AllenSolly">
            <div className="brand-logo-14"></div>
          </Link>

          <Link to="/TommyHilfiger">
            <div className="brand-logo-15"></div>
          </Link>

          <Link to="/Wrangler">
            <div className="brand-logo-16"></div>
          </Link>

          <Link to="/Benetton">
            <div className="brand-logo-17"></div>
          </Link>

          <Link to="/Levis">
            <div className="brand-logo-18"></div>
          </Link>
        </div>
      </div>

      {/* HAPPY FAMILY SALE================================================= */}


      <div className='our-top-brands'>
        <hr />
      </div>
      <div className='second-container'>

        <Link to="/Mens">
          <div className="mens-blezer"></div>
        </Link>

        <Link to="/Womens">
          <div className="womens-kurti"></div>
        </Link>

        <Link to="/Kids">
          <div className="kids-frock"></div>
        </Link>


        <div className="perfumes">

          <div className="perfumes-one-two">

            <Link to="/Accessories">
              <div className="perfumes-one"></div>
            </Link>

            <Link to="/Accessories">
              <div className="perfumes-two"></div>
            </Link>

          </div>


          <div className="perfumes-three-four">

            <Link to="/Accessories">
              <div className="perfumes-three"></div>
            </Link>

            <Link to="/Accessories">
              <div className="perfumes-four"></div>
            </Link>

          </div>
        </div>

      </div>






    </div>



  )
}

export default Home