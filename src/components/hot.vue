<template>
	<div id="hot">
		<div id="header">
			<div class="head">
				<span></span>
	  		<span>热门</span>
	  		<span class="glyphicon glyphicon-search"></span>
			</div>
		</div>
		<ul id="hot_list">
			<li v-for="hot in hots" class="hot_list_li">
				<div class="listimg">
					<img :src="hot.data.cover_image_url"/>
				</div>
				<div class="hot_name">
					{{hot.data.name}}
				</div>
				<div class="hot_like">
					<span class="hotprice">￥{{hot.data.price}}</span>
					<span class="hotprice">♡{{hot.data.favorites_count}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
	  data() {
	    return {
	      hots: {}
	    }
	  },
	  created() {
	    this.$http.get('/api/hot').then(function(response) {
        response = response.body
        if (response.errno === 0) {
          this.hots = response.data.items
        }
      })
	  }
	}
</script>

<style lang="scss">
#hot{
	background:#EDEFDF;
}
ul{
	list-style: none;
}
ul#hot_list{
	width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  .hot_list_li{
  	width:48%;
  	height:8rem;
  	margin-top:0.35rem;
  	border:1px solid #ccc;
  	.listimg{
  		width: 100%;
  		img{
  			width: 100%;
  		}
  	}
  	.hot_name{
  		font-size: 0.4rem;
  		margin-top: 0.3rem;
  		height:1rem;
  		overflow: hidden;
  	}
  	.hot_like{
  		width: 90%;
  		margin: 0.5rem 5%;
  		display: flex;
  		justify-content: space-between;
  		.hotprice{
  			font-size: 0.4rem;
  			line-height: 0.8rem;
  			margin-bottom: 0.1rem;
  		}
  		.hotprice:nth-child(1){
  			color:red;
  		}
  	}
  }
}
</style>
