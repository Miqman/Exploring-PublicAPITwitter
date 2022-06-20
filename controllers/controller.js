const axios = require("axios");

const token = process.env.BEARER;

class Controller {
  static async getAllTweet(req, res, next) {
    try {
      const { data } = await axios({
        method: "get",
        url: "https://api.twitter.com/2/users/44196397/tweets?max_results=100",
        headers: { Authorization: `Bearer ${token}` },
        // json: true,
      });

      res.status(200).json({
        statusCode: 200,
        data: JSON.parse(JSON.stringify(data.data)),
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getOneTweet(req, res, next) {
    try {
      const { id } = req.params;

      const { data } = await axios({
        method: "get",
        url: `https://api.twitter.com/2/tweets/${id}`,
        headers: { Authorization: `Bearer ${token}` },
      });

      const getTweet = JSON.parse(JSON.stringify(data.data));

      res.status(200).json({
        statusCode: 200,
        data: getTweet,
      });
    } catch (error) {
      next(error);
      console.log(error.data);
    }
  }

  static async getMultipleTweets(req, res, next) {
    try {
      const { ids } = req.query;

      const { data } = await axios({
        method: "get",
        url: `https://api.twitter.com/2/tweets`,
        params: { ids: ids },
        headers: { Authorization: `Bearer ${token}` },
      });

      const getTweets = JSON.parse(JSON.stringify(data.data));

      if (getTweets <= 0) {
        throw { name: "Not Found" };
      }

      res.status(200).json({
        statusCode: 200,
        data: getTweets,
      });
    } catch (error) {
      next(error);
      console.log(error);
    }
  }

  static async getFollower(req, res, next) {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://api.twitter.com/2/users/44196397/followers?user.fields=public_metrics`,
        headers: { Authorization: `Bearer ${token}` },
      });

      const getFollower = JSON.parse(JSON.stringify(data.data));

      res.status(200).json({
        statusCode: 200,
        data: getFollower,
      });
    } catch (error) {
      next(error);
      console.log(error);
    }
  }

  static async getFollowing(req, res, next) {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://api.twitter.com/2/users/44196397/following?user.fields=public_metrics`,
        headers: { Authorization: `Bearer ${token}` },
      });

      const getFollowing = JSON.parse(JSON.stringify(data.data));

      res.status(200).json({
        statusCode: 200,
        data: getFollowing,
      });
    } catch (error) {
      next(error);
      console.log(error);
    }
  }

  static async getLiked(req, res, next) {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://api.twitter.com/2/users/44196397/liked_tweets?user.fields=created_at&expansions=author_id&tweet.fields=created_at`,
        headers: { Authorization: `Bearer ${token}` },
      });

      const getLiked = JSON.parse(JSON.stringify(data.data));
      const getUser = JSON.parse(JSON.stringify(data.includes.users));

      res.status(200).json({
        statusCode: 200,
        data: getLiked,
        users: getUser,
      });
    } catch (error) {
      next(error);
      console.log(error);
    }
  }

  static async getRetweet(req, res, next) {
    try {
      const { id } = req.params;

      const { data } = await axios({
        method: "get",
        url: `https://api.twitter.com/2/tweets/${id}/retweeted_by`,
        headers: { Authorization: `Bearer ${token}` },
      });

      const getRetweet = JSON.parse(JSON.stringify(data.data));

      res.status(200).json({
        statusCode: 200,
        data: getRetweet,
      });
    } catch (error) {
      next(error);
      console.log(error);
    }
  }

  static async getMention(req, res, next) {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://api.twitter.com/2/users/44196397/mentions?max_results=50&expansions=author_id`,
        headers: { Authorization: `Bearer ${token}` },
      });

      const getMention = JSON.parse(JSON.stringify(data.data));

      res.status(200).json({
        statusCode: 200,
        data: getMention,
      });
    } catch (error) {
      next(error);
      console.log(error);
    }
  }
}

module.exports = Controller;
