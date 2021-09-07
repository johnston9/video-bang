import axios from "axios";

const KEY = "AIzaSyC84F2tE-HdpqwXZNFXr0C9szlx7e2euLg"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      type: "video",
      maxResults: 5,
      key: KEY,
    },
  });