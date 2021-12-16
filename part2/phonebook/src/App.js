import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [filteredPersons, setFilteredPersons] = useState(null);

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((response) => {
			setPersons(response.data);
		});
	}, []);

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter persons={persons} setFilteredPersons={setFilteredPersons} />
			<PersonForm setPersons={setPersons} persons={persons} />
			<h2>Numbers</h2>
			{filteredPersons &&
				filteredPersons.map((person) => (
					<Person key={person.name} name={person.name} number={person.number} />
				))}
		</div>
	);
};

export default App;
