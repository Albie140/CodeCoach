const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Post
            .findAll({})
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    findById: (req, res) => {
        db.Post
            .findById(req.params.id)
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    create: (req, res) => {
        db.Post
            .create(req.body)
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    update: (req, res) => {
        db.Post
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    remove: (req, res) => {
        db.Post
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    }
}