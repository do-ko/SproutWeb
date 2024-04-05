import {Breadcrumb, Button, Col, Container, Form, Modal, Row, Stack} from "react-bootstrap";
import axios from "../api/axios";
import {useContext, useEffect, useRef, useState} from "react";
import {useCookies} from "react-cookie";
import {CheckoutItem} from "../Components/Checkout/CheckoutItem";
import {useNavigate} from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import * as PropTypes from "prop-types";

function MyVerticallyCenteredModal(props) {
    return null;
}

MyVerticallyCenteredModal.propTypes = {
    show: PropTypes.any,
    onHide: PropTypes.func
};
export const CheckoutPage = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [address2, setAddress2] = useState("")
    const [paymentType, setPaymentType] = useState("")
    const [totalPrice, setTotalPrice] = useState(0);
    const [cookies] = useCookies(['token', 'cart']);
    const [currentCart, setCurrentCart] = useState({})
    const navigate = useNavigate();
    const {setCart} = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);


    // Breadcrumb navigation
    const [shipping, setShipping] = useState(true)
    const [payment, setPayment] = useState(false)
    const [review, setReview] = useState(false)

    const submitOrder = async () => {
        if (cookies.token) {
            try {
                await axios.delete("/api/cart/clear",
                    {
                        headers: {
                            "Authorization": ("Bearer " + cookies.token)
                        },
                    }).then(r => {
                        setCart({})
                        setModalShow(true)
                    }
                )
            } catch (e) {
                console.error(e)
            }

        } else {
            localStorage.removeItem('cart')
            setModalShow(true)
        }
    }

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Your order has been placed successfully!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Thank you for your order at SproutWeb Shop! Confirmation and tracking details are on their way to your inbox.
                        If you need help, reach out to our support team. Happy shopping!
                    </p>
                    <Button variant={"custom"} style={{width: "100%"}} onClick={() => {return navigate("/")}} size={"lg"}>
                        Return to shop
                    </Button>
                </Modal.Body>
            </Modal>
        );
    }

    const onInputEmail = ({target: {value}}) => {
        setEmail(value)
        setValidated(false)
    }
    const onInputFirstName = ({target: {value}}) => {
        setFirstName(value)
        setValidated(false)
    }
    const onInputLastName = ({target: {value}}) => {
        setLastName(value)
        setValidated(false)
    }
    const onInputCity = ({target: {value}}) => {
        setCity(value)
        setValidated(false)
    }
    const onInputZipCode = ({target: {value}}) => {
        setZipCode(value)
        setValidated(false)
    }
    const onInputCountry = ({target: {value}}) => {
        setCountry(value)
        setValidated(false)
    }
    const onInputAddress = ({target: {value}}) => {
        setAddress(value)
        setValidated(false)
    }
    const onInputAddress2 = ({target: {value}}) => {
        setAddress2(value)
        setValidated(false)
    }
    const onInputPaymentType = ({target: {value}}) => {
        setPaymentType(value)
        setValidated(false)
    }


    const onFormSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);

        } else {
            e.preventDefault();
            e.stopPropagation();
            setValidated(false);

            if (shipping) {
                setPayment(true);
                setShipping(false);
            } else if (payment) {
                setPayment(false);
                setReview(true);
            }
        }


    }

    const getCart = async () => {
        return await axios.get("/api/cart",
            {
                headers: {
                    "Authorization": ("Bearer " + cookies.token)
                },
            })
    }

    useEffect(() => {
        //     switch cart when user logs in or logs out
        if (cookies.token) {
            console.log("Use logged in cart")
            getCart().then(r => {
                const cart = r.data
                setCurrentCart(cart)
                setCart(cart)
                let tempTotal = 0
                cart.plants.forEach((item) => {
                    tempTotal += item.count * item.plant.price
                })
                cart.grounds.forEach((item) => {
                    tempTotal += item.count * item.ground.price
                })
                setTotalPrice(tempTotal)
                console.log(tempTotal)
            })
        } else {
            console.log("Use local cart")
            const cart = JSON.parse(localStorage.getItem('cart'))
            if (cart) {
                setCurrentCart(cart)
                let tempTotal = 0
                cart.plants.forEach((item) => {
                    tempTotal += item.count * item.plant.price
                })
                cart.grounds.forEach((item) => {
                    tempTotal += item.count * item.ground.price
                })
                setTotalPrice(tempTotal)
            } else {
                setTotalPrice(0)
            }
        }
    }, [cookies.token, totalPrice])

    return (
        <Container className={"checkoutPage"}>

            {shipping ?
                <Breadcrumb>
                    <Breadcrumb.Item active>Shipping</Breadcrumb.Item>
                    <Breadcrumb.Item>Payment</Breadcrumb.Item>
                    <Breadcrumb.Item>Review & Submit</Breadcrumb.Item>
                </Breadcrumb>
                : <></>
            }
            {payment ?
                <Breadcrumb>
                    <Breadcrumb.Item className={"clickableCrumb"} onClick={() => {
                        setPayment(false)
                        setShipping(true)
                    }}>Shipping</Breadcrumb.Item>
                    <Breadcrumb.Item active>Payment</Breadcrumb.Item>
                    <Breadcrumb.Item>Review & Submit</Breadcrumb.Item>
                </Breadcrumb>
                : <></>
            }
            {review ?
                <Breadcrumb>
                    <Breadcrumb.Item className={"clickableCrumb"} onClick={() => {
                        setShipping(true)
                        setReview(false)
                    }}>Shipping</Breadcrumb.Item>
                    <Breadcrumb.Item className={"clickableCrumb"} onClick={() => {
                        setPayment(true)
                        setReview(false)
                    }}>Payment</Breadcrumb.Item>
                    <Breadcrumb.Item active>Review & Submit</Breadcrumb.Item>
                </Breadcrumb>
                : <></>
            }


            <div className={"cartDataContainer"}>
                <div className={"addressFormContainer"}>
                    {shipping ? <>
                            <h2>Shipping Address</h2>
                            <Form noValidate validated={validated} onSubmit={onFormSubmit}>
                                <Form.Group className={"mb-3"} controlId={"formGroupEmail"}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required
                                                  type={"email"}
                                                  placeholder={"Email"}
                                                  onChange={onInputEmail}
                                                  value={email}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control required
                                                          type="text"
                                                          placeholder="FirstName"
                                                          onChange={onInputFirstName}
                                                          value={firstName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter first name.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control required
                                                          type="text"
                                                          placeholder="LastName"
                                                          onChange={onInputLastName}
                                                          value={lastName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter last name.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control required
                                                          type="text"
                                                          placeholder="City"
                                                          onChange={onInputCity}
                                                          value={city}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter city.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>Zip Code</Form.Label>
                                            <Form.Control required
                                                          type="text"
                                                          placeholder="ZipCode"
                                                          onChange={onInputZipCode}
                                                          value={zipCode}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter zip code.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>Country</Form.Label>
                                            <Form.Select required onChange={onInputCountry}
                                                         value={country}>
                                                <option selected={true} disabled={true} value={""}></option>
                                                <option>Poland</option>
                                                <option>Germany</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Please select a country.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>


                                <Form.Group className="mb-3" controlId="formGroupFirstName">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control required
                                                  type="text"
                                                  placeholder="Address"
                                                  onChange={onInputAddress}
                                                  value={address}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter address.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupFirstName">
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control type="text"
                                                  placeholder="Appartment, suite, etc (optional)"
                                                  onChange={onInputAddress2}
                                                  value={address2}
                                    />
                                </Form.Group>

                                <Form.Group as={"div"}>
                                    <Button variant={"custom"} size={"lg"} style={{width: "100%"}}
                                            type="submit">Next</Button>
                                </Form.Group>
                            </Form>
                        </>
                        : <></>}

                    {payment ? <>
                            <h2>Payment</h2>
                            <Form noValidate validated={validated} onSubmit={onFormSubmit}>
                                <Form.Check required type={"radio"} name="group1" id={`default-1`} value={"Debit Card"}
                                            label={"DEBIT CARD"} onChange={onInputPaymentType}/>
                                <Form.Check required type={"radio"} name="group1" id={`default-2`} value={"BLIK"}
                                            label={"BLIK"} onChange={onInputPaymentType}/>
                                <Form.Check required type={"radio"} name="group1" id={`default-3`} value={"Google Pay"}
                                            label={"GOOGLE PAY"} onChange={onInputPaymentType}/>
                                <Form.Check required type={"radio"} name="group1" id={`default-4`} value={"Bank Transfer"}
                                            label={"BANK TRANSFER"} onChange={onInputPaymentType}/>
                                <Form.Control.Feedback type="invalid">
                                    Please select an option.
                                </Form.Control.Feedback>


                                <Form.Group as={"div"}>
                                    <Button variant={"custom"} size={"lg"} style={{width: "100%"}}
                                            type="submit">Next</Button>
                                </Form.Group>
                            </Form>
                        </>
                        : <></>}

                    {review ?
                        <Stack gap={3}>
                            <div className={"orderData"}>
                                <h3>Order Data</h3>
                                <p>{firstName} {lastName}</p>
                                <p>{email}</p>
                                <p>{address} {address2}</p>
                                <p>{zipCode} {city}</p>
                                <p>{country}</p>
                                <p>{paymentType}</p>
                            </div>
                            <div>
                                <h3>Cart</h3>
                                <Stack className={"cartItems"}>
                                    {currentCart.plants?.map(item => {
                                        return <CheckoutItem product={item} type={"PLANT"}/>
                                    })}
                                    {currentCart.grounds?.map(item => {
                                        return <CheckoutItem product={item} type={"GROUND"}/>
                                    })}
                                </Stack>
                            </div>
                        </Stack>
                        : <></>}

                </div>

                <div className={"summaryContainer"}>
                    <h3>Summary</h3>
                    <hr className={"separator"}/>
                    <div className={"totalPriceSummary"}>
                        <p>ORDER TOTAL</p>
                        <p>{totalPrice}zł</p>
                    </div>
                    {review ?
                        <Button variant={"custom"} style={{width: "100%"}} onClick={submitOrder} size={"lg"}>
                            order
                        </Button>
                        : <></>}
                </div>
            </div>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>
    )
}