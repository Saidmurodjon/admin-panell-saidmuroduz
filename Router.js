const express = require("express");
const router = express.Router();
// const path=require('path')

const admin = require("./admin/Admin");
const user =require("./user/Router")
// router

router.use("/user", user);
router.use("/admin", admin);
module.exports = router;
