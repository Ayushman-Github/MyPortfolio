import React from 'react'
import Signup from "../Buttons/Signup"
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';


const Footer = () => { 
    const [setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);


    return (
        <div>
            <div className="footer">
                <div style={{ fontSize: "30px", textAlign: "center", padding: "30px" }}>
                    <b>Quickart</b>
                    <hr />
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div className="footer_data">
                        <h6 style={{ marginBottom: "20px" }}><u>Product</u></h6>
                        <Link to="/mens" className='footer_link'><p>Mens Wear</p></Link>
                        <Link to="/womens" className='footer_link'><p>Womens wear</p></Link>
                        <Link to="/kids" className='footer_link'><p>Kids wear</p></Link>
                        <Link to="/accessories" className='footer_link'><p>All Accessories</p></Link>
                        <Link to="/electronics.header" className='footer_link'><p>All Electronics</p></Link>
                    </div>
                    <div className="footer_data">
                        <h6 style={{ marginBottom: "20px" }}><u>Company</u></h6>
                        <a href="https://in.puma.com/" className='footer_link'><p>Puma</p></a>
                        <a href="https://one8.com/" className='footer_link'><p>Puma ❘ One 8</p></a>
                        <a href="https://hrxbrand.com" className='footer_link'><p>Hrx</p></a>
                        <a href="https://global.tommy.com/" className='footer_link'><p>Tommy Hilfiger</p></a>
                        <a href="https://www.allensolly.com/" className='footer_link'><p>Allen Solly</p></a>
                        <a href="https://www.louisphilippe.com/" className='footer_link'><p>Louis Philippe</p></a>
                        <a href="https://www.calvinklein.us" className='footer_link'><p>Calvin Klein</p></a>
                        <a href="https://www.lee.in" className='footer_link'><p>Lee</p></a>
                    </div>
                    <div className="footer_data">
                        <h6 style={{ marginBottom: "20px" }}><u>Services</u></h6>
                        <Link to="/Aboutus" className='footer_link'><p>About Us</p></Link>
                        <Link to="/FreeDelivery" className='footer_link'><p>Free Delivery</p></Link>
                        <Link to="/Exchange" className='footer_link'><p>Exchange</p></Link>
                        <Link to="/Return" className='footer_link'><p>Return with T&C</p></Link>
                    </div>
                    <div className="footer_data">
                        <h6 style={{ marginBottom: "20px" }}><u>Get help</u></h6>
                        <Link to="/" className='footer_link'><p>Help Center</p></Link>
                        <Link to="/Contact" className='footer_link'><p>Contact Us</p></Link>
                        <Link to="/" className='footer_link'><p>Privacy Policy</p></Link>
                        <Link to="/" className='footer_link'><p>Terms & Conditions</p></Link>
                    </div>
                </div>

                <hr />
                <div style={{ width: "250px", height: "50px", margin: "auto", display: "flex" }}>
                    <div style={{ margin: "auto" }}>
                        Register for free
                    </div>
                    <div>
                        <Button onClick={handleOpen} style={{ border: "2px solid grey", width: "100px", height: "35px", borderRadius: "30px", marginTop: "9px", paddingTop: "8px" }}> <Signup /> </Button>
                    </div>
                </div>
                <hr />
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>

                    <div className="social_icon">
                        <a href="https://www.facebook.com" className='footer_link'><FacebookIcon /></a>
                    </div>
                    <div className="social_icon">
                        <a href="https://www.instagram.com" className='footer_link'><InstagramIcon /></a>
                    </div>
                    <div className="social_icon">
                        <a href="https://www.twitter.com" className='footer_link'><TwitterIcon /></a>
                    </div>
                    <div className="social_icon">
                        <a href="https://www.google.com" className='footer_link'><GoogleIcon /></a>
                    </div>
                    <div className="social_icon">
                        <a href="https://www.linkedin.com" className='footer_link'><LinkedinIcon /></a>
                    </div>
                    <div className="social_icon">
                        <a href="https://www.github.com" className='footer_link'><GithubIcon /></a>
                    </div>
                </div>
                <div style={{ width: "100%", height: "30px", textAlign: "center" }}>
                    <span style={{ color: "black" }}>© 2022 ALL RIGHT RESERVED : Quickart</span>
                </div>
            </div>
        </div>
    )
}

export default Footer