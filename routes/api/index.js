const router = require("express").Router();
const bookRoutes = require("./Books");


router.use("/Books", bookRoutes);

module.exports = router;