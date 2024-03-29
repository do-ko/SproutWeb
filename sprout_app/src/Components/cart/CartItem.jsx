import plantTest from "../../assets/topPlants/plant1.jpg";
import {Button} from "react-bootstrap";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCookies} from "react-cookie";
import {useContext} from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";

export const CartItem = ({product, setCurrentCart, setTotalPrice}) => {
    const [cookies] = useCookies(['token', 'cart']);
    const {setCart, setTotal} = useContext(AuthContext);

    const handleDecreaseCount = async () => {
        console.log("decrease")
        if (cookies.token) {
            //     if logged in
            try {
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
            } catch (e) {
                console.log("Failed to add item to cart")
            }
        } else {
            // if local cart used
            const cart = JSON.parse(localStorage.getItem('cart'))
            let tempTotal = 0
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
            } catch (e) {
                console.log("Failed to add item to cart")
            }
        } else {
            // if local cart used
            const cart = JSON.parse(localStorage.getItem('cart'))
            let tempTotal = 0
            cart.plants.forEach((item) => {
                if (item.plant.id === product.plant.id) {
                    item.count++
                    tempTotal += item.count * item.plant.price
                    cart.total++
                }
            })
            localStorage.setItem('cart', JSON.stringify(cart))
            setTotal(cart.total + 1)
            setCurrentCart(cart)
            setTotalPrice(tempTotal)
        }
    }

    return(
        <div className={"cartProductContainer"}>
            <div className={"cartProductImageContainer"}>
                <img src={`http://localhost:8083/api/images/download/${product.plant.imgName}.jpg`} alt={"image of a product"}/>
            </div>
            <div className={"cartProductData"}>
                <h3 className={"cartProductName"}>{product.plant.name}</h3>
                <p>{product.plant.price}zł</p>
                <div className={"countContainer"}>
                    <Button onClick={handleDecreaseCount} variant={"custom3"} size={"sm"}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </Button>
                    <p className={"itemCount"}>{product.count}</p>
                    <Button onClick={handleIncreaseCount} variant={"custom3"} size={"sm"}>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </Button>
                </div>

            </div>
        </div>
    )
}