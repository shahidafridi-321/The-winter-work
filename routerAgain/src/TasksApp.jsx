import React, { useReducer, useState } from "react";

export const TasksApp = () => {
	const initialTask = [
		{
			id: 1,
			text: "Run 20 km today",
			done: false,
		},
	];

	const [inputValue, setInputValue] = useState("");
	const [tasks, dispatch] = useReducer(reducer, initialTask);
	console.log(tasks);

	const handleAddTask = (e) => {
		e.preventDefault();
		dispatch({
			type: "added",
			text: inputValue,
		});
		setInputValue("");
	};

	const handleTaskDone = (id) => {
		dispatch({
			type: "changed",
			id: id,
		});
	};

	const handleTaskDelete = (id) => {
		dispatch({
			type: "deleted",
			id: id,
		});
	};

	const handleValueChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div>
			<h1>Prague itinerary</h1>
			<AddTask
				addTask={handleAddTask}
				onValueChange={handleValueChange}
				inputValue={inputValue}
			/>
			<TasksList
				tasks={tasks}
				taskDone={handleTaskDone}
				taskDelete={handleTaskDelete}
			/>
		</div>
	);
};

const AddTask = ({ addTask, onValueChange, inputValue }) => {
	return (
		<form>
			<input
				type="text"
				name=""
				id=""
				placeholder="Add new task"
				onChange={onValueChange}
				value={inputValue}
			/>
			<button onClick={addTask}>Add</button>
		</form>
	);
};

const TasksList = ({ tasks, taskDone, taskDelete }) => {
	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id} className="items">
					<input
						type="checkbox"
						checked={task.done}
						onChange={() => taskDone(task.id)}
					/>
					<p>{task.text}</p>

					<button onClick={() => taskDelete(task.id)}>Delete</button>
				</li>
			))}
		</ul>
	);
};

let nextId = 2;

const reducer = (tasks, action) => {
	switch (action.type) {
		case "added": {
			return [...tasks, { id: ++nextId, text: action.text, done: false }];
		}
		case "changed": {
			return tasks.map((task) =>
				task.id === action.id ? { ...task, done: !task.done } : task
			);
		}
		case "deleted": {
			return tasks.filter((task) => task.id !== action.id);
		}
		default: {
			throw Error("Unknown type" + action.type);
		}
	}
};
