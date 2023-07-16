const express = require("express");
const chats = require("./data/data");
const path = require('path');
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const { notFound, errorHandler } = require("./middleWare/errorMiddleWare");
require('dotenv').config({ path: path.resolve(__dirname, './.env') });


connectDB();
const app = express();

app.use(express.json());  // to accept json data

app.get("/", (req, res) => {
    res.send("api is running");;
});

app.use('/api/user', userRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`server started on port ${PORT}`));