<template>
	<view class="container">
		<view class="selGysDiv" v-if="gysStatus">
			<view class="selContent" @click="toggle('bottom')">
				<view class="selWd">
					切换经销商
				</view>
				<view class="selGysName">︵
				<text>{{gysname}}</text>︶</view>
			</view>
			<view class="selBottom"></view>
		</view>
		<view class="login-icon">
			  <block v-if="gysdataslist.gysLoginUrl">
				<image class="login-img" mode="widthFix" :src="gysdataslist.gysLoginUrl"></image>
			  </block>
			  <block v-else>
				<image class="login-img" mode="widthFix" src="../../static/image/logo.png"></image>
			  </block>
		</view>	
		<view class="gysname" v-if="gysStatus">{{gysname}}</view>
		<view class="list">
			<image class="icon_n1" src="../../static/image/login_username.png"></image>
			<input type="text" placeholder="手机号" maxlength="11" />
			<image class="icon-guanbi" src="../../static/image/close.png"></image>
		</view>
		<view class="list">
			<image class="icon_n2" src="../../static/image/login_locked.png"></image>
			<input type="password" placeholder="密码"/>
			<image class="icon-guanbi" src="../../static/image/close.png"></image>
		</view>
		<view class="position">
			<view class="forget_password">忘记密码</view>
		</view>
		 <button size="large" class='loginbtn'>登录</button>
		<uni-popup ref="popup" :type="type" :animation="false" @change="change">
			<view class="popup-content" v-for="(item,index) in gysarr" :key="index" @click="selectgys(item)">
				{{item.organizationName}}
			</view>
			
		</uni-popup>
	</view>
</template>

<script>
	import { getOrgListByMobile } from '../../api.js';
	import {uniBadge} from '@dcloudio/uni-ui';
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniBadge,
			uniPopup
		},
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				type: 'top',
				gysarr:[],
				gysStatus:true,
				gysname:'',
				gys_no:null,
				gysdataslist:{},
				userphone:'',
			}
		},
		mounted:function(){
			this.clickTest();
		},
		methods: {
			toggle(type) {
				console.log(type);
				this.type = type
				this.$refs.popup.open()
			},
			change(e) {
				console.log('popup ' + e.type + ' 状态', e.show)
			},
			selectgys(val){
				console.log(val);
				this.$refs.popup.close();
				this.gysname=val.organizationName;
				this.gys_no=val.organizationNo;
				this.gysdataslist =val;
			},
			clickTest(){
				console.log(11111)
				var params = {
						  url:getOrgListByMobile,
						  method:'POST',
						  data:{
							  mobile:'18674022930'
						  }				          
				        }						
				this.$myRequest(params).then(res=>{
					console.log(res,444444444444444);					
				if(res.statusCode == 200){
					  this.gysarr = res.data.data;
					  console.log(this.gysarr);		
				  }
				}) 
						
				// uni.switchTab({
				//     url: '../home/index'
				// });
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		
	}
	.selGysDiv {
	    position: fixed;
	    top: 0;
	    right: 0;
	    width: 60px;
	    background: #1E90FF;
	    height: max-content;
	}
	
	
	.selBottom {
	    width: 0;
	    height: 0;
	    border-top: 20px solid #1E90FF;
	    border-right: 25px solid white;
	    border-bottom: 40px solid white;
	    border-left: 35px solid white;
	}
	
	.selContent {
	    height: max-content;
	    overflow: hidden;
	    color: #fff;
	    padding: 8px 8px 5px;
	}
	
	.selWd {
	    border: 1px solid white;
	    font-size: 13px;
	    float: left;
	    width: 20px;
	    text-align: center;
	    word-break: break-all;
	}
	
	.selGysName {
	    float: right;
	    width: 11px;
	    font-size: 11px;
	    word-break: break-word;
	    line-height: 12px;
	    text-align: center;
	}
	.login-icon{
	  width: 160rpx;
	  height: 160rpx;
	  margin: 0 auto;
	  margin-top: 150rpx;
	  margin-bottom:30rpx;
	}
	.login-img{
	  width: 160rpx;
	  height: 160rpx;
	  /* border-radius: 110rpx; */
	  /* opacity: 0.6; */
	}
	.gysname{
	  width:100%;
	  height:40px;
	  line-height: 40px;
	  text-align: center;
	  color:#1E90FF;
	  font-size: 13px;
	}
	.list {
	    display: flex;
	    -webkit-box-orient: horizontal;
	    -moz-box-orient: horizontal;
	    -ms-box-orient: horizontal;
	    -o-box-orient: horizontal;
	    box-orient: horizontal;
	    position: relative;
	    margin-top: 1.71875rem;
	    border-bottom: 1px solid #1e90ff;
	}
	
	.list image {
	    margin-right: 10px;
	    margin-top: 8px;
	    width: 20px;
	    height: 20px;
	    display: inline-block;
	}
	.list input {
	    flex: 1;
	    display: block;
	    border: none;
	    height: 40px;
	    line-height: 40px;
	    outline: none;
	    font-size: 0.875rem;
	    background: none;
	}
	.position {
	    width:100%;
	    height:40px;
	    line-height: 40px;
	    text-align: right;
	}
	.forget_password {
	    width:100%;
	    height:40px;
	    color: #1e90ff;
	    font-size: 12px;
	}
	.loginbtn{
	  background:#1E90FF;
	  color:#fff;
	  width:100%;
	  height:40px;
	  border-radius: 20px;
	  font-size: 15px;
	}
	.popup-content {
		width:100%;
		height:40px;
		line-height: 40px;
		background-color: #fff;
		font-size: 14px;
		border-bottom: 1px solid #eee;
		text-align: center;
	}
</style>
