const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.User
            .find({})
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    findById: (req, res) => {
        db.User
            .findById(req.params.id)
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    create: (req, res) => {
        db.User
            .create(req.body)
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    update: (req, res) => {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    },
    remove: (req, res) => {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(postData => {
                res.json(postData);
            })
            .catch(err => console.log(err));
    }
}