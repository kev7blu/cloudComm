import { v4 as uuidv4 } from 'uuid';

let entries = []

export const getEntry = (req, res) => {
	const { id } = req.params;

	const foundEntry = entries.find((entry) => entry.id == id);

	console.log(`GET request recieved for entry id: ${id}`);
	res.send(foundEntry);
}

export const getEntries = (req, res) => {
	console.log(`GET request recieved for all entries`);
	res.send(entries);
}

export const createEntry = (req, res) => {
	const entry = req.body;

	entries.push({ ...entry, id: uuidv4() });

	console.log(`POST request to create entry id:${id}`);
	res.send(`Entry ${entry.firstName} added to the database!`);
}

export const deleteEntry = (req, res) => {
	const { id } = req.params;

	entries = entries.filter((entry) => entry.id != id);

	res.send(`Entry id ${id} deleted from the database.`)
}

export const updateEntry = (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, age } = req.body;

	const entry = entries.find((entry) => entry.id == id);

	if (firstName) entry.firstName = firstName;
	if(lastName) entry.lastName = lastName;
	if(age) entry.age = age;

	res.send(`Entry id ${id} has been updated.`)
}