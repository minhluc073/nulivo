


export default function SearchBox(){
    return (
        <form className="search-box">
            <input type="text" placeholder="Search for assets..."/>
            <button className="tf-btn btn-search">
                <i className="icon icon-search"></i>
                <span className="text">Search</span>
            </button>
        </form>
    )
}