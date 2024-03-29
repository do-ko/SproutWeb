import {Navigation} from "../Components/Home/Navigation";
import {Col, Form, Row, Stack} from "react-bootstrap";
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
    const [wetFilter, setWetFilter] = useState(false)
    const [petFilter, setPetFilter] = useState(false)
    const [sunFilter, setSunFilter] = useState(false)
    const [dryFilter, setDryFilter] = useState(false)

    useEffect(() => {
        getPlants().then(json => {
            setPlants(json)
            return json
        }).then(json => {
            setSearchResults(json)
        })
    }, [])

    useEffect(() => {
        let filterList = []
        if (wetFilter) filterList.push('wet')
        if (petFilter) filterList.push('pet')
        if (sunFilter) filterList.push('sun')
        if (dryFilter) filterList.push('dry')


        if (filterList.length !== 0){
            console.log(filterList)
            // setSearchResults(plants)
            const results = plants.filter((product) => {
                const tagNames = product.tags.map((tag) => tag.tag.tagName)
                if (filterList.every(t => tagNames.includes(t))){
                    return product
                }
            })
            // console.log(results)
            setSearchResults(results)
        } else setSearchResults(plants)

    }, [wetFilter, petFilter, dryFilter, sunFilter])

    const handleFilter = () => {
        setFilter(!filter)
    }

    return (
        <>
            <Navigation sticky={null} fixed={"top"}/>
            <div className={"productsContainer"}>
                <div className={"filterMenu"}>
                    <h3>Filters</h3>
                    <Form>
                        <div key={`checkbox`} className="mb-3">
                            <Form.Check
                                inline
                                label="DRY"
                                name="group1"
                                type={"checkbox"}
                                id={`inline-checkbox-1`}
                                onChange={() => setDryFilter(!dryFilter)}
                            />
                            <Form.Check
                                inline
                                label="SUN"
                                name="group1"
                                type={"checkbox"}
                                id={`inline-checkbox-2`}
                                onChange={() => setSunFilter(!sunFilter)}
                            />
                            <Form.Check
                                inline
                                label="WET"
                                name="group1"
                                type={"checkbox"}
                                id={`inline-checkbox-3`}
                                onChange={() => setWetFilter(!wetFilter)}
                            />
                            <Form.Check
                                inline
                                label="PET"
                                name="group1"
                                type={"checkbox"}
                                id={`inline-checkbox-4`}
                                onChange={() => setPetFilter(!petFilter)}
                            />
                        </div>
                    </Form>
                </div>
                <Stack>
                    <div className={"searchFilterContainer"}>
                        <SearchBar products={plants} setSearchResult={setSearchResults}/>
                        {/*<Button variant="custom">Primary</Button>*/}
                        <FontAwesomeIcon onClick={handleFilter} icon={faFilter} className={"filterButton"} size={"lg"}/>
                        {filter ? <div className={"filterMenuSmall"}>
                            <Form>
                                <div key={`checkbox`}>
                                    <Form.Check
                                        inline
                                        label="DRY"
                                        name="group1"
                                        type={"checkbox"}
                                        id={`inline-checkbox-1`}
                                        checked={dryFilter}
                                        onChange={() => setDryFilter(!dryFilter)}
                                    />
                                    <Form.Check
                                        inline
                                        label="SUN"
                                        name="group1"
                                        type={"checkbox"}
                                        id={`inline-checkbox-2`}
                                        checked={sunFilter}
                                        onChange={() => setSunFilter(!sunFilter)}
                                    />
                                    <Form.Check
                                        inline
                                        label="WET"
                                        name="group1"
                                        type={"checkbox"}
                                        id={`inline-checkbox-3`}
                                        checked={wetFilter}
                                        onChange={() => setWetFilter(!wetFilter)}
                                    />
                                    <Form.Check
                                        inline
                                        label="PET"
                                        name="group1"
                                        type={"checkbox"}
                                        id={`inline-checkbox-4`}
                                        checked={petFilter}
                                        onChange={() => setPetFilter(!petFilter)}
                                    />
                                </div>
                            </Form>
                        </div> : <></>}

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
    )
}