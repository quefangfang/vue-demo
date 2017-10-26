import axios from 'axios'
import store from '../../store/store'
// axios.defaults.baseURL = 'http://localhost:8091/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 5000;

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  // config.headers.Authorization = token;
  store.dispatch('loadingShow');
  return config;
},(error) =>{
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
  //对响应数据做些事
  console.log("添加响应拦截器")
    setTimeout(function(){
      store.dispatch('loadingHide');
    },500);
  return res;
}, (error) => {
  return Promise.reject(error);
});

export default function (Vue) {
	Vue.mixin({
		created: function () {
			var _this = this;
			_this.axios = function(type,url,params,sfn,efn){
				var opts = {
					method: type,
					url: url,
					headers: {
						'X-Requested-With': 'XMLHttpRequest'
					}
				};
				if (type == 'post'){
					opts.data = JSON.stringify(params);
				}else if(type == 'get'){
					opts.params = params;
				}
				axios(opts).then(
					(response) => {
						if(response.status == 200){
							sfn && sfn(response)
						}else{
							efn && efn(result.msg);
						}
					}, (err) =>{
					}
				)
			};
		}
	})
}
