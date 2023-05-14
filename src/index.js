require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

/* --------------------------------- ROUTES --------------------------------- */
const home = require("./routes/home");
/* --------------------------------- ROUTES --------------------------------- */
app.use("/api/messages", home());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
