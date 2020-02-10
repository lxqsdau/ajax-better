import ajax from "../src";
import { queryportConfig, httpConfig } from "./config";

export default ajax({
  baseURL: "http://daily.hknet-inc.com",
  ...queryportConfig
})