import axios from "axios";

const KEY = "AIzaSyC0zArLabWKbK3bkrjmzRLJQLCdCFgHQME";

export default axios.create({
  baseURL: "https:/www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
