import axios from 'axios';
import * as qs from 'qs';
import { message } from "antd";
import md5 from "js-md5";

const ajaxConfig = {
  queryportAppSecert: null,
  queryportAppkey: null,
  baseURL: null
}

const wrapInterceptors = (http, { isApijson, other }) => {
  // 请求拦截
  http.interceptors.request.use((req) => {
    // get请求
    if (req.method === "get" && !isApijson) {
      req.params = { ...req.data }
    }
    return req;
  });
  // 响应拦截
  http.interceptors.response.use(res => {
    const { data, config: { url } } = res;
    let returnConfig = {
      url,
      ...other
    }
    if (isApijson) returnConfig["returnConfig"] = true;
    return Promise.resolve({ data, config: returnConfig });
  }, (error) => {
    return Promise.reject(JSON.stringify(error))
  })
  return http;
}
function axiosInstance ({ isApijson, other }) {
  return wrapInterceptors(axios.create({
    baseURL: ajaxConfig.baseURL,
    timeout: 30000,
    withCredentials: true,
  }), { isApijson, other });
}


function http ({
  url,
  method,
  isFormData = false,
  isFileUpload = false,
  data,
  params,
  isApijson = false,
  hideErrorMessage = false,
  ...other
}) {
  return new Promise((resolve, reject) => {
    let requestData = {
      url,
      method,
      data,
      params
    }
    if (method === "post" && isFormData) {
      requestData.data = qs.stringify({ ...data });
    }

    if (method === "post" && isFileUpload) {
      const { fileList, ...info } = data;
      let formData = new FormData();
      for (let props in info) {
        formData.append(props, info[props]);
      }
      fileList.forEach(({ file, name }) => {
        formData.append(name, file);
      });
      requestData.data = formData;
    }
    if (isApijson) {
      const { queryportAppSecert, queryportAppkey } = ajaxConfig;
      const sign = md5(`${queryportAppSecert}:${JSON.stringify(data)}:${queryportAppSecert}`);
      requestData.url = `${url}?appkey=${queryportAppkey}&sign=${sign}`;
      requestData.method = method || "post";
    }
    axiosInstance({ isApijson, other })(requestData).then(resolve).catch(err => {
      if (!hideErrorMessage) {
        message.error(err)
      }
      reject(err)
    })
  });
}

function ajax ({
  queryportAppSecert,
  queryportAppkey,
  baseURL
}) {
  ajaxConfig.baseURL = baseURL;
  ajaxConfig.queryportAppSecert = queryportAppSecert;
  ajaxConfig.queryportAppkey = queryportAppkey;
  return http
}

export default ajax;