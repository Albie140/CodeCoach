const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const auth = require("./api/auth");


// All routes go here
router.use("/api/users", userRoutes);
router.use("/api/users", auth);

// router.use((req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;