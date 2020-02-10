import axios from 'axios';
import * as qs from 'qs';
import md5 from "js-md5";

const ajaxConfig = {
  queryportAppSecert: null,
  queryportAppkey: null,
  queryportAppType: null,
  baseURL: null
}

const wrapInterceptors = (http, { isApijson, requestInterceptors, responseInterceptors, other }) => {
  // 请求拦截
  http.interceptors.request.use(req => {
    // get请求
    if (req.method === "get" && !isApijson) {
      req.params = { ...req.data }
    }
    if (requestInterceptors) requestInterceptors(req, { isApijson });
    return req;
  });
  // 响应拦截
  http.interceptors.response.use(res => {
    const { data } = res;
    return Promise.resolve({ data });
  }, (error) => {
    return Promise.reject(JSON.stringify(error))
  });
  return http;
}
function axiosInstance ({ isApijson, other, requestInterceptors, responseInterceptors }) {
  return wrapInterceptors(axios.create({
    baseURL: ajaxConfig.baseURL,
    timeout: 30000,
    withCredentials: true,
  }), { isApijson, requestInterceptors, responseInterceptors, other });
}


function http ({
  url,
  method,
  isFormData = false,
  isFileUpload = false,
  data,
  params,
  isApijson = false,
  ...other
}, requestInterceptors, responseInterceptors) {
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
      const { queryportAppSecert, queryportAppkey, queryportAppType } = ajaxConfig;
      const sign = md5(`${queryportAppSecert}:${JSON.stringify(data)}:${queryportAppSecert}`);
      requestData.url = `${url}?appkey=${queryportAppkey}&sign=${sign}&appType=${queryportAppType}`;
      requestData.method = method || "post";
    }
    axiosInstance({ isApijson, requestInterceptors, responseInterceptors, other })(requestData).then(resolve).catch(reject)
  });
}

function ajax ({
  queryportAppSecert,
  queryportAppkey,
  queryportAppType,
  baseURL
}) {
  ajaxConfig.baseURL = baseURL;
  ajaxConfig.queryportAppSecert = queryportAppSecert;
  ajaxConfig.queryportAppkey = queryportAppkey;
  ajaxConfig.queryportAppType = queryportAppType;
  return http
}

export default ajax;