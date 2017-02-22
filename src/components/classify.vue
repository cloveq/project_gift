<template>
	<div id="classify">
		<div id="header">
			<div class="head">
				<span></span>
	  		<span><a class="aa" href="#/classify">攻略</a><a class="aa" href="#/gift">礼物</a></span>
	  		<span class="glyphicon glyphicon-search"></span>
			</div>
		</div>
		<!--专题-->
		<div class="collections">
			<p>专题<span>查看全部></span></p>
		</div>
		<div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="data in collection">
        	<img :src="data.banner_image_url"/>
        </div>
      </div>
    </div>
    <!--品类-->
    <div class="channel" v-for="data1 in channel">
    	<p class="channel_title">{{data1.name}}<span>查看全部></span></p>
    	<ul class="channel_list">
    	<li v-for="(data2,index) in data1.channels" v-if="index<=5">
    		<img :src="data2.cover_image_url"/>
    	</li>
    </ul>
    </div>
    
	</div>
</template>
<script>
  import Swiper from '../../static/swiper.min.js'
  require('../../static/swiper.min.css')
  export default {
    mounted() {
/* eslint-disable no-new */
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        observer: true
    })
    },
    data() {
      return {
        collection: {},
        channel: {}
      }
    },
    created() {
      this.$http.get('/api/collection').then(function(response) {
        response = response.body
        if (response.errno === 0) {
          this.collection = response.data.collections
        }
      })
      this.$http.get('/api/channel').then(function(response) {
        response = response.body
        if (response.errno === 0) {
//      console.log(response.data.channel_groups[0].channels)
          this.channel = response.data.channel_groups
        }
      })
    }
  }
</script>

<style lang="scss">
#classify{
	background: #fff;
}	
.aa{
	font-size: 0.5rem;
	margin-left: 0.5rem;
	padding-bottom: 0.1rem;
	color:#fff;
}
.collections{
	margin-top: 1.5rem;
	p{
		width: 95%;
		margin: 0 2.5%;
		font-size: 0.5rem;
		line-height: 1.5rem;
		span{
			float:right;
			font-size: 0.4rem;
		}
	}
}
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height:1.7rem;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  img{
  	height: 100%;
  	width: 100%;
  }
}   
.subtitle{
  	position: absolute;
  	top:40%;
  	z-index: 200;
  	font-size: 0.35rem;
  	background: rgba(255,255,255,0.6);
  	width: 100%;
  	height:0.5rem;
  	left:0;
} 
/*品类*/
.channel{
	margin: 0.4rem 2.5%;
	width: 95%;
	.channel_title{
		font-size: 0.5rem;
		span{
			float: right;
			font-size: 0.4rem;
		}
	}
}
.channel_list{
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 0.3rem;
	li{
		width: 49%;
		margin-bottom: 0.3rem;
		img{
			width: 100%;
		}
	}
}
</style>
