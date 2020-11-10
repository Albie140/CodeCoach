const router = require("express").Router();
const userController = require("../controllers/userController");

// Post API Routes go here
// /api/users/
router.route("/")
    .get(userController.findAllUsers)
    .post(userController.createUser);

router.route("/name/:name")
    .get(userController.findByUserNameTest)

// /api/users/:id routes only
router.route("/:id")
    .get(userController.findByUserId)
    .put(userController.updateUser)
    .delete(userController.removeUser)

module.exports = router;