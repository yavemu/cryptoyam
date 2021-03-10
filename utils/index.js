const currencyOptions = ["eur", "usd", "ars"];
const coingeckoApiURl = "https://api.coingecko.com/api/v3";
const topCoinLimit = 25;

const errorMessage = (message, error = null) => {
  console.error(error);
  throw new Error(message);
};

module.exports = {
  currencyOptions,
  coingeckoApiURl,
  topCoinLimit,
  errorMessage,
};
