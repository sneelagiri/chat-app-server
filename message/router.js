const express = require("express");
const { Router } = express;
const router = Router();
const Message = require("./model");
const Sse = require("json-sse");
const stream = new Sse();

router.get("/stream", async (request, response, next) => {
  try {
    const messages = await Message.findAll();
    const json = JSON.stringify(messages);
    stream.updateInit(json);
    stream.init(request, response);
  } catch (error) {
    next(error);
  }
});
router.get("/message", async function(request, response, next) {
  try {
    const messages = await Message.findAll();
    response.send(messages);
  } catch (error) {
    next(error);
  }
});

router.post("/message", async function(request, response, next) {
  try {
    const { body } = request;
    const { text } = body;
    const entity = { text };
    const message = await Message.create(entity);
    const json = JSON.stringify(message);
    stream.send(json);
    response.send(message);
    console.log("Request.body test: ", body);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
