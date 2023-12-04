import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { router } from './api';
import { dbConnection } from '../db/config';

dotenv.config();

const app = express();
dbConnection(); 

app.use(express.json());
app.use(cors());
app.use('/api', router);



const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`[App]: Listening on port ${port}`)
  })