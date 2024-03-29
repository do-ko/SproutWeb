import {Button, Container, Stack} from "react-bootstrap";
import {Navigation} from "../Components/Home/Navigation";
import {useContext, useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import axios from "../api/axios";
import {CartItem} from "../Components/cart/CartItem";
import PlantContext from "../context/PlantProvider";
import {AuthProvider} from "../context/AuthProvider";

export const CartPage = () => {
    const [cookies] = useCookies(['token', 'cart']);
    const [totalPrice, setTotalPrice] = useState(0);
    const [currentCart, setCurrentCart] = useState({})
    // const {currentCart, setCurrentCart} = useContext(AuthProvider);


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
                let tempTotal = 0
                cart.plants.forEach((item) => {
                    tempTotal += item.count * item.plant.price
                })
                setTotalPrice(tempTotal)
                console.log(tempTotal)
            })
        } else {
            console.log("Use local cart")
            const cart = JSON.parse(localStorage.getItem('cart'))
            if (cart){
                setCurrentCart(cart)
                let tempTotal = 0
                cart.plants.forEach((item) => {
                    tempTotal += item.count * item.plant.price
                })
                setTotalPrice(tempTotal)
            } else {
                setTotalPrice(0)
            }

        }
    }, [cookies.token, totalPrice])


    return (
        <>
            <Navigation/>
            <Container>
                <div>
                    <h3>Hi! This is your shopping cart!</h3>
                    {totalPrice > 99 ? <p>Your order ships free!</p> :
                        <p>Add {99 - totalPrice}zł to get free shipping!</p>}

                </div>
                <div className={"cartDataContainer"}>
                    <Stack className={"cartItems"}>
                        {currentCart.plants?.map(item => {
                            return <CartItem product={item} setCurrentCart={setCurrentCart} setTotalPrice={setTotalPrice}/>
                        })}
                    </Stack>
                    <div className={"summaryContainer"}>
                        <h3>Summary</h3>
                        <hr className={"separator"}/>
                        <div className={"totalPriceSummary"}>
                            <p>ORDER TOTAL</p>
                            <p>{totalPrice}zł</p>
                        </div>
                        <Button variant={"custom"} href={"/checkout"} size={"lg"}>
                            proceed to checkout
                        </Button>
                    </div>
                </div>
            </Container>
        </>

    )
}