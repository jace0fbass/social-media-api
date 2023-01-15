const router = require("express").Router();
const userRoutes = require("./user-routes.js");
const thoughtRoutes = require("./thought-routes.js");

router.use("/api/user", userRoutes);
router.use("/api/thought", thoughtRoutes);

module.exports = router;
