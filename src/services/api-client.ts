import axios from "axios";
import { RAWG_API_KEY } from "../data/constants";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: RAWG_API_KEY,
  },
});
