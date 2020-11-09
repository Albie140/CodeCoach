const router = require("express").Router();
const userController = require("../controllers/userController");

// Post API Routes go here
// /api/users/
router.route("/")
    .get(userController.findAll)
    .post(userController.create);

// router.get("/", (req, res) => {
//     console.log("Does this work?");
// });

// /api/users/:id routes only
router.route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove)

module.exports = router;