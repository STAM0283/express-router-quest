const express = require("express");
const posts = require("./posts");
const router = express.Router();
const tags   = require("./tags"); 

router.use("/posts", posts);
router.use("/tags", tags); 



module.exports = router; 