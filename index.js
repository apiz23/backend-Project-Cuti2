const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");

const app = express();
const home = require("./routes/home");

app.use(cors());
app.use(express.json());

app.use("/home", home);

const jsonServerMiddleware = jsonServer.router("./data/db.json");
app.use("/api", jsonServerMiddleware);

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Listening to port ${port}`));
