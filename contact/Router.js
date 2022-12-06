const express = require("express");
const router = express.Router();
const conntroller = require("../contact/Controller");

// get

router.route("/").get(conntroller.get);
router.route("/").post(conntroller.create);
module.exports = router;
