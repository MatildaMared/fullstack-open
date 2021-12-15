import React, { useState } from "react";

const Person = ({ name }) => {
	return <p>{name}</p>;
};

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");

	const addPersonHandler = (event) => {
		event.preventDefault();
		const newPerson = {
			name: newName,
		};
		setPersons([newPerson, ...persons]);
		setNewName("");
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<div>debug: {newName}</div>
			<form onSubmit={addPersonHandler}>
				<div>
					name:{" "}
					<input
						type="text"
						value={newName}
						onChange={(event) => setNewName(event.target.value)}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<Person key={person.name} name={person.name} />
			))}
		</div>
	);
};

export default App;
