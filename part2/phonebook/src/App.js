import React, { useState } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [filteredPersons, setFilteredPersons] = useState(null);

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
