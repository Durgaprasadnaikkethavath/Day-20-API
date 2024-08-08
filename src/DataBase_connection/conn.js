const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Day-20-API")
  .then(() => console.log("server was connected"))
  .catch(() => console.log("server not connected"));
