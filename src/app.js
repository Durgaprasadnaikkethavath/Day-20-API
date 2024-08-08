const express = require("express");
const app = express();
const port = 3100;
const cors = require("cors");

app.use(cors());

app.use(express.json());
// access to all file in the file
require("./DataBase_connection/conn");
const mensRanking = require("./Module/cricketInfo");

app.get("/", (req, res) => {
  res.send("<h>Welcome to API create classes</h");
});

app.get("/menCricket", async (req, res) => {
  try {
    const details = await mensRanking.find({});
    res.status(201).json(details);
  } catch (e) {
    console.log(e);
  }
});

app.post("/mensCricketRanking", async (req, res) => {
  try {
    const mensRankingDetails = await mensRanking.create(req.body);
    res.status(200).json({ mensRankingDetails });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, (req, res) => {
  console.log(`server listening port ${port}`);
});
