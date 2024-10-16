const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "hema",
    lastName: "latha",
    email: "hema@gmail.com",
    password: "password",
    age: 27,
  });
  user.save();
  res.send("user added");
});
connectDB()
  .then(() => {
    console.error(" connected");
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting");
  });
