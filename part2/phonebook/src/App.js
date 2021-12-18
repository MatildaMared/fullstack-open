import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import personsService from "./services/persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [filteredPersons, setFilteredPersons] = useState(null);
	const [filterString, setFilterString] = useState("");

	useEffect(() => {
		personsService.getAll().then((persons) => {
			setPersons(persons);
			setFilteredPersons(persons);
		});
	}, []);

	useEffect(() => {
		setFilteredPersons(persons);
		setFilterString("");
	}, [persons]);

	const deletePerson = ({ id, name }) => {
		if (window.confirm(`Do you really want to delete ${name}?`)) {
			personsService.deletePerson(id).then(() => {
				setPersons(persons.filter((person) => person.id !== id));
			});
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter
				filterString={filterString}
				setFilterString={setFilterString}
				persons={persons}
				setFilteredPersons={setFilteredPersons}
			/>
			<PersonForm setPersons={setPersons} persons={persons} />
			<h2>Numbers</h2>
			{filteredPersons &&
				filteredPersons.map((person) => (
					<Person
						key={person.name}
						person={person}
						onDeleteHandler={deletePerson}
					/>
				))}
		</div>
	);
};

export default App;
