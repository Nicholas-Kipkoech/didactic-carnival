const express = require("express");
const dotenv = require("dotenv");

//connect db
require("./db/config");

//enviroment files
dotenv.config();
const app = express();
//connect db

//initialize to return data in json format
app.use(express.json());

//init port
const port = process.env.PORT;

const userRouter = require("./routes/User.router");

// init server
app.listen(port, () => console.log(`server is running on port ${port}`));
app.use("/user", userRouter);
