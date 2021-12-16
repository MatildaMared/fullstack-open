import React from "react";

const SearchFilter = ({ searchString, setSearchString }) => {
	return (
		<div>
			<span>find countries </span>
			<input
				type="text"
				value={searchString}
				onChange={(event) => setSearchString(event.target.value)}
      ></input>
		</div>
	);
};

export default SearchFilter;
