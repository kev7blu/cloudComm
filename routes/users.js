import express from 'express';

import { getEntry, getEntries, createEntry, deleteEntry, updateEntry } from '../controllers/users.js'

const router = express.Router();

router.get('/:id', getEntry);

router.get('/', getEntries);

router.put('/', createEntry);

router.delete('/:id', deleteEntry);

router.post('/:id', updateEntry);

export default router;