import * as React from 'react';
import Signup from "./Signup"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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

export default function Login() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <div>
      {/* BUTTON TRIGGER */}
      <Button onClick={handleOpen}>
        <AccountCircleIcon />
      </Button>

      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, padding: "0px" }}>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <button onClick={handleClose} style={{ border: "none", position: "relative", right: "20px", top: "15px" }} > X </button>
          </div>
          <h2 style={{ textAlign: "center" }}><u>Login</u></h2>
          <div style={{ margin: "10px", padding: "10px" }}>
            <form >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=' ex- Virat Kohli' />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder=' ex- viratkohli@gmail.com' />
              </div>

              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button type="submit" className="btn btn-primary" style={{ margin: "10px" }}>Submit</button>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <span>*New User</span>
                </div>

                <div>
                  <Button onClick={handleOpen}>
                    <Signup />
                  </Button>
                </div>

              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}