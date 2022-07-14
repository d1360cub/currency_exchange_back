const LatestModel = require("./latest.model");

async function createLatest(last) {
  const latest = await LatestModel.create(last);
  return latest;
}

async function getLatest() {
  const latest = await LatestModel.find();
  return latest;
}

async function deleteLatest() {
  const deleted = await LatestModel.deleteMany();
}

module.exports = { createLatest, getLatest, deleteLatest };
