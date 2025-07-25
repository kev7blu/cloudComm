import { v4 as uuidv4 } from 'uuid';

let entries = [
	{
		firstName: "Conan",
		lastName: "O'Brien",
		age: 62,
		id: uuidv4()
	},
	{
		firstName: "Craig",
		lastName: "Ferguson",
		age: 63,
		id: uuidv4()
	},
	{
		firstName: "David",
		lastName: "Letterman",
		age: 78,
		id: uuidv4()
	}
]

export const getEntry = (req, res) => {
	const { id } = req.params;

	const foundEntry = entries.find((entry) => entry.id == id);

	res.send(foundEntry);
}

export const getEntries = (req, res) => {
	res.send(entries);
}

export const createEntry = (req, res) => {
	const entry = req.body;

	const userId = uuidv4();

	entries.push({ ...entry, id: userId });

	res.send(`Entry id ${userId} added to the database!`);
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