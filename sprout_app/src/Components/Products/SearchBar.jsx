import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export const SearchBar = ({products, setSearchResult}) => {
    const handleSubmit = (e) => e.preventDefault();
    const handleChange = (e) => {
        if (!e.target.value) {
            return setSearchResult(products)
        }

        const results = products.filter((product) => {
            return product.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        console.log(results)
        setSearchResult(results)
    }

    return (
        <div className={"searchContainer"}>
            <form className={"search"} onSubmit={handleSubmit}>
                <input className={"searchInput"} type={"text"} id={"search"}
                       onChange={handleChange}/>
                <button className={"searchButton"}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </form>
        </div>
    )
}