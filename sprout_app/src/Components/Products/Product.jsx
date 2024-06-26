import {Button} from "react-bootstrap";
import "./Product.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useCookies} from "react-cookie";
import axios from "../../api/axios";
import {useContext} from "react";
import AuthContext from "../../context/AuthProvider";

export const Product = ({product, type}) => {
    const [cookies] = useCookies(['token', 'cart']);
    const {setCart, setTotal} = useContext(AuthContext);

    const handleAddToCart = async () => {
        if (cookies.token) {
            try {
                const responseCart = await axios.post("/api/cart/add",
                    JSON.stringify({type: type, id: product.id}),
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
                const grounds = [...cart.grounds];

                if (type === "PLANT") {
                    if (plants.some(item => item.plant.id === product.id)) {
                        //     if product already in cart
                        const item = plants.filter(item => item.plant.id === product.id)[0]
                        const index = plants.indexOf(item)
                        plants.splice(index, 1)
                        plants.push({"plant": product, "count": item.count + 1})
                        localStorage.setItem('cart', JSON.stringify({
                            "total": cart.total + 1,
                            "plants": plants,
                            "grounds": grounds
                        }))
                    } else {
                        localStorage.setItem('cart', JSON.stringify({
                            "total": cart.total + 1,
                            "plants": [...cart.plants, {"plant": product, "count": 1}],
                            "grounds": grounds
                        }))
                    }
                    setTotal(cart.total + 1)
                } else if (type === "GROUND") {
                    if (grounds.some(item => item.ground.id === product.id)) {
                        //     if product already in cart
                        const item = grounds.filter(item => item.ground.id === product.id)[0]
                        const index = grounds.indexOf(item)
                        grounds.splice(index, 1)
                        grounds.push({"ground": product, "count": item.count + 1})
                        localStorage.setItem('cart', JSON.stringify({
                            "total": cart.total + 1,
                            "plants": plants,
                            "grounds": grounds
                        }))
                    } else {
                        localStorage.setItem('cart', JSON.stringify({
                            "total": cart.total + 1,
                            "plants": plants,
                            "grounds": [...cart.grounds, {"ground": product, "count": 1}]
                        }))
                    }
                    setTotal(cart.total + 1)
                }

            } else {
                let newCart = {"total" : 0, "plants": [], "grounds": []}
                if (type === "PLANT") {
                    newCart = {"total": 1, "plants": [{"plant": product, "count": 1}], "grounds": []}
                } else if (type === "GROUND"){
                    newCart = {"total": 1, "plants": [], "grounds": [{"ground": product, "count": 1}]}
                }
                localStorage.setItem('cart', JSON.stringify(newCart))
                setTotal(1)
            }
            console.log(JSON.parse(localStorage.getItem('cart')))
            // localStorage.removeItem('cart')
            // setTotal(0)
        }
    }

    return (
        <div className={"productContainer"}>
            <div className={"productImageContainer"}>
                <img className={"productImage"} src={`http://localhost:8083/api/images/download/${product.imgName}.jpg`}
                     alt={"image of a product"}/>
            </div>
            <div className={"productData"}>
                <div className={"productTagContainer"}>
                    {product.tags.length === 0 ? <div className={"productTagEmpty"}/> :
                        product.tags.map((tag) => {
                            return <div className={`productTag ${tag.tag.tagName}Tag`}>{tag.tag.tagName}</div>
                        })
                    }
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