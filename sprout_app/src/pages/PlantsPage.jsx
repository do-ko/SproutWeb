import {Navigation} from "../Components/Home/Navigation";
import {Button, Col, Row, Stack} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import PlantContext from "../context/PlantProvider";
import {SearchBar} from "../Components/Products/SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";

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
                <Stack gap={3}>
                    <div className={"searchFilterContainer"}>
                        <SearchBar products={plants} setSearchResult={setSearchResults}/>
                        {/*<Button variant="custom">Primary</Button>*/}
                        <FontAwesomeIcon onClick={handleFilter} icon={faFilter} className={"filterButton"} size={"lg"}/>
                        {filter ? <div className={"filterMenuSmall"}>Filter menu!!</div> : <></>}

                    </div>
                    <div className={"products"}>
                        <Row style={{width: "auto", backgroundColor: "fuchsia", margin: 16}}>
                            <Col style={{backgroundColor: "darkcyan", padding: 8, height: 200}}
                                 className="col-12 col-sm-6 col-lg-4">s1</Col>
                            <Col style={{backgroundColor: "chocolate", padding: 8, height: 200}}
                                 className="col-12 col-sm-6 col-lg-4">s2</Col>
                            <Col style={{backgroundColor: "goldenrod", padding: 8, height: 200}}
                                 className="col-12 col-sm-6 col-lg-4">s3</Col>
                            <Col style={{backgroundColor: "goldenrod", padding: 8, height: 200}}
                                 className="col-12 col-sm-6 col-lg-4">s3</Col>
                            <Col style={{backgroundColor: "goldenrod", padding: 8, height: 200}}
                                 className="col-12 col-sm-6 col-lg-4">s3</Col>
                            <Col style={{backgroundColor: "goldenrod", padding: 8, height: 200}}
                                 className="col-12 col-sm-6 col-lg-4">s3</Col>
                            <Col style={{backgroundColor: "goldenrod", padding: 8, height: 200}}
                                 className="col-12 col-sm-6 col-lg-4">s3</Col>
                            <Col style={{backgroundColor: "goldenrod", padding: 8, height: 200}}
                                 className="col-12 col-sm-6 col-lg-4">s3</Col>

                            {/*<Col className="col-sm-5">s</Col>*/}
                        </Row>
                    </div>

                    {/*<div className={"products"}>*/}
                    {/*    {searchResults.map((plant, index) => {*/}
                    {/*        return <div>{plant.name}</div>*/}
                    {/*    })}*/}
                    {/*</div>*/}
                </Stack>
            </div>
        </>
        // <div>plants</div>
    )
}