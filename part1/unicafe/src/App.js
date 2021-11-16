import React, { useState } from "react";

const Button = ({ onClick, text }) => {
	return <button onClick={onClick}>{text}</button>;
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
			<section>
				<h1>Statistics</h1>
				<p>good {good}</p>
				<p>neutral {neutral}</p>
				<p>bad {bad}</p>
			</section>
		</div>
	);
};

export default App;
