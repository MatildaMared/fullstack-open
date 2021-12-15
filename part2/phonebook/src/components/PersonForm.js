import React, { useState } from "react";

const PersonForm = ({ persons, setPersons }) => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const addPersonHandler = (event) => {
		event.preventDefault();
		const isCopy = persons.find(
			(person) =>
				person.name.toLowerCase().trim() === newName.toLowerCase().trim()
		);
		if (isCopy) {
			alert(`${newName} is already added to phonebook`);
		} else {
			const newPerson = {
				name: newName,
				number: newNumber,
			};
			setPersons([newPerson, ...persons]);
		}
		setNewName("");
		setNewNumber("");
  };
  
	return (
		<>
			<h2>Add new</h2>
			<form onSubmit={addPersonHandler}>
				<div>
					<label htmlFor="name">Name: </label>
					<input
						type="text"
						id="name"
						value={newName}
						onChange={(event) => setNewName(event.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="number">Number: </label>
					<input
						type="text"
						id="number"
						value={newNumber}
						onChange={(event) => setNewNumber(event.target.value)}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</>
	);
};

export default PersonForm;
