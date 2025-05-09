import dotenv from 'dotenv';
dotenv.config();

import conectDatabase from "./src/config/configure.js";
import express from 'express';

import userRoutes from "./src/Routes/AuthRoutes.js"

const port = process.env.PORT || 3000;
const app = express()

conectDatabase();
app.use(express.json());
app.use("/", userRoutes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));