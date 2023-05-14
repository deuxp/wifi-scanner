const wifi = require("node-wifi");
wifi.init({ iface: null });

async function scan() {
  return await wifi.scan();
}

module.exports = { scan };
