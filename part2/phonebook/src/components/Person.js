import React from "react";

const Person = ({ person, onDeleteHandler }) => {
	return (
		<p>
			{person.name} {person.number}
			<button
				onClick={() => {
					onDeleteHandler(person);
				}}
			>
				Delete
			</button>
		</p>
	);
};

export default Person;
