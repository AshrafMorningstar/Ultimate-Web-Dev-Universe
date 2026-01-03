/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

const filePath = path.join(__dirname, "../");
app.use(express.static(filePath));

app.listen(port, () => {
    console.log(`Listening on port number ${port}`);
})