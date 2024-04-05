import {Button} from "react-bootstrap";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCookies} from "react-cookie";
import {useContext} from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";

export const CartItem = ({product, setCurrentCart, setTotalPrice, type}) => {
    const [cookies] = useCookies(['token']);
    const {setCart, setTotal} = useContext(AuthContext);

    const handleDecreaseCount = async () => {
        console.log("decrease")
        if (cookies.token) {
            //     if logged in
            try {
                if (type === "PLANT"){
                    const responseCart = await axios.post("/api/cart/remove",
                        JSON.stringify({type: "PLANT", id: product.plant.id}),
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": ("Bearer " + cookies.token)
                            },
                        });
                    let cart = responseCart.data
                    setCurrentCart(cart);
                    let tempTotal = 0
                    cart.plants.forEach((item) => {
                        if (item.plant.id === product.plant.id) {
                            tempTotal += item.count * item.plant.price
                        }
                    })
                    setTotalPrice(tempTotal)
                    setCart(cart)
                } else if (type === "GROUND"){
                    const responseCart = await axios.post("/api/cart/remove",
                        JSON.stringify({type: "GROUND", id: product.ground.id}),
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": ("Bearer " + cookies.token)
                            },
                        });
                    let cart = responseCart.data
                    console.log(cart)
                    setCurrentCart(cart)
                    let tempTotal = 0
                    cart.grounds.forEach((item) => {
                        if (item.ground.id === product.ground.id) {
                            tempTotal += item.count * item.ground.price
                        }
                    })
                    setTotalPrice(tempTotal)
                    setCart(cart)
                }
            } catch (e) {
                console.log(e)
                console.log("Failed to add item to cart")
            }
        } else {
            // if local cart used
            const cart = JSON.parse(localStorage.getItem('cart'))
            let tempTotal = 0
            if (type === "PLANT"){
                cart.plants.forEach((item) => {
                    if (item.plant.id === product.plant.id) {
                        if (item.count === 1) {
                            const index = cart.plants.indexOf(item)
                            cart.plants.splice(index, 1)
                        } else {
                            item.count--
                            tempTotal += item.count * item.plant.price
                        }
                        cart.total--
                    }
                })
            } else if (type === "GROUND"){
                cart.grounds.forEach((item) => {
                    if (item.ground.id === product.ground.id) {
                        if (item.count === 1) {
                            const index = cart.grounds.indexOf(item)
                            cart.grounds.splice(index, 1)
                        } else {
                            item.count--
                            tempTotal += item.count * item.ground.price
                        }
                        cart.total--
                    }
                })
            }

            localStorage.setItem('cart', JSON.stringify(cart))
            setTotal(cart.total - 1)
            setCurrentCart(cart)
            setTotalPrice(tempTotal)
        }
    }

    const handleIncreaseCount = async () => {
        console.log("increase")
        if (cookies.token) {
            //     if logged in
            try {
                if (type === "PLANT"){
                    const responseCart = await axios.post("/api/cart/add",
                        JSON.stringify({type: "PLANT", id: product.plant.id}),
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": ("Bearer " + cookies.token)
                            },
                        });
                    let cart = responseCart.data
                    setCurrentCart(cart);
                    let tempTotal = 0
                    cart.plants.forEach((item) => {
                        if (item.plant.id === product.plant.id) {
                            tempTotal += item.count * item.plant.price
                        }
                    })
                    setTotalPrice(tempTotal)
                    setCart(cart)
                } else if (type === "GROUND"){
                    const responseCart = await axios.post("/api/cart/add",
                        JSON.stringify({type: "GROUND", id: product.ground.id}),
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": ("Bearer " + cookies.token)
                            },
                        });
                    let cart = responseCart.data
                    setCurrentCart(cart);
                    let tempTotal = 0
                    cart.grounds.forEach((item) => {
                        if (item.ground.id === product.ground.id) {
                            tempTotal += item.count * item.ground.price
                        }
                    })
                    setTotalPrice(tempTotal)
                    setCart(cart)
                }
            } catch (e) {
                console.log("Failed to add item to cart")
            }
        } else {
            // if local cart used
            const cart = JSON.parse(localStorage.getItem('cart'))
            let tempTotal = 0
            if (type === "PLANT"){
                cart.plants.forEach((item) => {
                    if (item.plant.id === product.plant.id) {
                        item.count++
                        tempTotal += item.count * item.plant.price
                        cart.total++
                    }
                })
            } else if (type === "GROUND"){
                cart.grounds.forEach((item) => {
                    if (item.ground.id === product.ground.id) {
                        item.count++
                        tempTotal += item.count * item.ground.price
                        cart.total++
                    }
                })
            }
            localStorage.setItem('cart', JSON.stringify(cart))
            setTotal(cart.total + 1)
            setCurrentCart(cart)
            setTotalPrice(tempTotal)
        }
    }

    return (
        <div className={"cartProductContainer"}>
            <div className={"cartProductImageContainer"}>
                {type === "PLANT" ? <img src={`http://localhost:8083/api/images/download/${product.plant.imgName}.jpg`}
                                         alt={"image of a product"}/>
                    : <></>}
                {type === "GROUND" ?
                    <img src={`http://localhost:8083/api/images/download/${product.ground.imgName}.jpg`}
                         alt={"image of a product"}/>
                    : <></>}

            </div>
            <div className={"cartProductData"}>
                <h3 className={"cartProductName"}>
                    {type === "PLANT" ? <p>{product.plant.name}</p> : <></>}
                    {type === "GROUND" ? <p>{product.ground.name}</p> : <></>}
                </h3>
                <p>
                    {type === "PLANT" ? <p>{product.plant.price}zł</p> : <></>}
                    {type === "GROUND" ? <p>{product.ground.price}zł</p> : <></>}
                </p>
                <div className={"countContainer"}>
                    <Button onClick={handleDecreaseCount} variant={"custom3"} size={"sm"}>
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </Button>
                    <p className={"itemCount"}>{product.count}</p>
                    <Button onClick={handleIncreaseCount} variant={"custom3"} size={"sm"}>
                        <FontAwesomeIcon icon={faChevronUp}/>
                    </Button>
                </div>

            </div>
        </div>
    )
}