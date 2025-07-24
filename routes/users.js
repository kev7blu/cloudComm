import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = []

// all routes in here are starting with /users
router.get('/', (req, res) => {
	res.send(users);
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	const foundUser = users.find((user) => user.id == id);
});

router.put('/', (req, res) => {
	const user = req.body;

	users.push({ ...user, id: uuidv4() });

	res.send(`USer ${user.firstName} added to the database!`);
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	users = users.filter((user) => user.id != id);

	res.send(`User id ${id} deleted from the database.`)
	// need to add sql request here
});


export default router;