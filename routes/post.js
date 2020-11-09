const router = require("express").Router();
const userController = require("../controllers/userController");

// Post API Routes go here
// /api/post/
router.route("/")
    .get(userController.findAll)
    .post(userController.create);

// /api/post/:id routes only
router.route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove)

module.exports = router;