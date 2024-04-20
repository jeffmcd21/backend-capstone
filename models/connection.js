
require('dotenv').config()
const mongoose= require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

module.exports = mongoose