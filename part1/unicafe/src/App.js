import React, { useState } from "react";

const Button = ({ onClick, text }) => {
	return <button onClick={onClick}>{text}</button>;
};

const Average = ({ averageScore }) => {
	return <p>average {averageScore || "-"}</p>;
};

const Positive = ({ positivePercentage }) => {
	return <p>positive {positivePercentage || "-"} %</p>;
};

const Statistics = ({ good, neutral, bad }) => {
	const totalVotes = good + neutral + bad;
	const totalScore = good * 1 - bad * 1;
	const averageScore = totalScore / totalVotes;
	const positivePercentage = (good / totalVotes) * 100;

	return (
		<section>
			<h1>Statistics</h1>
			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
			<p>all {good + neutral + bad}</p>
			<Average averageScore={averageScore} />
			<Positive positivePercentage={positivePercentage} />
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
