import { useEffect, useState } from "react";
import phonebookServices from "./phonebookServices";

const Phonebook = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchName, setSearchName] = useState("");

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await phonebookServices.getAll();
				setPersons(response);
			} catch (error) {
				console.error("Error fetching phonebook data:", error);
				alert("Failed to fetch data. Please try again later.");
			}
		};
		getData();
	}, []);

	const handleNameChange = (e) => {
		setNewName(e.target.value);
	};

	const handlePhoneChange = (e) => {
		setNewNumber(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPerson = {
			name: newName,
			number: newNumber,
		};
		const isPersonPresent = persons.find((person) => person.name === newName);
		if (isPersonPresent) {
			const updatedPerson = {
				id: isPersonPresent.id,
				name: newName,
				number: newNumber,
			};

			const confirm = window.confirm(
				`${updatedPerson.name} is already added to phonebook. Do you want to replace phone number?`
			);
			if (confirm) {
				try {
					const response = await phonebookServices.update(
						isPersonPresent.id,
						updatedPerson
					);
					setPersons((prev) =>
						prev.map((person) =>
							person.id === updatedPerson.id ? response : person
						)
					);
				} catch (error) {
					console.error("Error updating person:", error);
					alert("Failed to update the contact. Please try again later.");
				}
			}
			setNewName("");
			setNewNumber("");
		} else {
			try {
				const response = await phonebookServices.create(newPerson);
				setPersons((prePersons) => [...prePersons, response]);
			} catch (error) {
				console.error("Error adding person:", error);
				alert("Failed to add the contact. Please try again later.");
			}
			setNewName("");
			setNewNumber("");
		}
	};

	const handleSearch = (e) => {
		setSearchName(e.target.value);
	};

	const filteredPersons = persons.filter((person) =>
		person.name.toLowerCase().startsWith(searchName.toLowerCase())
	);

	const handleDelete = async (id) => {
		const confirm = window.confirm(
			"Do you realy want delete this person's contact"
		);
		if (confirm) {
			try {
				await phonebookServices.deleteEntry(id);
				setPersons((prev) => prev.filter((person) => person.id !== id));
			} catch (error) {
				console.error("Error deleting person:", error);
				alert("Failed to add the contact. Please try again later.");
			}
		}
	};
	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				<p>Filter shown with </p>
				<input onChange={handleSearch} />
			</div>

			<h2>Add a New</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name:{" "}
					<input value={newName} onChange={handleNameChange} type="text" />
				</div>
				<div>
					number :{" "}
					<input value={newNumber} onChange={handlePhoneChange} type="number" />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{filteredPersons.length > 0 ? (
					filteredPersons.map((person) => (
						<li key={person.id}>
							{person.name} {person.number}{" "}
							<button onClick={() => handleDelete(person.id)}>Delete</button>
						</li>
					))
				) : (
					<p>No Matches Found</p>
				)}
			</ul>
		</div>
	);
};

export default Phonebook;
