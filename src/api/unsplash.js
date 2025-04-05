import axios from "axios";

const API_KEY = "ZaoQG9sCyyLcRC36_C9kXnMYbHKy6PFU3enBORKOSfM";
axios.defaults.baseURL = "https://api.unsplash.com/";

const fetchImg = async (query, per_page = 10, page = 1) => {
  const params = {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      per_page,
      page,
      query,
    },
  };
  const response = await axios(`search/photos?`, params);
  return response.data;
};

export default fetchImg;
