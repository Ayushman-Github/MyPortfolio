import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { DLT } from '../../redux/actions/action';
import { Link } from 'react-router-dom';
import Rating from '../Subcomp/Rating'
import Button from '@mui/material/Button';




const Cart = () => {



  const [price, setPrice] = useState(0);
  // console.log(price);


  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(DLT(id))
  }




  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      return (
        price = parseInt(ele.price) + parseInt(price)
      )
    })
    setPrice(price);
  }

  useEffect(() => {
    total()
  }, [total]
  )

  const clearCart = () => {
    return dispatch  ( {type: "CLEAR_CART"})
  }

  const getdata = useSelector((state) => state.cartreducer.carts);

  return (
    <>
      {
        getdata.length ?
          <div style={{ padding: "5px 350px", marginBottom: "300px" }}>
            <h3 style={{ color: "#1A6EFF", textAlign: "center" }}>Your Carts :</h3>
            <hr />
            <Table>
              <tbody>
                {
                  getdata.map((data) => {
                    return (

                      <>
                        <tr>
                          <td style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex" }}>

                              <div style={{ padding: "10px" }}>
                                <div key={data.image} style={{ width: "100px", height: "150px" }}>{data.image}</div>
                              </div>

                              <div style={{ padding: "10px 10px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                  <h5 key={data.name}>{data.name}</h5>
                                </div>
                                <div>
                                  <div style={{ display: "flex", textAlign: "center" }}>
                                    <b><h3 key={data.price}> ₹{data.price}</h3></b>
                                    <h6 key={data.originalPrice}><del style={{ fontSize: "14px" }}>₹{data.originalPrice}</del></h6>
                                    &nbsp;
                                    <h5 key={data.discount}><p style={{ color: "green" }}>{data.discount}</p></h5>
                                  </div>
                                  <p style={{ color: "green" }}>inclusive of all taxes</p>
                                  <div style={{ display: "flex" }}>
                                    <Rating />
                                    <p style={{ margin: "0px" }}>( 592 Ratings )</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => remove(data.id)} > Delete </Button>
                            </div>
                          </td>
                        </tr>

                      </>
                    )
                  })
                }
              </tbody>
            </Table>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Total = ₹{price}</h3>
              <Link to="/Order">
                <Button onClick={clearCart} variant='contained' >Order</Button>
              </Link>
            </div>
          </div>
          :
          <div style={{ textAlign: "center", margin: "300px", marginTop: "250px" }}>
            <h3><i>You don't have any product</i></h3>
            <Link to={"/"}>
              <button style={{ marginTop: "20px" }}>Go to home page</button>
            </Link>
          </div>

      }
    </>
  )
}

export default Cart;
