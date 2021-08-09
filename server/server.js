const express = require ("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./database/config/dbConfig");

const app = express ();

dbConnection();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use("/cities", require("./routes/cityRoute"));
app.use("/itineraries", require("./routes/itineraryRoute"));
//app.use("/users", require("./routes/userRoute"));

app.listen (port, () => {

 console.log (`El servidor se está ejecutando en el port ${port}`);

});