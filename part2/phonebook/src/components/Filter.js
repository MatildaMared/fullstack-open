import React, { useState, useEffect } from "react";

const Filter = ({ persons, setFilteredPersons }) => {
	const [filterString, setFilterString] = useState("");

	useEffect(() => {
		if (filterString.length >= 1) {
			setFilteredPersons(
				persons.filter((person) => {
					return person.name.toLowerCase().includes(filterString.toLowerCase());
				})
			);
		} else {
			setFilteredPersons([...persons]);
		}
	}, [filterString, persons]);

	const filterInputHandler = (event) => {
		setFilterString(event.target.value);
	};

	return (
		<div>
			<span>Filter shown with: </span>
			<input type="text" value={filterString} onChange={filterInputHandler} />
		</div>
	);
};

export default Filter;
