const SearchBar = (props) => {
    const {filterText, filterCountry, onFilterTextChange, onFilterCountryChange} = props;

    const handleFilterTextChange = (e) => {
        onFilterTextChange(e.target.value);
    }

    const handleFilterCountryChange = (e) => {
        onFilterCountryChange(e.target.getAttribute("data-country"));
    }

    return(
        <div class="filters">
            <div class="container">
                <div class="filters__row">
                    <div class="filters__search-block">
                        <div class="filters__label">Lookiing for</div>
                        <div class="filters__search">
                            <input 
                                type="search"
                                placeholder="start typing here..."
                                value={filterText}
                                onChange={handleFilterTextChange}/>
                        </div>
                    </div>
                    <div class="filters__filters-block">
                        <div class="filters__label">Or filter</div>
                        <button class="filters__btn-filter" data-country="Brazil" onClick={handleFilterCountryChange}>Brazil</button>
                        <button class="filters__btn-filter" data-country="Kenya" onClick={handleFilterCountryChange}>Kenya</button>
                        <button class="filters__btn-filter" data-country="Columbia" onClick={handleFilterCountryChange}>Columbia</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;