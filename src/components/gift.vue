<template>
	<div id="singlegift">
		<div id="header">
			<div class="head">
				<span></span>
	  		<span><a class="aa" href="#/classify">攻略</a><a class="aa" href="#/gift">礼物</a></span>
	  		<span class="glyphicon glyphicon-search"></span>
			</div>
		</div>
		<ul class="left_list">
			<li v-for="(listname,index) in gift" v-bind:class="{'aside':nn==index}" v-on:click="nn=index">
				{{listname.name}}
			</li>
		</ul>
		<div class="right_list1">
			<ul class="right_list" v-for="listname in gift">
				<h4>{{listname.name}}</h4>
				<li v-for="msg in listname.subcategories">
					<img :src="msg.icon_url"/>
					<p>{{msg.name}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        gift: {},
        nn: 0
      }
    },
    created() {
      this.$http.get('/api/gift').then(function(response) {
        response = response.body
        if (response.errno === 0) {
          this.gift = response.data.categories
        }
      })
    }
  }
</script>

<style lang="scss">
@import '../common/scss/common.scss';
.left_list{
	width: 30%;
	margin-top: 1.5rem;
	float: left;
	position: fixed;
  height: 14.7rem;
  overflow: scroll;
	li{
		background: #EDEFDF;
		text-align: center;
		width:100%;
		line-height: 1.3rem;
		font-size: 0.45rem;
	}
}
.aside{
	border-left: 2px solid red;
	color:red;
	background: #fff!important;
}
.right_list1{
	position: fixed;
  height: 14.7rem;
  overflow: scroll;
  margin-top: 1.5rem;
}
.right_list{
	width: 70%;
	margin-top: 0.8rem;
	float: right;
	h4{
		width: 100%;
		text-align: center;
		font-size: 0.55rem;
	}
	li{
		width: 33%;
		float:left;
		height:3rem;
		img{
			width: 80%;
		}
		p{
			width: 100%;
			font-size: 0.3rem;
			line-height: 0.8rem;
			text-align: center;
			overflow: hidden;
		}
	}
}
</style>
