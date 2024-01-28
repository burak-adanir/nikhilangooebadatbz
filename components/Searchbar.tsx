"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minYear, setMinYear] = useState("");

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    // Validation and other logic...
    updateSearchParams(
      model.toLowerCase(),
      manufacturer.toLowerCase(),
      maxPrice,
      minYear
    );
  };

  const updateSearchParams = (model, manufacturer, maxPrice, minYear) => {
    const searchParams = new URLSearchParams(window.location.search);

    // Update the search parameters for model, manufacturer, maxPrice, and minYear
    model ? searchParams.set("model", model) : searchParams.delete("model");
    manufacturer
      ? searchParams.set("manufacturer", manufacturer)
      : searchParams.delete("manufacturer");
    maxPrice
      ? searchParams.set("maxPrice", maxPrice)
      : searchParams.delete("maxPrice");
    minYear
      ? searchParams.set("minYear", minYear)
      : searchParams.delete("minYear");

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input__full"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <input
          type="number"
          name="maxPrice"
          value={maxPrice}

          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max Price"
          className="searchbar__input__full"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <input
          type="number"
          name="minYear"
          value={minYear}
          onChange={(e) => setMinYear(e.target.value)}
          placeholder="Min Year"
          className="searchbar__input"
        />
      </div>

      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
