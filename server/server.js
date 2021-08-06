const express = require ("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./database/config/db.config");

const app = express ();

dbConnection();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use("/cities", require("./routes/city.route"));

app.listen (port, () => {

 console.log (`El servidor se está ejecutando en el port ${port}`);

});