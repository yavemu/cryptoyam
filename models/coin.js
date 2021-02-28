const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const CoinSchema = Schema({
  userId: { type: Schema.Types.ObjectId, ref: "Users" },
  market_cap_rank: { type: Number, required: true },
  coinId: { type: String, required: true },
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: false },
  current_price: { type: Number, required: true },
  market_cap: { type: Number, required: true },
  last_updated: { type: Date, required: true },
}, { toObject: { versionKey: false } });

CoinSchema.index({ userId: 1, coinId: 1 }, { unique: true });
CoinSchema.plugin(uniqueValidator, { message: "Error, expected {PATH} to be unique." });

const Coin = model("Coins", CoinSchema);

module.exports = { Coin };
