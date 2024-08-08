const mongoose = require("mongoose");

const cricketSchema = new mongoose.Schema({
  ranking: Number,
  name: String,
  runs: Number,
  balls: Number,
  fours: Number,
  sixes: Number,
  sr: Number,
  team: String,
  opposition: String,
  matchDate: String,
});

const rankingData = new mongoose.model("rankingData", cricketSchema);

module.exports = rankingData;
