const express = require("express");
const { Router } = express;
const router = Router();
const Message = require("./model");

router.post("/message", async function(request, response, next) {
  try {
    const { body } = request;
    const { text } = body;
    const entity = { text };
    await Message.create(entity);
    response.status(200).json(entity);
    console.log("Request.body test: ", body);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
