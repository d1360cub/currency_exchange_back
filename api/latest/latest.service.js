const fetch = require("node-fetch");
const LatestModel = require("./latest.model");
const API_URL = "https://openexchangerates.org/api/";

async function createLatest() {
  try {
    const response = await fetch(
      `${API_URL}latest.json?app_id=${process.env.APP_ID}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  const latest = await LatestModel.create(data);
  return latest;
}

module.exports = { createLatest };
