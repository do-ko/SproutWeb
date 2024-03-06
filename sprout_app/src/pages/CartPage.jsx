import {Container} from "react-bootstrap";
import {Navigation} from "../Components/Home/Navigation";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthProvider";
import {useCookies} from "react-cookie";
import axios from "../api/axios";

export const CartPage = () => {
    const {cart} = useContext(AuthContext);
    // const {logout, getCart} = useContext(AuthContext);
    const [cookies, setCookie] = useCookies(['token', 'cart']);
    const [totalPrice, setTotalPrice] = useState(0);
    const [currentCart, setCurrentCart] = useState({})

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
            getCart().then(r => setCurrentCart(r.data))
        } else {
            console.log("Use local cart")
            setCurrentCart(JSON.parse(localStorage.getItem('cart')))
        }
    }, [cookies.token])

    // useEffect(()=> {
    //     // let temp = 0;
    //     // if (cookies.token){
    //     //     console.log(cart.plants);
    //     //     // cart.plants.forEach((plantRecord) => {
    //     //     //     temp += plantRecord.plant.price * plantRecord.count
    //     //     // });
    //     // } else {
    //     //     cookies.cart.forEach((item) => {
    //     //         // console.log(item);
    //     //         temp += item.price;
    //     //     });
    //     // }
    //     // console.log(temp);
    //     // setTotalPrice(temp);
    //
    // }, [cart, cookies.cart])

    return (
        <>
            <Navigation/>
            <Container style={{backgroundColor: "red"}}>
                <div>
                    <h3>Hi! This is your shopping cart!</h3>
                    {totalPrice > 99 ? <p>Your order ships free!</p> :
                        <p>Add {99 - totalPrice}zł to get free shipping!</p>}

                </div>
                {console.log(currentCart)}
                {currentCart.plants?.map(item => {
                    return <p>{item.plant.name}</p>
                })}
            </Container>
        </>

    )
}