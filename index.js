const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");

const app = express();

app.use(cors());
const jsonServerMiddleware = jsonServer.router("./data/db.json");
app.use("/api", jsonServerMiddleware);

app.listen(5000, () => {
	console.log("Server is running on http://localhost:5000");
});
