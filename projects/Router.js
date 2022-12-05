
const express = require("express");
const router = express.Router();
const conntroller = require("../projects/Controller");

// get

router.route("/").get(conntroller.get);
module.exports = router;