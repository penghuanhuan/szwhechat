const baseURL = ''

// create an axios instance
const service = axios.create({
  baseURL: baseURL, // api 的 base_url
  timeout: 600000, // request timeout
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  responseType: 'text'
})

// request interceptor
// service.interceptors.request.use(
//   config => {
//     // Do something before request is sent
//     if (store.getters.token) {
//       config.headers['Token'] = getToken();
//     }
//     return config;
//   },
//   error => {
//     // Do something with request error
//     Promise.reject(error);
//   }
// );
service.defaults.retry = 4
service.defaults.retryDelay = 10000000
// response interceptor
service.interceptors.response.use(
  response => {
    const data = response.data
    if (typeof data === undefined || data === 'null' || data === null) {
      return Promise.resolve(null)
    } else {
      if (typeof data === 'string') {
        if (data.indexOf('error_respone') < 0) {
          return Promise.resolve(data)
        } else {
          const result = eval('(' + data + ')')
          const errorObj = { Code: 65535, Msg: result.error_respone.errMsg }
          return Promise.reject(errorObj)
        }
        //   return Promise.resolve(data)
        // } else {
        //   const result = eval('(' + data + ')');
        //   if (result.error_response.Msg.indexOf('失效: 无效的用户安全标识,或登录已过期') > 0) {
        //     router.push('login')

        //   } else {
        //     return Promise.reject(result.error_response);
        //   }
        // }
      } else {
        if (JSON.stringify(data).indexOf('error_respone') > 0) {
          const errorObj = {
            Code: 65535,
            Msg: data.error_respone.errMsg
          }
          return Promise.reject(errorObj)
        }
        return Promise.resolve(data)
      }
    }
  },
  // 服务异常捕获
  err => {
    let errorObj = {}
    if (!err.response) {
      errorObj.Msg = '网络异常，请检查！'
    } else {
      errorObj = {
        Code: err.response.data.error_respone.errCode,
        Msg: err.response.data.error_respone.errMsg
      }
    }
    return Promise.reject(errorObj)
  }
  // error => {
  //   let config = error.config;
  //   config.baseURL = '';
  //   const errorObj = { Code: 65535, Msg: error.message, httpError: error };
  //   if (!config || !config.retry) return Promise.reject(errorObj);
  //   config.__retryCount = config.__retryCount || 0;
  //   if (config.__retryCount >= config.retry) {
  //     // Reject with the error
  //     return Promise.reject(errorObj);
  //   }
  //   config.__retryCount += 1;
  //   let backoff = new Promise(function (resolve) {
  //     setTimeout(function () {
  //       resolve();
  //     }, config.retryDelay || 1);
  //   });
  //   return backoff.then(function () {
  //     return service(config);
  //   });
  //   // return Promise.reject(errorObj);
  // }
)

export default service
