const express = require("express");
const router = express.Router();
// const path=require('path')

const admin = require("./admin/Admin");
const user = require("./user/Router");
const projects = require("./projects/Router");
// router

router.use("/admin", admin);
router.use("/user", user);
router.use("/projects", projects);
module.exports = router;
