import * as React from 'react';
import Box from '@mui/material/Box';
import Login from './Login';



export default function BasicModal() {

    return (
        <div style={{ padding: "20px 150px" }}>
            <div style={{ textAlign: "center", margin: "10px 0px 30px 0px", color: "#1A6EFF" }}><h2><u>Register For An Account</u></h2></div>

            <Box>
                <div style={{ display: "flex", justifyContent: "right" }}>
                </div>
                <div style={{ margin: "10px", padding: "10px" }}>
                    <form>
                        <div className="mb-3" style={{ display: "flex", width: "100%" }}>
                            <label htmlFor="exampleInputEmail1" className="form-label" style={{ width: "15%" }}>Enter Your Name : </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=' ex- Virat Kohli' style={{ width: "85%" }} />
                        </div>


                        <div className="mb-1" style={{ display: "flex", width: "100%" }}>
                            <label htmlFor="exampleInputEmail1" className="form-label" style={{ width: "15%" }}>Email address :</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='ex- viratkohli@gmail.com' style={{ width: "85%" }} />
                        </div>

                        <div className="mb-3" style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "15%" }}> </div>
                            <div id="emailHelp" className="form-text" style={{ width: "85%" }}>We'll never share your email with anyone else.</div>
                        </div>


                        <div className="mb-3" style={{ display: "flex", width: "100%" }}>
                            <label htmlFor="exampleInputPassword1" className="form-label" style={{ width: "15%" }} >Password :</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='ex- Vkohli@18' style={{ width: "85%" }} />
                        </div>


                        <div className="mb-3" style={{ display: "flex", width: "100%" }}>
                            <label htmlFor="exampleInputPassword1" className="form-label" style={{ width: "15%" }}>Re-enter Password :</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='ex- Vkohli@18' style={{ width: "85%" }} />
                        </div>

                        <div className="mb-3" style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "15%" }}></div>
                            <div class="form-check d-flex justify-content-center mb-1 mt-3">
                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                <label class="form-check-label" for="form2Example3">
                                    <div style={{ fontSize: "15px" }}>
                                        I agree all statements in <a href="#!">Terms of service</a>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <button className="btn btn-danger" style={{ height: "40px" }}>
                                <a href="https://myaccount.google.com/" style={{ color: "white", textDecoration: "none" }}>Sign In With Google</a>
                            </button>
                            <button type="submit" className="btn btn-primary" style={{ margin: "10px" }}>
                                Submit
                            </button>
                            <button className="btn btn-primary" style={{ height: "40px" }}>
                                <a href="https://www.facebook.com/login/" style={{ color: "white", textDecoration: "none" }}>Sign In With Facebook</a>
                            </button>

                        </div>

                        <div>

                            <div style={{ width: "100%", textAlign: "center" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", textAlign: "center", margin: "auto", marginTop: "30px", width: "310px" }}>
                                    <div>
                                        <b>* Have an account!!! Login here</b>
                                    </div>
                                    <div>
                                        <Login />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Box>
        </div >
    );
}



