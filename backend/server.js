const express = require("express");
const chats = require("./data/data");
const path = require('path');
const connectDB = require("./config/db");

require('dotenv').config({ path: path.resolve(__dirname, './.env') });


connectDB();
const app = express();

app.get("/", (req, res) => {
    res.send("api is running");;
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
}); 

app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`server started on port ${PORT}`));