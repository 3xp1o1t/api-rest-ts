import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT
const app = express()

app.use(cors())

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))