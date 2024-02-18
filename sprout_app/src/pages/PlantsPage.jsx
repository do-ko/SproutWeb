import {Navigation} from "../Components/Home/Navigation";
import {Form, Stack} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import PlantContext from "../context/PlantProvider";
import {SearchBar} from "../Components/Products/SearchBar";

export const PlantsPage = () => {
    const {getPlants} = useContext(PlantContext);
    const [searchResults, setSearchResults] = useState([])
    const [plants, setPlants] = useState([])
    // const [countries, setCountries] = useState()

    useEffect(()=> {
        getPlants().then(json => {
            setPlants(json)
            return json
        }).then(json => {
            setSearchResults(json)
        })
    }, [])


    return(
        <>
            <Navigation sticky={null} fixed={"top"}/>
            <div className={"productsContainer"}>
                <div className={"filterMenu"}>filterMenu</div>
                <Stack gap={3}>
                    <SearchBar products={plants} setSearchResult={setSearchResults}/>
                    <div className={"products"}>
                        {/*<div>test</div>*/}
                        {searchResults.map((plant, index) => {
                            return <div>{plant.name}</div>
                        })}
                    </div>
                </Stack>
            </div>
        </>
        // <div>plants</div>
    )
}