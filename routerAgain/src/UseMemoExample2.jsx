import React, { useState, useMemo, memo } from "react";

export const UseMemoExample2 = () => {
	const [counter, setCounter] = useState(0);
	const handleClick = () => {
		setCounter((prev) => prev + 1);
	};

	const memoizeHandleClick = useMemo(() => handleClick, []);

	/* useMemo(
		() => () => setCounter((prev) => prev + 1),
		[]
	); */

	return (
		<div>
			<h1>{counter}</h1>
			<ButtonComponent onClick={memoizeHandleClick}>Click Me</ButtonComponent>
		</div>
	);
};

const ButtonComponent = memo(({ children, onClick }) => {
	console.log("renders");

	let i = 0;
	let j = 0;
	let ITERATION_COUNT = 10000;
	while (i < ITERATION_COUNT) {
		while (j < ITERATION_COUNT) {
			j += 1;
		}
		i += 1;
		j = 0;
	}
	return (
		<button type="button" onClick={onClick}>
			{children}
		</button>
	);
});
