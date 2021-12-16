import axios from "axios";
import React, { useState, useEffect } from "react";

const Country = ({ country }) => {
	const [weatherData, setWeatherData] = useState(null);
	const api_key = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`
			)
			.then((response) => {
				console.log(response.data);
				setWeatherData(response.data);
			});
	}, []);

	return (
		<section>
			<h1>{country.name.common}</h1>
			<p>capital {country.capital}</p>
			<p>population {country.population}</p>
			<h2>languages</h2>
			<ul>
				{Object.keys(country.languages).map((key) => (
					<li key={country.languages[key]}>{country.languages[key]}</li>
				))}
			</ul>
			<img src={country.flags.png} alt={`${country.name.common} flag`} />
			{weatherData && (
				<div>
					<h2>Weather in {country.capital}</h2>
					<p>
						<strong>temperature: </strong>
						{weatherData.main.temp} Celsius
					</p>
					<img
						src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
						alt={weatherData.weather[0].description}
					/>
					<p>
						<strong>wind: </strong>
						{weatherData.wind.speed} m/s
					</p>
				</div>
			)}
		</section>
	);
};

export default Country;
