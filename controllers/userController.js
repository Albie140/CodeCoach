const db = require("../models");

module.exports = {
    findAllUsers: (req, res) => {
        db.User
            .find({})
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    findByUserId: (req, res) => {
        db.User
            .findById(req.params.id)
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    findByUserNameTest: (req, res) => {
        console.log(req.params)
        db.User
            .find(req.params)
            .then(postData => {
                res.json(postData);
                console.log("findByUserNameTest")
            })
            .catch(err => console.log(err));
    },
    createUser: (req, res) => {
        db.User
            .create(req.body)
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    updateUser: (req, res) => {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    removeUser: (req, res) => {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    findAllPosts: (req, res) => {
        db.Post
            .find({})
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    findByPostId: (req, res) => {
        db.Post
            .findById(req.params.id)
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    findAllUngradedPosts: (req, res) => {
        console.log(req.params);
        db.Post
            .find(req.params)
            .then(postData => {
                res.json(postData);
                console.log("findAllUngradedPosts")
            })
            .catch(err => console.log(err));
    },
    findAllUserPosts: (req, res) => {
        console.log("findAllUserPosts")
        console.log(req.params)
        db.Post
            .find(req.params)
            .then(postData => {
                res.json(postData);
                console.log("find all posts by this user")
            })
            .catch(err => console.log(err));
    },
    createPost: (req, res) => {
        db.Post
            .create(req.body)
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    updatePost: (req, res) => {
        db.Post
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    removePost: (req, res) => {
        db.Post
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    }
}