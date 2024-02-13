import {Navigation} from "../Components/Home/Navigation";
import {Header} from "../Components/Home/Header";
import {ChooseUs} from "../Components/Home/ChooseUs";
import {Categories} from "../Components/Home/Categories";
import {TopPlants} from "../Components/Home/TopPlants";
export const HomePage = () => {
    return(
        <>
            <Navigation />
            <Header />
            <ChooseUs />
            <Categories />
            <TopPlants />
        </>
    )
}