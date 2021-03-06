import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button, Container } from "react-bootstrap";

// Local imports
import Message from "../../components/Message";
import { addToCart, removeFromCart, saveShippingAddress } from "../../actions/cartActions";
import './CartScreen.css'

function CartScreen({ match, location, history }) {
   const SHIPPING = {
      GROUND_SHIPPING: 0,
      EXPEDITE: 50,
      OVERNIGHT: 140
   }
   const dispatch = useDispatch();
   const cart = useSelector((state) => state.cart);
   const { cartItems } = cart;
   const {shippingAddress} = useSelector(state => state.cart)

   const productId = match.params.id;
   const qty = location.search ? Number(location.search.split("=")[1]) : 1;
   const [shippingPrice, setShippingPrice] = useState(0)
   const [address, setAddress] = useState(shippingAddress ? shippingAddress.address : "")
   const [city, setCity] = useState(shippingAddress ? shippingAddress.city : "")
   const [postalCode, setPostalCode] = useState(shippingAddress ? shippingAddress.postalCode : "")
   const [country, setCountry] = useState(shippingAddress ? shippingAddress.country : "")

 
   useEffect(() => {
      if (productId) {
         dispatch(addToCart(productId, qty));
      }
   }, [dispatch, productId, qty]);

   // Handlers
   const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
   };

   const checkoutHandler = () => {
         history.push("/login?redirect=payment");
   };

   const updateHandler = (e) => {
      e.preventDefault()

      dispatch(saveShippingAddress({address, city, postalCode, country}))
   }
   return (
      <Container>
         <h1 className="text-center my-4">Your Shopping Cart</h1>
         <Row className="cart">
            <Col md={8} className="cart-productInfos">
               {cartItems.length === 0 ? (
                  <Message variant="info">
                     Your cart is empty <Link to="/">Go Back</Link>
                  </Message>
               ) : (
                  <ListGroup variant="flush">
                     {cartItems.map((item) => (
                        <ListGroup.Item key={item.product}>
                           <Row className="align-items-center">
                              <Col xs={4} md={2} className="my-4">
                                 <Image
                                    src={item.image}
                                    alt={item.name}
                                    fluid
                                    rounded
                                 />
                              </Col>
                              <Col xs={3} md={3}>
                                 <Link to={`/product/${item.product}`}>
                                    {item.name}
                                 </Link>
                              </Col>
                              <Col xs={2} md={2}>${item.price}</Col>
                              <Col xs={2} md={3} className="my-1">
                                 <Form.Control
                                    as="select"
                                    value={item.qty}
                                    onChange={(e) =>
                                       dispatch(
                                          addToCart(
                                             item.product,
                                             Number(e.target.value)
                                          )
                                       )
                                    }
                                 >
                                    {[...Array(item.countInStock).keys()].map(
                                       (x) => (
                                          <option value={x + 1} key={x + 1}>
                                             {x + 1}
                                          </option>
                                       )
                                    )}
                                 </Form.Control>
                              </Col>
                              <Col xs={1} md={1}>
                                 <Button
                                    type="button"
                                    variant="light"
                                    onClick={() =>
                                       removeFromCartHandler(item.product)
                                    }
                                 >
                                    <i className="fa fa-times"></i>
                                 </Button>
                              </Col>
                           </Row>
                        </ListGroup.Item>
                     ))}
                  </ListGroup>
               )}
            </Col>
            <Col md={4} className="cart-checkout">
                  <ListGroup variant="flush">
                     <ListGroup.Item>
                        {/* Shipping Section */}
                        <h2 className="my-4">
                           Shipping
                        </h2>

                        {/* Shipping Infos */}
                        <Form.Group as={Row}>
                           <Col sm={10}>
                           <Form.Check
                              type="radio"
                              label="Ground Shipping - 2 to 5 business days: FREE"
                              name="formShippingRadios"
                              id="formship1"
                              defaultChecked
                              onClick={() => setShippingPrice(SHIPPING.GROUND_SHIPPING)}
                           />
                           <Form.Check
                              type="radio"
                              label="Expedite - 2 to 3 days: $50"
                              name="formShippingRadios"
                              id="formship2"
                              onClick={() => setShippingPrice(SHIPPING.EXPEDITE)}
                           />
                           <Form.Check
                              type="radio"
                              label="Overnight - Next Day: $140"
                              name="formShippingRadios"
                              id="formship3"
                              onClick={() => setShippingPrice(SHIPPING.OVERNIGHT)}
                           />
                           </Col>
                        </Form.Group>

                        {/* Address Section */}
                        <h2 className="my-4">Address</h2>
                        <Form.Group controlId="country" className="my-4">
                           <Form.Control 
                           type="text" 
                           placeholder="Country" 
                           value={country ? country : ''} 
                              onChange={(e) => {
                                 setCountry(e.target.value);
                              }}/>
                        </Form.Group>

                        <Form.Group controlId="address" className="my-4">
                           <Form.Control 
                              type="text" 
                              placeholder="Address"
                              value={address ? address : ''} 
                                 onChange={(e) => {
                                    setAddress(e.target.value);
                              }}/>
                        </Form.Group>

                        <Form.Group controlId="city" className="my-4">
                           <Form.Control 
                              type="text" 
                              placeholder="City" 
                              value={city ? city : ''} 
                                    onChange={(e) => {
                                       setCity(e.target.value);
                              }}/>
                        </Form.Group>

                        <Form.Group controlId="postalCode" className="my-4">
                           <Form.Control 
                              type="text" 
                              placeholder="Postal Code" 
                              value={postalCode ? postalCode : ''} 
                                    onChange={(e) => {
                                       setPostalCode(e.target.value);
                              }}/>
                        </Form.Group>
                        <Button className="w-100" onClick={updateHandler}>UPDATE</Button>

                        {/* Total Section */}
                        <Row className="my-4">
                           <Col>
                              Shipping
                           </Col>
                           <Col>
                              ${shippingPrice}
                           </Col>
                        </Row>
                        
                        <Row className="my-4">
                           <Col>
                              Total
                           </Col>
                           <Col>
                              $
                              {cartItems
                              .reduce((acc, item) => acc + item.qty * item.price, shippingPrice)
                              .toFixed()}
                           </Col>
                        </Row>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <Button
                           type="button"
                           className="w-100"
                           disabled={cartItems.length === 0 || (address === "" || city === "" || postalCode === "" || country === "")}
                           onClick={checkoutHandler}
                        >
                           PROCEED TO CHECKOUT
                        </Button>
                     </ListGroup.Item>
                  </ListGroup>
            </Col>
         </Row>
      </Container>
   );
}

export default CartScreen;
