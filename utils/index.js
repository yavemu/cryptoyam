const currencyOptions = ["EUR", "USD", "ARS"];
const coingeckoApiURl = "https://api.coingecko.com/api/v3";

const errorMessage = (message, error = null) => {
  console.error(error);
  throw new Error(message);
};

module.exports = {
  currencyOptions,
  coingeckoApiURl,
  errorMessage,
};
