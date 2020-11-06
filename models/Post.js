const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    title: String,
    user: String,
    instructions: String,
    userAnswer: String,
    graderComments: String,
    grade: String
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;