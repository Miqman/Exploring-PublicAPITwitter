const express = require("express");
const router = express.Router();

const Controller = require("../controllers/controller");

// define the home page route
router.get("/", Controller.getAllTweet);

router.get("/multiple", Controller.getMultipleTweets);

router.get("/follower", Controller.getFollower);

router.get("/following", Controller.getFollowing);

router.get("/like_tweet", Controller.getLiked);

router.get("/re_tweet/:id", Controller.getRetweet);

router.get("/mention", Controller.getMention);

router.get("/:id", Controller.getOneTweet);

module.exports = router;
