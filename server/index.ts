import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {route} from './routes/routes'

dotenv.config();

var corsOptions = {
  origin: process.env.ORIGIN
};

const app: Express = express();
const port = process.env.PORT;
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

route(app);
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});