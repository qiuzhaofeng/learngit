<template>
	<div id="dialogs">
		<!-- 第一个模态框 -->
		<div :class="{dialog1:true}" v-show="dialog1.a">
			<div :class="{info:true}">
				<div :class="{infoDetail:true}">{{dialog1.infoDetail}}</div>
				<div :class="{close:true}" @click="close1()">{{dialog1.close}}</div>
			</div>
			<div :class="{main:true}"> 
				<div :class="{top:true}">
					<div :class="{time:true}">{{dialog1.time}}</div>
					<input type="button" value="警告">
				</div>
				<h3>{{dialog1.h3}}</h3>
				<p>{{dialog1.detail}}</p>
			</div>
			<input type="button" value="知道了" @click="know()"> 
		</div>
		<!-- 第二个模态框 -->
		<div :class="{dialog2:true}"  v-show="dialog2.a">
			<div :class="{info:true}">
				<div :class="{infoDetail:true}">{{dialog2.infoDetail}}</div>
				<div :class="{close:true}" @click="close2()">{{dialog2.close}}</div>
			</div>
			<div :class="{main:true}">
				<div :class="{base:true}" v-for="(value,key) in dialog2.myModule">
					<div :class="{top:true}">
						<div :class="{baseInfo:true}">基本信息</div>
						<input type="checkbox" :checked='key==0'>
					</div>
					<div :class="{close:true}">{{dialog2.myData[0]}}</div>
					<div :class="{leave:true}">{{dialog2.myData[1]}}</div>
					<div :class="{fact:true}">{{dialog2.myData[2]}}</div>
					<div :class="{now:true}">{{dialog2.myData[3]}}</div>
				</div>
			</div>
			<input type="button" value="取消" @click='cancel()'>
			<input type="button" value="确定">
		</div>
	</div>
</template>
<script>
	export default{
		name:'dialogs',
		props: ['h','m'],
		data(){            
			return {
				dialog1: {
					a:true,
					infoDetail:'信息详情',
					close :'X',
					time:(new Date(new Date().getTime()).getMonth()+1)+'-'+new Date(new Date().getTime()).getDate()+':',
					h3:this.h,
					detail:this.m
				},
				dialog2: {
					a:true,
					infoDetail:'信息详情',
					close :'X',
					myData:[300,54,450,1120],
					myModule:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
				}				
			}
		},
		methods:{
			close1() {
				this.dialog1.a=false;
			},
			close2() {
				this.dialog2.a=false;
			},
			know() {
				alert(1)
			},
			cancle() {

			}
		}
	}
</script>
<style scoped lang='less'>
	#dialogs {
		width: 1280px;
		height: 600px;
		margin: 0 auto;
		background-color: #f5f7fc;
		position: relative;
		/*第一个模态框*/
		.dialog1 {
			width: 410px;
			height: 280px;
			background-color: #fff;
			position: absolute;
			left: 20px;
			top: 210px;
			box-shadow:0 0 10px #d8dde0;
			border-radius: 5px;
			.info {
				width: 100%;
				height: 40px;
				color: #5c5c5c;
				border-bottom: 1px solid #e8ebf0;
				.infoDetail {
					float: left;
					margin-left: 10px;
					margin-top: 10px;
					text-align: left;
				}
				.close {
					float: right;
					margin-top: 10px;
					margin-right: 12px;
					color: #848484;
					cursor: pointer;
					&:hover{
						color: #555555;
					}
				}
			}
			.main {
				width: 100%;
				height: 180px;
				background-color: #f9fafc;
				border-bottom: 1px solid #e8ebf0;
				.top {
					height: 36px;
					.time {
						float: left;
						margin-left: 22px;
						margin-top: 17px;
					}
					input {
						float: left;
						margin-left: 15px;
						margin-top: 13px;
						border: 1px solid #ffceb9;
						border-radius: 2px;
						width: 38px;
						height: 22px;
						background-color: #fff3ec;
						color: #ff530f;
						outline-style: none;
					}
				}
				h3 {
					font-size: 13px;
					margin: 0 0 0 22px;
					padding: 0;
					color: #333333;
					text-align: left;
				}
				p {
					width: 360px;
					color: #666666;
					margin-top: 5px;
					margin-left: 22px;
					text-align: left;
				}
			}
			input {
				width: 100px;
				height: 32px;
				background-color: #1f7cce;
				border:1px solid #266dab;
				border-radius: 3px;
				color: #fff;
				margin-top: 14px;
				cursor: pointer;
				outline-style: none;
				&:hover {
					background-color:#206db4;
				}
			}
		}
		/*第二个模态框*/
		.dialog2 {
			width: 700px;
			height: 540px;
			background-color: #fff;
			position: absolute;
			left: 560px;
			top: 20px;
			box-shadow:0 0 10px rgb(216, 221, 214);
			border-radius: 5px;
			.info {
				width: 100%;
				height: 40px;
				color: #5c5c5c;
				border-bottom: 1px solid #e8ebf0;
				.infoDetail {
					float: left;
					margin-left: 10px;
					margin-top: 10px;
					text-align: left;
				}
				.close {
					float: right;
					margin-top: 10px;
					margin-right: 12px;
					color: #848484;
					cursor: pointer;
					&:hover{
						color: #555555;
					}
				}
			}
			.main {
				width: 100%;
				height: 435px;
				background-color: #f9fafc;
				border-bottom: 1px solid #e8ebf0;
				overflow-y: scroll;
				.base {
					float: left;
					width: 204px;
					height: 210px;
					background-color: #f0f2f7;
					margin-left: 23px;
					margin-top: 20px;
					overflow: hidden;
					.top {
						overflow: hidden;
						margin-bottom: 15px;
						.baseInfo {
							float: left;
							font-size: 16px;
							margin-left: 16px;
							margin-top: 15px;
							color: #798194;
						}
						input[type='checkbox'] {
							float: right;
							width: 20px;
							height: 20px;
							border: 1px solid #ccc;
							margin-top: 12px;
							margin-right: 12px;
							background-color: #fff;
							outline-style: none;
						}
					}
					.close,.leave,.fact,.now {
						width: 72px;
						height: 60px;
						float: left;
						margin-left: 20px;
						margin-bottom: 20px;
						background-color: #fff;
						border-radius: 2px;
						font-size: 16px;
						line-height: 60px;
						color: #798194;
						position: relative;
						&:before {
							content:'';
							position: absolute;
							width: 20px;
							height: 20px;
							border-radius: 50%;
							background-color: red;
							left: -6px;
							top: -8px;
							color: #fff;
							font-size: 12px;
							line-height: 20px;
						}
					}
					.close {
						color:#f9715a;
					}
					.close:before{
						content:'关';
						background-color: #fd985b;
					}
					.leave:before{
						content:'离';
						background-color: #99dc83;
					}
					.fact:before{
						content:'实';
						background-color: #81b1e9;
					}
					.now:before{
						content:'正';
						background-color: #5ad3a4;
					}
				}
			}
			input[type='button'] {
				width: 100px;
				height: 32px;
				position: absolute;
				bottom: 13px;
				border-radius: 3px;
				outline-style: none;
				&:nth-of-type(1){					
					right: 130px;
					background-color: #f6f6f6;
					border: 1px solid #d3d3d3;
					color: #666;
					&:hover {
						background-color:#e8e8e8;
					}
				}
				&:nth-of-type(2){
					right: 20px;
					background-color: #1f7cce;
					border: 1px solid #266dab;
					color: #fff;
					&:hover {
						background-color:#206db4;
					}
				}
			}
		}
	}
</style>