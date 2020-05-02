const axios = require("axios");

(async function main() {
  try {
    const response = await axios.get(
      "https://api.github.com/users/thierrysantos"
    );
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
})();
