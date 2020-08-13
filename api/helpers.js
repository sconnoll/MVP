const axios = require("axios");
const config = require("../config");

const EDAMAM_APP_ID = config.EDAMAM_APP_ID || process.env.EDAMAM_APP_ID;
const EDAMAM_APP_KEY = config.EDAMAM_APP_KEY || process.env.EDAMAM_APP_KEY;

const unsplashUrl = `https://api.unsplash.com/developers/?&food`;
module.exports = {
  // getDailyPicture: function () {
  //   return axios.get(unsplashUrl);
  // },
  getRecipes: function (searchTerm) {
    if (typeof arguments[1] === String) {
      return axios.get(
        "https://api.edamam.com/search?q=" +
          searchTerm +
          "&app_id=" +
          EDAMAM_APP_ID +
          "&app_key=" +
          EDAMAM_APP_KEY +
          "&from=0&to=30&health=" +
          arguments[1]
      );
    } else {
      return axios.get(
        "https://api.edamam.com/search?q=" +
          searchTerm +
          "&app_id=" +
          EDAMAM_APP_ID +
          "&app_key=" +
          EDAMAM_APP_KEY +
          "&from=0&to=30"
      );
    }
  },
};
