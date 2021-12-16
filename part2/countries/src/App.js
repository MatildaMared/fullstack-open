import axios from "axios";
import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import SearchFilter from "./components/SearchFilter";

function App() {
	const [searchString, setSearchString] = useState("");
	const [countries, setCountries] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [alertMessage, setAlertMessage] = useState("");

	useEffect(() => {
		axios.get("https://restcountries.com/v3.1/all").then((response) => {
			setCountries(response.data);
		});
	}, []);

	useEffect(() => {
		setAlertMessage("");
		setFilteredCountries([]);
		if (searchString.length > 0) {
			const filtered = countries.filter((country) => {
				return country.name.common
					.toLowerCase()
					.includes(searchString.toLowerCase());
			});
			if (filtered.length >= 10) {
				setAlertMessage("Too many matches, specify another filter");
				return;
			}
			setFilteredCountries(filtered);
		}
	}, [countries, searchString]);

	return (
		<div className="App">
			<SearchFilter
				searchString={searchString}
				setSearchString={setSearchString}
			/>
			{alertMessage && alertMessage}
      <Countries countries={filteredCountries} setSearchString={setSearchString} />
		</div>
	);
}

export default App;
