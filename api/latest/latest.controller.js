const { createLatest } = require("./latest.service");

async function handlerCreateLatest(req, res) {
  try {
    const latest = await createLatest();
    res.status(201).json(latest);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = { handlerCreateLatest };
