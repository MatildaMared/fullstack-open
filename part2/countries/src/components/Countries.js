import React from "react";
import Country from "./Country";

const Countries = ({ countries, setSearchString }) => {
	const onShowHandler = (countryName) => {
		setSearchString(countryName);
	};
	return (
		<div>
			{countries.length > 1 &&
				countries.map((country) => (
					<p key={country.name.common}>
						{country.name.common}{" "}
						<button onClick={() => onShowHandler(country.name.common)}>
							show
						</button>
					</p>
				))}
			{countries.length === 1 && <Country country={countries[0]} />}
		</div>
	);
};

export default Countries;
