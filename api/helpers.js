const axios = require("axios");
const { UNSPLASH_TOKEN, EDAMAM_APP_ID, EDAMAM_APP_KEY } = require("../config");

const unsplashUrl = `https://api.unsplash.com/developers/?&food`;
module.exports = {
  // getDailyPicture: function () {
  //   return axios.get(unsplashUrl);
  // },
  getRecipes: function (searchTerm, filter) {
    if (filter) {
      return axios.get(
        `https://api.edamam.com/search?q=${searchTerm}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}&from=0&to=30&health=${filter}`
      );
    }
    return axios.get(
      `https://api.edamam.com/search?q=${searchTerm}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}&from=0&to=30`
    );
  },
};
