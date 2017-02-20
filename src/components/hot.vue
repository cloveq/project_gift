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
					<span>￥{{hot.data.price}}</span>
					<span>♡{{hot.data.favorites_count}}</span>
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

<style">
#hot{
	background:#EDEFDF;
}
ul#hot_list{
	width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .hot_list_li{
  	width:49%;
  	height:7rem;
  	margin-top:1rem;
  	border:1px solid red;
  }
}
</style>
