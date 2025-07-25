import express from 'express';

import entriesRoutes from './routes/entries.js'

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/data', entriesRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://18.209.119.175:${PORT}`));
