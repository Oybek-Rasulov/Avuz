import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
import pg from 'pg';
import fs from 'fs';
import dotenv from 'dotenv';


const app = express();
const port = 3000;
dotenv.config();

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

app.post("/uploadnews", (req, res) => {
  console.log("hello")
})

app.listen(port, () => {
    console.log(`The server running on port ${port}`)
});