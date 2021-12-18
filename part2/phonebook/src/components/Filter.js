import React, { useEffect } from "react";

const Filter = ({ filterString, setFilterString, persons, setFilteredPersons }) => {

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
