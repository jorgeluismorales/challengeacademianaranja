const { connect } = require("mongoose");

const dbConnection = () => {
  try {
    connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.twxkc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("db is connected");
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to db");
  }
};

module.exports = {
  dbConnection,
};
