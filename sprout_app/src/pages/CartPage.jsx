import {Container} from "react-bootstrap";
import {Navigation} from "../Components/Home/Navigation";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthProvider";
import {useCookies} from "react-cookie";
import {forEach} from "react-bootstrap/ElementChildren";

export const CartPage = () => {
    const {cart} = useContext(AuthContext);
    const [cookies, setCookie] = useCookies(['token', 'cart']);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(()=> {
        let temp = 0;
        if (cookies.token){
            console.log(cart.plants);
            // cart.plants.forEach((plantRecord) => {
            //     temp += plantRecord.plant.price * plantRecord.count
            // });
        } else {
            cookies.cart.forEach((item) => {
                // console.log(item);
                temp += item.price;
            });
        }
        // console.log(temp);
        setTotalPrice(temp);

    }, [cart, cookies.cart])

    return(
        <>
            <Navigation/>
            <Container style={{backgroundColor: "red"}}>
                <div>
                    <h3>Hi! This is your shopping cart!</h3>
                    {totalPrice > 99 ? <p>Your order ships free!</p> : <p>Add {99-totalPrice}zł to get free shipping!</p>}

                </div>
            </Container>
        </>

    )
}