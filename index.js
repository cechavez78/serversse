const app = require("express")();
import { PORT } from "./config";

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

app.listen(PORT, () => {
  console.log("Server running: ", PORT);
});
