const http = require("http");

let phonebook = [
	{
		id: "1",
		name: "Arto Hellas",
		number: "040-123456",
	},
	{
		id: "2",
		name: "Ada Lovelace",
		number: "39-44-5323523",
	},
	{
		id: "3",
		name: "Dan Abramov",
		number: "12-43-234345",
	},
	{
		id: "4",
		name: "Mary Poppendieck",
		number: "39-23-6423122",
	},
];
/* const app = http.createServer((request, response) => {
	response.writeHead(200, { "Content-Type": "application/json" });
	response.end(JSON.stringify(phonebook));
}); */

const express = require("express");
const app = express();

app.get("/api/info/", (request, response) => {
	response.send(
		`<p>Phone book has info for ${
			phonebook.length
		} people</p><p>${new Date()}</p>`
	);
});

app.get("/api/persons/", (request, response) => {
	response.json(phonebook);
});

app.get("/api/persons/:id", (request, response) => {
	const id = request.params.id;
	const person = phonebook.find((person) => person.id === id);
	person ? response.json(person) : response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
	const id = request.params.id;
	phonebook = phonebook.filter((person) => person.id !== id);
	response.status(202).end();
});

const PORT = 3006;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
