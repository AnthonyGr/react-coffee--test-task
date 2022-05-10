import { useState } from "react";

import GoodsList from "./GoodsList";
import SearchBar from "./SearchBar";

const GOODS = [
  {
    id: 1,
    name: "Fire coffee",
    thumbnail: "/img/best-3.png",
    country: "Brazil",
    price: "10.73$",
  },
  {
    id: 2,
    name: "Awesome coffee",
    thumbnail: "/img/best-3.png",
    country: "Kenya",
    price: "15.99$",
  },
  {
    id: 3,
    name: "So-so coffe",
    thumbnail: "/img/best-3.png",
    country: "Columbia",
    price: "6.99$",
  },
  {
    id: 4,
    name: "Best coffee",
    thumbnail: "/img/best-3.png",
    country: "Brazil",
    price: "10.73$",
  },
  {
    id: 5,
    name: "Tasteless coffee",
    thumbnail: "/img/best-3.png",
    country: "Brazil",
    price: "15.99$",
  },
  {
    id: 6,
    name: "Your favorite coffee",
    thumbnail: "/img/best-3.png",
    country: "Brazil",
    price: "6.99$",
  },
];

const FilterableGoodsCatalog = () => {
  const [filterText, setFilterText] = useState("");
  const [filterCountry, setFilterCountry] = useState("");

  const handleFilterTextChange = (filterText) => {
    setFilterText(filterText);
    setFilterCountry("");
  };

  const handleFilterCountyChange = (filterCountry) => {
    setFilterCountry(filterCountry);
  };

  return (
    <>
      <SearchBar
        filterText={filterText}
        filterCountry={filterCountry}
        onFilterTextChange={handleFilterTextChange}
        onFilterCountryChange={handleFilterCountyChange}
      />
      <GoodsList
        goods={GOODS}
        filterText={filterText}
        filterCountry={filterCountry}
      />
    </>
  );
};

export default FilterableGoodsCatalog;
