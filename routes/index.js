const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

router.use("/api/user", userRoutes);
router.use("/api/thought", thoughtRoutes);

module.exports = router;
