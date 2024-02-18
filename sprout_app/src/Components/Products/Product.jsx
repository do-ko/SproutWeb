import {Button} from "react-bootstrap";
import plantTest from "../../assets/topPlants/plant1.jpg"
import "./Product.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useCookies} from "react-cookie";

export const Product = ({product}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'cart']);

    const handleAddToCart = () => {
        if (cookies.cart) {
            setCookie('cart', [...cookies.cart, product], {expires: (new Date(Date.now() + 86400000))})
        } else setCookie('cart', [product],{expires: (new Date(Date.now() + 86400000))})
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
                    <Button className={"cartBtnSmall"} variant={"custom2"} size={"sm"}> <FontAwesomeIcon
                        icon={faCartShopping}/>
                    </Button>

                </div>
            </div>
        </div>
    )
}