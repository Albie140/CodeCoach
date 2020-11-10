const router = require("express").Router();
const userController = require("../controllers/userController");

// Post API Routes go here
// /api/post/
router.route("/")
    .get(userController.findAllPosts)
    .post(userController.createPost);
    console.log("Using /api/post!")

// /api/post/:id routes only
router.route("/:id")
    .get(userController.findByPostId)
    .put(userController.updatePost)
    .delete(userController.removePost)

// /api/post/ungraded to get all ungraded posts (posts that need to be graded)
router.route("/ungraded")
    .get(userController.findAllUngradedPosts)

// /api/post/:user to get all posts by that user
router.route("/:user")
    .get(userController.findAllUserPosts)


module.exports = router;