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
const morgan = require("morgan");

const app = express();
app.use(express.json());

morgan.token("custom", (request) =>
	request.method === "POST" ? JSON.stringify(request.body) : null
);
app.use(
	morgan(":method :url :status :res[content-length] :response-time ms :custom")
);

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
const generateId = () => {
	const id = Math.floor(Math.random() * 10000);
	return String(id);
};

app.post("/api/persons/", (request, response) => {
	const body = request.body;
	if (!body.name || !body.number) {
		return response.status(400).json({
			error: "Name or Number is missing",
		});
	}
	const personPresent = phonebook.find((person) => person.name === body.name);
	if (personPresent) {
		return response.status(400).json({
			error: "This person is already in list",
		});
	}
	const person = {
		id: generateId(),
		name: body.name,
		number: body.number,
	};

	phonebook = phonebook.concat(person);
	response.json(person);
});

const PORT = 3006;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
