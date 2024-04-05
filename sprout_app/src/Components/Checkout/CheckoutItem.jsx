export const CheckoutItem = ({product, type}) => {
    return (
        <div className={"cartProductContainer"}>
            <div className={"cartProductImageContainer"}>
                {type === "PLANT" ? <img src={`http://localhost:8083/api/images/download/${product.plant.imgName}.jpg`}
                                         alt={"image of a product"}/> : <></>}
                {type === "GROUND" ?
                    <img src={`http://localhost:8083/api/images/download/${product.ground.imgName}.jpg`}
                         alt={"image of a product"}/> : <></>}

            </div>
            <div className={"cartProductData"}>
                {type === "PLANT" ? <h3 className={"cartProductName"}>{product.plant.name}</h3> : <></>}
                {type === "GROUND" ? <h3 className={"cartProductName"}>{product.ground.name}</h3> : <></>}

                {type === "PLANT" ? <p>{product.plant.price}zł</p> : <></>}
                {type === "GROUND" ? <p>{product.ground.price}zł</p> : <></>}
                <div className={"countContainer"}>
                    <p className={"itemCount"}>Quantity: {product.count}</p>
                </div>

            </div>
        </div>
    )
}