const mongoose = require("mongoose");

const MONGO_USERNAME = "root";
const MONGO_PASSWORD = "";
const MONGO_HOSTNAME = "127.0.0.1";
const MONGO_PORT = "27017";
const MONGO_DB = "nodejs_basic";

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect(url, options).then(
  () => {
    console.log(
      "Database is connected"
    ); /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  },
  (err) => {
    throw err; /** handle initial connection error */
  }
);
