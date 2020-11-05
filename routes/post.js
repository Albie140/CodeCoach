const router = require("express").Router();
const postController = require("../controllers/postController");

// Post API Routes go here
// /api/posts/
router.route("/")
    .get(postController.findAll)
    .post(postController.create);

// /api/posts/:id routes only
router.route("/:id")
    .get(postController.findById)
    .put(postController.update)
    .delete(postController.remove)

module.exports = router;