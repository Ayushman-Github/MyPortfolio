import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Login from './Login';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Signup</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <div style={{ display: "flex", justifyContent: "right" }}>
                        <button onClick={handleClose} style={{ border: "none", position: "relative", right: "5px", top: "5px" }} > X </button>
                    </div>
                    <h2 style={{ textAlign: "center" }}><u>Signup</u></h2>
                    <div style={{ margin: "10px", padding: "10px" }}>
                        <form>
                            <div className="mb-1">
                                <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=' ex- Virat Kohli' />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='ex- viratkohli@gmail.com' />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='ex- Vkohli@18' />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputPassword1" className="form-label">Re-enter Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='ex- Vkohli@18' />
                            </div>
                            <div class="form-check d-flex justify-content-center mb-1 mt-3">
                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                <label class="form-check-label" for="form2Example3">
                                    <div style={{ fontSize: "15px" }}>
                                        I agree all statements in <a href="#!">Terms of service</a>
                                    </div>
                                </label>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <button type="submit" className="btn btn-primary" style={{ margin: "10px" }}>Submit</button>
                            </div>

                            <div>
                                <p style={{ textAlign: "center" }}>or</p>

                                <div style={{ width: "100%", textAlign: "center" }}>
                                    <button className="btn btn-danger">
                                        Sign In With Google
                                    </button>

                                    <div style={{ display: "flex", justifyContent: "space-between", textAlign: "center", marginTop: "20px" }}>
                                        <div>
                                            * Have an account! Login here
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
            </Modal>
        </div >
    );
}
