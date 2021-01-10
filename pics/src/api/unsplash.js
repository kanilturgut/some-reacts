import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 5HYlPZshDHJ1nCVJu9fIKQb7nHzexbz8E6fu-oddqs8",
  },
});
