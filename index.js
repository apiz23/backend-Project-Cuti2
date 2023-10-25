const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");

const app = express();
const home = require("./routes/home");
const manga = require("./routes/manga");

app.use(cors());
app.use(express.json());

app.use("/home", home);
app.use("/manga", manga);

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Listening to port ${port}`));
