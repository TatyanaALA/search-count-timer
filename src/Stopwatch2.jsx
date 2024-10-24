// собственный хук, Stopwatch2 можно использовать в любых других компонентах.

import { useEffect, useState } from "react";

export const Stopwatch2 = () => {
	const seconds = useStopwatch();

	return <div>Прошло {seconds} секунд</div>;
};

function useStopwatch() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const timerID = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);

		return () => {
			clearInterval(timerID);
		}

	}, []);
	
	return seconds
};