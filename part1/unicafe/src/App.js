import React, { useState } from "react";

const Button = ({ onClick, text }) => {
	return <button onClick={onClick}>{text}</button>;
};

const StatisticsLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	const totalVotes = good + neutral + bad;
	const totalScore = good * 1 - bad * 1;
	const averageScore = totalScore / totalVotes;
	const positivePercentage = (good / totalVotes) * 100;

	if (totalVotes === 0) {
		return (
			<section>
				<h1>Statistics</h1>
				<p>No feedback given</p>
			</section>
		);
	}

	return (
		<section>
			<h1>Statistics</h1>
			<table>
				<StatisticsLine text="good" value={good} />
				<StatisticsLine text="neutral" value={neutral} />
				<StatisticsLine text="bad" value={bad} />
				<StatisticsLine text="average" value={averageScore} />
				<StatisticsLine text="positive" value={`${positivePercentage} %`} />
			</table>
		</section>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const goodClickHandler = () => {
		setGood(good + 1);
	};

	const neutralClickHandler = () => {
		setNeutral(neutral + 1);
	};

	const badClickHandler = () => {
		setBad(bad + 1);
	};

	return (
		<div>
			<section>
				<h1>Give Feedback</h1>
				<Button onClick={goodClickHandler} text="good" />
				<Button onClick={neutralClickHandler} text="neutral" />
				<Button onClick={badClickHandler} text="bad" />
			</section>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
