import { useReducer } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "increament_count":
			return { count: state.count + 1 };
		case "decreament_count":
			return { count: state.count - 1 };
		case "set_count":
			return { count: action.value };
		default:
			throw Error("Unknown error" + action.type);
	}
};

export const Reducer = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	const handleIncrement = () => {
		dispatch({ type: "increament_count" });
	};
	const handleDecreament = () => {
		dispatch({ type: "decreament_count" });
	};
	const handleSetValue = () => {
		dispatch({ type: "set_count", value: 0 });
	};
	return (
		<div>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecreament}>Decrement</button>
			<button onClick={handleSetValue}>Set counter</button>
			<p>The value is {state.count}</p>
		</div>
	);
};
