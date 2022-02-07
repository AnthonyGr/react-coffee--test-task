import { useState } from "react";

import GoodsList from './GoodsList';
import SearchBar from "./SearchBar";


const FilterableGoodsCatalog = () => {

    const GOODS = [
        {id: 1, name: 'AROMISTICO Coffee 1 kg', thumbnail: '/img/best-3.png', country: 'Brazil', price: '10.73$'},
        {id: 2, name: 'Google', thumbnail: '/img/best-3.png', country: 'Kenya', price: '15.99$'},
        {id: 3, name: 'Yandex', thumbnail: '/img/best-3.png', country: 'Columbia', price: '6.99$'},
        {id: 4, name: 'Bing', thumbnail: '/img/best-3.png', country: 'Brazil', price: '10.73$'},
        {id: 5, name: 'AROMISTICO Coffee 1 kg', thumbnail: '/img/best-3.png', country: 'Brazil', price: '15.99$'},
        {id: 6, name: 'AROMISTICO Coffee 1 kg', thumbnail: '/img/best-3.png', country: 'Brazil', price: '6.99$'},
      ];

    const [filterText, setFilterText] = useState('');
    const [filterCountry, setFilterCountry] = useState('');

    const handleFilterTextChange = (filterText) => {
        setFilterText(filterText);
        setFilterCountry('');
    }

    const handleFilterCountyChange = (filterCountry) => {
        setFilterCountry(filterCountry);
    }

    return (
        <>
            <SearchBar 
                filterText={filterText}
                filterCountry={filterCountry}
                onFilterTextChange={handleFilterTextChange}
                onFilterCountryChange={handleFilterCountyChange}/>
            <GoodsList goods={GOODS} filterText={filterText} filterCountry={filterCountry}/>
        </>
    )
}

export default FilterableGoodsCatalog;