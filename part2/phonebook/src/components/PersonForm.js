import React, { useState } from "react";
import personsService from "./../services/persons";

const PersonForm = ({ persons, setPersons }) => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const addPersonHandler = (event) => {
		event.preventDefault();
		const newPerson = {
			name: newName,
			number: newNumber,
		};
		const isCopy = persons.find(
			(person) =>
				person.name.toLowerCase().trim() === newName.toLowerCase().trim()
		);
		if (isCopy) {
			if (
				window.confirm(
					`${newName} is already added to phonebook, replace old number with a new one?`
				)
			) {
				personsService
					.updatePerson(isCopy.id, newPerson)
					.then((returnedPerson) => {
						setPersons(
							persons.map((person) =>
								person.id === isCopy.id ? returnedPerson : person
							)
						);
					});
			}
		} else {
			personsService.createPerson(newPerson).then((returnedPerson) => {
				setPersons(persons.concat(returnedPerson));
			});
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
