import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from './routes';
import db from './config/mongo';

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(router);

db().then(() => console.log("Connected to DB"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))