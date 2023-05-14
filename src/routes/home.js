const express = require("express");
const router = express.Router();
const { scan } = require("../services/wifi");

module.exports = () => {
  router.get("/", (_req, res) => {
    res.render("index.ejs", { msg: "hyrule" });
  });
  router.get("/scan", async (_req, res) => {
    let list = await scan();
    list = list.map((net) => net.ssid);

    let networks = "";
    console.log({ list });

    list.forEach((net) => (networks += `\t- ${net}\n`));

    console.log({ networks });

    res.render("scan.ejs", { networks });
  });

  return router;
};
