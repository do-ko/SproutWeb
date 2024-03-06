import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav} from "react-bootstrap";
import "./Navigation.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-regular-svg-icons";
import {faArrowRightFromBracket, faBars, faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../../context/AuthProvider";
import {useCookies} from "react-cookie";

export const Navigation = ({sticky, fixed}) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const {auth, logout, cart} = useContext(AuthContext);
    const [cookies, setCookie] = useCookies(['token', 'cart']);


    useEffect(() => {
        if (!cookies.token) {
            setIsAuthorized(false)
        } else setIsAuthorized(true)
    }, [auth])

    return (
        <Navbar id={"navigation-custom"} sticky={sticky} fixed={fixed} expand={"lg"}>
            <Container fluid={"md"}>
                <a className={"navbar-brand brand-name-large"} href={"/"}>Sprout</a>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FontAwesomeIcon icon={faBars}/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className={"collapsable-menu"}>
                    <Nav>
                        <Container className={"store-links-container"}>
                            <Nav.Link href={"/plants"}>plants</Nav.Link>
                            <Nav.Link>ground</Nav.Link>
                            <Nav.Link>pots</Nav.Link>
                        </Container>

                    </Nav>
                </Navbar.Collapse>
                <a className={"navbar-brand brand-name-small"} href={"/"}>Sprout</a>
                <Nav className={"account-links-container"}>
                    <Nav.Link href={"/cart"} className={"account-link"}>
                        <div className={"cartIcon"}>
                            <FontAwesomeIcon icon={faBasketShopping}/>
                            {!cookies.token ? (cookies.cart ? <div className={"cartBadge"}>{cookies.cart.length}</div> : <></>) : <div className={"cartBadge"}>{cart.total}</div>}
                        </div>
                        <p className={"link-text"}>Cart</p>
                    </Nav.Link>
                    {!isAuthorized ? <Nav.Link href={"/login"} className={"account-link"}>
                        <FontAwesomeIcon icon={faCircleUser}/>
                        <p className={"link-text"}>Sign In</p>
                    </Nav.Link> : <Nav.Link href={"/"} className={"account-link"} onClick={logout}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                        <p className={"link-text"}>Logout</p>
                    </Nav.Link>}

                </Nav>

            </Container>
        </Navbar>
    )
}