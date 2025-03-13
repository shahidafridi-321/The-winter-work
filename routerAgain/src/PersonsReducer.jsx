import React, { useReducer } from "react";

export const PersonsReducer = () => {
	const someData = [{ name: "shahid", email: "shahid@gmail.com" }];

	const [state, dispatch] = useReducer(reducer, {
		formData: {
			name: "",
			email: "",
			password: "",
		},
		users: [],
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		dispatch({
			type: "update_details",
			name,
			value,
		});
	};
	console.log(state);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: "save_user",
			users: someData,
		});
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					Name :{" "}
					<input
						type="text"
						name="name"
						id=""
						value={state.formData.name}
						onChange={handleInputChange}
					/>
				</div>

				<div>
					Email :{" "}
					<input
						type="email"
						name="email"
						value={state.formData.email}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					Password :{" "}
					<input
						type="password"
						name="password"
						value={state.formData.password}
						onChange={handleInputChange}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
			<div>
				{state.users.map((person) => (
					<>
						<p>Name: {person.name}</p>
						<p>Password: {person.email}</p>
					</>
				))}
			</div>
		</div>
	);
};

const reducer = (state, action) => {
	if (action.type === "update_details") {
		return {
			...state,
			formData: { ...state.formData, [action.name]: action.value },
		};
	} else if (action.type === "save_user") {
		return {
			...state,
			users: [...state.users, state.formData],
			formData: { ...state.formData, name: "", email: "", password: "" },
		};
	}
};
