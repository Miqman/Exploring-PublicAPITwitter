function errorHandler(err, req, res, next) {
  // console.log(err);
  console.log(err.response.data.detail, "<<<");

  switch (err.name || err.response.data.title) {
    case "Invalid Request":
      res.status(400).json({
        statusCode: 400,
        message: err.response.data.detail,
      });
      break;
    case "Not Found":
      res.status(404).json({
        statusCode: 404,
        message: err.name,
      });
      break;
    default:
      // console.log(err);
      res.status(500).json({
        statusCode: 500,
        message: "internal Server Error",
        description: err.message,
      });
      break;
  }
}

module.exports = errorHandler;
