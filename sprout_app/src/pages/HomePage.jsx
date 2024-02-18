import {Navigation} from "../Components/Home/Navigation";
import {Header} from "../Components/Home/Header";
import {ChooseUs} from "../Components/Home/ChooseUs";
import {Categories} from "../Components/Home/Categories";
import {TopPlants} from "../Components/Home/TopPlants";
import {Reviews} from "../Components/Home/Reviews";
import {HomeFooter} from "../Components/Home/HomeFooter";
import {useCookies} from "react-cookie";

export const HomePage = () => {
    const [cookies, setCookie] = useCookies(['token','test']);
    return(
        <>
            <Navigation sticky={"top"} fixed={null}/>
            <Header />
            <ChooseUs />
            <Categories />
            <TopPlants />
            <Reviews />
            <HomeFooter />
        </>
    )
}