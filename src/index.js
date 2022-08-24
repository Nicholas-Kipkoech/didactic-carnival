const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

//initialize to return data in json format
app.use(express.json());

//init port
const port = process.env.PORT;

// init server
app.listen(port, () => console.log(`server is running on port ${port}`));
