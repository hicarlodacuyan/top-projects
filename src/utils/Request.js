const API_KEY = "f11721a2de56b1bc6cc6f095b921e3c0";

const request = {
  trending: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  recommended: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default request;
