// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const TutorialSchema = require("../models/tutorials");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.GET_USER_TUTORIALS = (req, res) => {
  TutorialSchema.find({
    userId: req.params.id,
  }).then((result) => {
    return res.status(200).json({ scoreboardResults: result });
  });
};

module.exports.GET_TUTORIALS = (req, res) => {
  const token = req.headers.authorization;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (!err) {
      TutorialSchema.find().then((results) => {
        return res.status(200).json({ tutorials: results });
      });
    } else {
      TutorialSchema.find({ private: false }).then((results) => {
        return res.status(200).json({ tutorials: results });
      });
    }
  });
};

module.exports.CREATE_TUTORIAL = (req, res) => {
  console.log(req.body.userId);

  const tutorial = new TutorialSchema({
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    private: req.body.private,
  });

  tutorial
    .save()
    .then((result) => {
      return res
        .status(200)
        .json({ response: "Tutorial was created", tutorial: result });
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ response: "Failed" });
    });
};
