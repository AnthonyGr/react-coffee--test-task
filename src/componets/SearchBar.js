const SearchBar = (props) => {
    const {filterText, filterCountry, onFilterTextChange, onFilterCountryChange} = props;

    const handleFilterTextChange = (e) => {
        onFilterTextChange(e.target.value);
    }

    const handleFilterCountryChange = (e) => {
        onFilterCountryChange(e.target.getAttribute("data-country"));
    }

    return(
        <div className="filters">
            <div className="container">
                <div className="filters__row">
                    <div className="filters__search-block">
                        <div className="filters__label">Lookiing for</div>
                        <div className="filters__search">
                            <input 
                                type="search"
                                placeholder="start typing here..."
                                value={filterText}
                                onChange={handleFilterTextChange}/>
                        </div>
                    </div>
                    <div className="filters__filters-block">
                        <div className="filters__label">Or filter</div>
                        <button className="filters__btn-filter" data-country="Brazil" onClick={handleFilterCountryChange}>Brazil</button>
                        <button className="filters__btn-filter" data-country="Kenya" onClick={handleFilterCountryChange}>Kenya</button>
                        <button className="filters__btn-filter" data-country="Columbia" onClick={handleFilterCountryChange}>Columbia</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;