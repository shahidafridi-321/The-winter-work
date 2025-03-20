/* 
useRef hook is used for DOM manipulation in react just as we do in vanila javascript, the use of useRef hook is similar
to useState but the diffrenece is the useRef do not triggers re-render unlike useState. it is used to do something with a dom element within react such as animations,styles,or something else
 */

import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export const UseRef = () => {
	const buttonRef = useRef(null);
	const data = useRef(0);
	console.log(data);

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
			<button ref={buttonRef} onClick={() => data.current++}>
				Click me!
			</button>
			<p>{data.current}</p>
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
