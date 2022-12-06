const app = require("express")();

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  send(res);
});

function send(res) {
  res.write("data: " + "hello!\n\n");
  setTimeout(() => {
    send(res);
  }, 1000);
}

app.listen(5000, () => {
  console.log("Server runing");
});
