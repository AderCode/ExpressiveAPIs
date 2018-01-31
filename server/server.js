const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");

let app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);


let port = 3000;
app.listen(
  port,
  console.log(`Server running. Listening on Port: ${port}`)
);
