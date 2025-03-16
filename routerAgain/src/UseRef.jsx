import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export const UseRef = () => {
	const buttonRef = useRef(null);
	useEffect(() => {
		buttonRef.current.focus();
		buttonRef.current.textContent = "Hey i am different";
		setTimeout(() => {
			buttonRef.current.textContent = "Hey i am back to normal";
		}, 10000);
	}, []);
	return (
		<div>
			<Para />
			<button ref={buttonRef}>Click me!</button>
		</div>
	);
};

const Para = () => {
	const paraRef = useRef(null);
	useEffect(() => {
		paraRef.current.innerHTML =
			"<p>This content is going to change in 3 seconds!</p>";
		setTimeout(() => {
			paraRef.current.innerHTML =
				"<h1>See i am Changed to Level 1 heading</h1>";
		}, 3000);
	}, []);
	return <div ref={paraRef}></div>;
};
