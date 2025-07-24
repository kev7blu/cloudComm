import express from 'express';

import usersRoutes from './routes/users.js'

const app = express();
const PORT = 80;

app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://18.209.119.175/:${PORT}`));