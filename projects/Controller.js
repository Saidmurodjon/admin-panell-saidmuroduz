const ProjectModel = require("../models/Projects");

async function get(req, res) {
  try {
    const step = req.query.step;
    const quantity = req.query.quantity;
    const report = await ProjectModel.find({})
      .skip((quantity - 1) * step)
      .limit(step);
    if (report.length > 0) {
      return res.status(200).send(report);
    } else {
      return res.status(404).send(report);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}
module.exports = { get };
