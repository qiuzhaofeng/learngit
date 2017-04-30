<template>
	<div id="others">
		<h3>我是其他</h3>
		<ul>
			<li v-for='(val,index) in others'>{{val}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'others',
		data(){
			return {
				others:['1','2','3','4']
			}
		}
	}
</script>
<style scoped lang='less'>
	#others{
		width: 300px;
		height: 300px;
		margin: 0 auto;
		background-color: red;
	}
</style>
