const { createLatest, getLatest, deleteLatest } = require("./latest.service");
const fetch = require("node-fetch");
const API_URL = "https://openexchangerates.org/api/";

async function handlerCreateLatest(req, res) {
  const getData = await fetch(
    `${API_URL}latest.json?app_id=${process.env.APP_ID}`
  );
  const data = await getData.json();
  try {
    const latest = await createLatest(data);
    res.status(201).json(latest);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetLatest(req, res) {
  deleteLatest();
  const getData = await fetch(
    `${API_URL}latest.json?app_id=${process.env.APP_ID}`
  );
  const data = await getData.json();
  try {
    await createLatest(data);
    const latest = await getLatest();
    res.status(200).json(latest);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = { handlerCreateLatest, handlerGetLatest };
