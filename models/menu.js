
const mongoose = require('./connection');

const userSchema = new mongoose.Schema({
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true }
  });

  const User = mongoose.model("User", userSchema);

  module.exports = User;



const MenuSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: Number
});

  const Menu = mongoose.model('Menu', MenuSchema);

  module.exports = Menu