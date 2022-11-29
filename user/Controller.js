async function get(req, res) {
  try {
    return res.status(200).send({ media: "ass" });
  } catch (err) {
    res.status(400).send(err);
  }
}
module.exports = { get };
