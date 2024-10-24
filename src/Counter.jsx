import { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0);

	const incremenr = () => {
		setCount(count + 1);
	};

	const incrementTwice = () => {
		setCount(count + 2);
	};
	
	return (
		<div>
			<span>Значение счетчика: {count}</span>

			<button onClick={incremenr}>Увеличить на 1</button>
			<button onClick={incrementTwice}>Увеличить на 2</button>

		</div>
	);
};