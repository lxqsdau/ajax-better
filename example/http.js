import ajax from "../src";
import { queryportConfig, httpConfig } from "./config";

export default ajax.create({
  baseURL: "http://daily.hknet-inc.com",
  ...queryportConfig
}, req => {
  console.log(req)
})