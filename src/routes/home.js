const express = require("express");
const router = express.Router();

module.exports = () => {
  router.get("/", (_req, res) => {
    res.render("index.ejs", { msg: "hyrule" });
  });

  return router;
};
