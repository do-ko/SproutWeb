import {Button} from "react-bootstrap";
import plantTest from "../../assets/topPlants/plant1.jpg"
import "./Product.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useCookies} from "react-cookie";
import axios from "../../api/axios";
import {useContext} from "react";
import AuthContext from "../../context/AuthProvider";

export const Product = ({product}) => {
    const [cookies] = useCookies(['token', 'cart']);
    const {setCart} = useContext(AuthContext);

    const handleAddToCart = async () => {
        if (cookies.token) {
            try {
                const responseCart = await axios.post("/api/cart/add",
                    JSON.stringify({type: "PLANT", id: product.id}),
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": ("Bearer " + cookies.token)
                        },
                    });
                setCart(responseCart.data);
            } catch (e) {
                console.log("Failed to add item to cart")
            }

        } else {
            const cart = JSON.parse(localStorage.getItem('cart'))
            if (cart) {
                const plants = [...cart.plants];
                if (plants.some(item => item.plant.id === product.id)) {
                    //     if product already in cart
                    const item = plants.filter(item => item.plant.id === product.id)[0]
                    const index = plants.indexOf(item)
                    plants.splice(index, 1)
                    plants.push({"plant": product, "counter": item.counter + 1})
                    localStorage.setItem('cart', JSON.stringify({"total": cart.total + 1, "plants": plants}))
                } else {
                    localStorage.setItem('cart', JSON.stringify({
                        "total": cart.total + 1,
                        "plants": [...cart.plants, {"plant": product, "counter": 1}]
                    }))
                }
            } else {
                const newCart = {"total": 1, "plants": [{"plant": product, "counter": 1}]}
                localStorage.setItem('cart', JSON.stringify(newCart))
            }
        }
    }

    return (
        <div className={"productContainer"}>
            <div className={"productImageContainer"}>
                <img className={"productImage"} src={plantTest} alt={"image of a product"}/>
            </div>
            <div className={"productData"}>
                <div className={"productTagContainer"}>
                    <div className={"productTag sunTag"}>SUN</div>
                    <div className={"productTag dryTag"}>DRY</div>
                    <div className={"productTag petTag"}>PET</div>
                </div>

                <div className={"namePriceContainer"}>
                    <h5 className={"productTitle"}>{product.name}</h5>
                    <p className={"productPrice"}>{product.price}zł</p>
                </div>
                <div className={"btnContainer"}>
                    <Button onClick={handleAddToCart} className={"cartBtnLarge"} variant={"custom2"} size={"sm"}>Add to
                        cart</Button>
                    <Button onClick={handleAddToCart} className={"cartBtnSmall"} variant={"custom2"} size={"sm"}>
                        <FontAwesomeIcon
                            icon={faCartShopping}/>
                    </Button>

                </div>
            </div>
        </div>
    )
}