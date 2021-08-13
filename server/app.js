const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./database/config/dbConfig");

const app = express();

dbConnection();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

app.use("/api/cities", require("./routes/cityRoute"));
app.use("/api/itineraries", require("./routes/itineraryRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/auth", require("./routes/authRoute"));

module.exports = {
    port,
    app
}