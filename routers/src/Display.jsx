import React, { useState, useEffect } from "react";
import { Notes } from "./Notes";
import noteServices from "./services";

export const Display = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("new note ....");
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		const getData = async () => {
			const data = await noteServices.getAll();
			setNotes(data);
		};
		getData();
	}, []);

	const notesToShow = showAll
		? notes
		: notes.filter((note) => note.important === true);

	const handleNoteChange = (e) => {
		setNewNote(e.target.value);
	};

	const handleSave = (e) => {
		e.preventDefault();

		const noteObject = {
			content: newNote,
			important: Math.random() < 0.5,
		};

		noteServices.create(noteObject).then((data) => {
			setNotes([...notes, data]);
			setNewNote("");
		});
	};

	const toggleImportanceTo = (id) => {
		const note = notes.find((note) => note.id === id);
		const changedNote = { ...note, important: !note.important };
		noteServices.update(id, changedNote).then((data) => {
			setNotes(notes.map((note) => (note.id === id ? data : note)));
		});
	};

	return (
		<div>
			<h1>Notes</h1>
			<div>
				<button onClick={() => setShowAll(!showAll)}>
					{showAll ? "important" : "All"}
				</button>
			</div>
			<ul>
				{notesToShow.map((note) => (
					<Notes
						key={note.id}
						note={note.content}
						important={note.important}
						toggleImportance={() => toggleImportanceTo(note.id)}
					/>
				))}
			</ul>
			<form
				onSubmit={(e) => {
					handleSave(e);
				}}
			>
				<input
					value={newNote}
					onChange={(e) => {
						handleNoteChange(e);
					}}
				/>
				<button type="submit">Save</button>
			</form>
		</div>
	);
};
