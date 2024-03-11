import plantTest from "../../assets/topPlants/plant1.jpg";
import {Button} from "react-bootstrap";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCookies} from "react-cookie";
import {useContext} from "react";
import AuthContext from "../../context/AuthProvider";

export const CartItem = ({product, setCurrentCart, setTotalPrice}) => {
    const [cookies] = useCookies(['token', 'cart']);
    const {setCart, setTotal} = useContext(AuthContext);

    const handleDecreaseCount = () => {
        console.log("decrease")
        if (cookies.token){
        //     if logged in
        } else {
        // if local cart used
            const cart = JSON.parse(localStorage.getItem('cart'))
            let tempTotal = 0
            cart.plants.forEach((item) => {
                if (item.plant.id === product.plant.id){
                    if (item.count === 1){
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

    const handleIncreaseCount = () => {
        console.log("increase")
        if (cookies.token){
            //     if logged in
        } else {
            // if local cart used
            const cart = JSON.parse(localStorage.getItem('cart'))
            let tempTotal = 0
            cart.plants.forEach((item) => {
                if (item.plant.id === product.plant.id){
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
                <img src={plantTest} alt={"image of a product"}/>
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