const express = require("express");
const app = express();
const port = 4000;
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post("/message", function(request, response) {
  const { body } = request;
  console.log("Request.body test: ", body);
});

function onListen() {
  console.log("Listening on port:", port);
}
app.listen(port, onListen);
