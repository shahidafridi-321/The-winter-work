import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export const UseRef = () => {
	const buttonRef = useRef(null);
	useEffect(() => {
		buttonRef.current.focus();
		buttonRef.current.textContent = "Hey i am different";
		setTimeout(() => {
			buttonRef.current.textContent = "Hi i am back to normal";
		}, 3000);
	}, []);
	return <button ref={buttonRef}>Click me!</button>;
};
