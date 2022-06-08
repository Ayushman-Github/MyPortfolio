import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';


export default function BasicAlerts() {


  return (

    <>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="filled" severity="success">
          Your order has been successfully done
        </Alert>
      </Stack>

      <div style={{ textAlign: "center", marginTop: "50px", marginBottom: "500px" }}>
        <p>Thanks for using Quickart</p>

        <Link to="/">
          <Button style={{ borderRadius: "50px" }}> Back to Home </Button>
        </Link>
      </div>
    </>
  );
}
