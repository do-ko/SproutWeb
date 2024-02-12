import {Navigation} from "../Components/Home/Navigation";
import {Header} from "../Components/Home/Header";
import {ChooseUs} from "../Components/Home/ChooseUs";
import {Categories} from "../Components/Home/Categories";
export const HomePage = () => {
    return(
        <>
            <Navigation />
            <Header />
            <ChooseUs />
            <Categories />
        </>
    )
}