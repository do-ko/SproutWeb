import {Navigation} from "../Components/Home/Navigation";
import {Col, Row, Stack} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import PlantContext from "../context/PlantProvider";
import {SearchBar} from "../Components/Products/SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {Product} from "../Components/Products/Product";

export const PlantsPage = () => {
    const {getPlants} = useContext(PlantContext);
    const [searchResults, setSearchResults] = useState([])
    const [plants, setPlants] = useState([])
    const [filter, setFilter] = useState(false)
    // const [countries, setCountries] = useState()

    useEffect(() => {
        getPlants().then(json => {
            setPlants(json)
            return json
        }).then(json => {
            setSearchResults(json)
        })
    }, [])

    const handleFilter = () => {
        setFilter(!filter)
    }

    return (
        <>
            <Navigation sticky={null} fixed={"top"}/>
            <div className={"productsContainer"}>
                <div className={"filterMenu"}>filterMenu</div>
                <Stack>
                    <div className={"searchFilterContainer"}>
                        <SearchBar products={plants} setSearchResult={setSearchResults}/>
                        {/*<Button variant="custom">Primary</Button>*/}
                        <FontAwesomeIcon onClick={handleFilter} icon={faFilter} className={"filterButton"} size={"lg"}/>
                        {filter ? <div className={"filterMenuSmall"}>Filter menu!!</div> : <></>}

                    </div>
                    <div className={"products"}>
                        <Row style={{width: "auto", margin: 16}}>
                            {searchResults.map((plant, index) => {
                                return <Col className="productColumn col-12 col-sm-6 col-lg-4 col-xl-3">
                                    <Product product={plant}/>
                                </Col>
                            })}
                        </Row>

                    </div>
                </Stack>
            </div>
        </>
        // <div>plants</div>
    )
}