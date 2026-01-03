/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(req, res) {
    console.log("Server started running on port 3000.");
})
