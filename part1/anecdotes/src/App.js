import React, { useState, useEffect } from "react";

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
	];

	const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);

	const [mostVotesIndex, setMostVotesIndex] = useState(null);

	const [selected, setSelected] = useState(0);

	useEffect(() => {
		setMostVotesIndex(votes.indexOf(Math.max(...votes)));
	}, [votes, mostVotesIndex]);

	const clickHandler = () => {
		setSelected(Math.floor(Math.random() * anecdotes.length));
	};

	const onVoteHandler = () => {
		const copy = [...votes];
		copy[selected]++;
		setVotes(copy);
	};

	return (
		<div>
			<section>
				<h1>Anecdote of the day</h1>
				<p>{anecdotes[selected]}</p>
				<p> has {votes[selected]} votes</p>
				<button onClick={onVoteHandler}>vote</button>
				<button onClick={clickHandler}>Next Anecdote</button>
			</section>
			<section>
				{Math.max(...votes) !== 0 && (
					<>
						<h1>Anecdote with most votes</h1>
						<p>{anecdotes[mostVotesIndex]}</p>
						<p>has {votes[mostVotesIndex]} votes</p>
					</>
				)}
			</section>
		</div>
	);
};

export default App;
