const express = require("express");
const app = express();
const port = 4000;
const jsonMiddleware = express.json();
const messageRouter = require("./message/router");
app.use(jsonMiddleware);

app.use(messageRouter);

function onListen() {
  console.log("Listening on port:", port);
}
app.listen(port, onListen);
