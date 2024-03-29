import plantTest from "../../assets/topPlants/plant1.jpg";
import {Button} from "react-bootstrap";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCookies} from "react-cookie";
import {useContext} from "react";
import AuthContext from "../../context/AuthProvider";

export const CheckoutItem = ({product}) => {
    return(
        <div className={"cartProductContainer"}>
            <div className={"cartProductImageContainer"}>
                <img src={`http://localhost:8083/api/images/download/${product.plant.imgName}.jpg`} alt={"image of a product"}/>
            </div>
            <div className={"cartProductData"}>
                <h3 className={"cartProductName"}>{product.plant.name}</h3>
                <p>{product.plant.price}zł</p>
                <div className={"countContainer"}>
                    <p className={"itemCount"}>Quantity: {product.count}</p>
                </div>

            </div>
        </div>
    )
}