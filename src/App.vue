<template>
  <!--<div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>-->
  <div id="app">
		<ul id="footer">
			<li>
				<a href="#/" v-bind:class="{'aclick':num==0}" v-on:click="num=0">
					<span class="glyphicon glyphicon-dashboard"></span>
					<p>礼物说</p>
				</a>
			</li>
			<li>
				<a href="#/hot" v-bind:class="{'aclick':num==1}" v-on:click="num=1">
					<span class="glyphicon glyphicon-gift"></span>
					<p>热门</p>
				</a>
			</li>
			<li>
				<a href="#/classify" v-bind:class="{'aclick':num==2}" v-on:click="num=2">
					<span class="glyphicon glyphicon-file"></span>
					<p>分类</p>
				</a>
			</li>
			<li>
				<a href="#/mine" v-bind:class="{'aclick':num==3}" v-on:click="num=3">
					<span class="glyphicon glyphicon-user"></span>
					<p>我</p>
				</a>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  }
}
</script>

<style lang="scss">
@import './common/scss/common.scss';
#footer{
	width: $width;
	height:$height*1.5;
	background: $redcolor+#02ffd0;
	border:0.01rem solid #ccc;
	display: $display;
	justify-content: space-around;
	align-items: center;
	font-size: $fontsize;
	position: fixed;
	bottom:0;
	li{
		width: $width*15/100;
		text-align: $center;
		a{
			color:#81827A;
		}
	}
}
.aclick{
	color:$redcolor!important;
}

</style>
