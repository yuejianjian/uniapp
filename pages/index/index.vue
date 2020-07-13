<template>
	<view class="container">
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<view @click="clickTest">跳转</view>
		<uni-badge text="1"></uni-badge>
		<uni-badge text="2" type="success" @click="bindClick"></uni-badge>
		<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
		<view class="example-body message">
			<button class="button" type="primary" @click="toggle('bottom')"><text class="button-text">底部弹出</text></button>
		</view>
		<uni-popup ref="popup" :type="type" :animation="false" @change="change">
			<view class="popup-content">popup 内容，此示例没有动画效果</view>
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
			}
		},
		
		methods: {
			toggle(type) {
				this.type = type
				this.$refs.popup.open()
			},
			change(e) {
				console.log('popup ' + e.type + ' 状态', e.show)
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
				if(res.data.code == 200){
					  this.goods = that.data.goods.concat(res.data.data)
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
	.popup-content {
		background-color: #fff;
		padding: 15px;
	}
</style>
