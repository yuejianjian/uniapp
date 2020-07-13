const commonUrl = "https://wx.dh.kxp1688.com"; //公共路径 

export const myRequest =( options) =>{
	console.log(options);
	return new Promise((resolve,reject)=>{
		uni.request({
			url:options.url,
			method:options.method || 'GET',
			data:options.data || {},
			header: {
				"content-type": "application/json",			
				'isStockOpen':'Y'
			},
			success:(res) =>{
				console.log(res)
				if(res.statusCode !=200){
					return uni.showToast({
						title:'获取数据失败'
					})
				}
				resolve(res)
			},
			fail:(err) =>{
				console.log(err)
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			}
		})
	})
}





// // post请求封装
// function postRequest(url, data) {
// 	console.log(url);
// 	console.log(data);
//     var promise = new Promise((resolve, reject) => {
//         var that = this;
//         var postData = data;
//         uni.request({
//             url: url,
//             data: Object.assign({}, postData),
//             method: "POST",
//             header: {
//                 "content-type": "application/json",
//                 "Cookie": uni.getStorageSync("token"),
// 				'isStockOpen':'Y'
//             },
//             success: function(res) {
//                 //返回什么就相应的做调整
//                 if (res.statusCode == 200) {
//                     resolve(res.data);
//                 } else {
//                     // 请求服务器成功，但是由于服务器没有数据返回，此时无code。会导致这个空数据
//                     //接口后面的then执行
//                     // 不下去，导致报错，所以还是要resolve下，这样起码有个返回值，
//                     //不会被阻断在那里执行不下去！
//                     resolve(res.data.msg);
//                 }
//             },
//             error: function(e) {
//                 reject("网络出错");
//             }
//         });
//     });
//     return promise;
// }

// // get请求封装
// function getRequest(url, data) {
//     var promise = new Promise((resolve, reject) => {
//         var that = this;
//         var postData = data;
//         uni.request({
//             url: commonUrl + url,
//             data: postData,
//             method: "GET",
//             dataType: "json",
//             header: {
//                 "content-type": "application/json"
//             },
//             success: function(res) {
//                 if (res.statusCode == 200) {
//                     resolve(res.data);
//                 } else {
//                     resolve(res.data);
//                 }
//             },
//             error: function(e) {
//                 reject("网络出错");
//             }
//         });
//     });
//     return promise;
// }

// module.exports = {
//     post: postRequest,
//     get: getRequest
// };
