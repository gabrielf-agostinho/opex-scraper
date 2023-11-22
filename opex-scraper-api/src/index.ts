import express from 'express';
import cors from 'cors'
import volumesRouter from './routes/volumes.route';

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
const BASE_URL = '/api';

const app = express();

app.use(cors({ origin: '*' }));

app.use(`${BASE_URL}/volumes`, volumesRouter);

app.listen(PORT, () => console.log(`Running on ${HOSTNAME}:${PORT}`));
