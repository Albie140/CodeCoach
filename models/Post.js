const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    title: String,
    user: String,
    grader: String,
    userLink: String,
    userComments: String,
    graderComments: String,
    grade: String
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;