const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    title: String,
    author: String,
    body: String
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;