const express = require("express");
const router = express.Router();
const userRoute = require("../routes/user.routes");

router.use("/users", userRoute);

module.exports = router;
