<template>
<div id="home">
	<!--header-->
	<div id="header">
		<div class="head">
			<span class="glyphicon glyphicon-briefcase"></span>
			<span>礼物说</span>
			<span class="glyphicon glyphicon-search"></span>
		</div>
	</div>
	<!--精选nav-->
	<div class="home_nav">
		<ul class="nav" v-if="seen">
			<li v-for="(name,index) in lists" v-bind:class="{'nav_click':n==index}" v-on:click="n=index"><a>{{name.name}}</a></li>
		</ul>
		<span class="triangle" v-on:click="show">▼</span>
		<ul class="nav2" v-if="seen==false">
			<li v-for="(name,index) in lists" v-bind:class="{'nav_click':n==index}" v-on:click="n=index"><a>{{name.name}}</a></li>
		</ul>
	</div>
	<!--轮播1-->
	<div class="swiper-container banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide banner2" v-for="img in banner"><img :src="img.image_url" /></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
	</div>
	<!--中间列表-->
	<ul class="ul_list">
		<li v-for="img2 in banner2"><a href=""><img :src="img2.image_url" /></a></li>
	</ul>
	<!--精选推荐-->
	<ul class="rec_list">
		<li v-for="item in home">
			<a :href="item.url">
				<div class="profilephoto">
					<div class="headimg">
						<img src="../assets/img1.jpg"/>
					</div>
					<div class="right_name">
						<p>小礼君</p>
						<p>资深买买买达人</p>
					</div>
				</div>
				<div class="rec_image">
					<img :src="item.cover_image_url"/>
				</div>
				<p class="title">{{item.title}}</p>
				<p class="min_title">{{item.introduction}}</p>
				<div class="rec_bottom">
					<span class="like">栏目 万能礼物清单</span>
					<span class="like">♡{{item.likes_count}}</span>
				</div>
			</a>
			
		</li>
	</ul>
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
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true,
        observer: true
      })
    },
    data() {
      return {
        banner: {},
        banner2: {},
        home: {},
        seen: true,
        n: 0,
        lists: [
          {name: '精选'},
          {name: '海淘'},
          {name: '送女票'},
          {name: '创意生活'},
          {name: '送基友'},
          {name: '送父母'}
        ]
      }
    },
    created() {
      this.$http.get('/api/banner1').then(function(response) {
        response = response.body
        if (response.errno === 0) {
          this.banner = response.data.banners
        }
      })
      this.$http.get('/api/banner2').then(function(response) {
        response = response.body
        if (response.errno === 0) {
          this.banner2 = response.data.secondary_banners
        }
      })
      this.$http.get('/api/home').then(function(response) {
        response = response.body
        if (response.errno === 0) {
          this.home = response.data.items
        }
      })
    },
    methods: {
      show: function () {
        if (this.seen) {
          this.seen = false
        } else {
          this.seen = true
        }
      }
    }
  }
</script>
<style lang="scss">
@import '../common/scss/common.scss';
	#home{
		background: #EDEFDF;
	}
	.nav_click{
		border-bottom: 2px solid $redcolor;
		a{
			color:$redcolor!important;
		}
	}
	#header{
	width: $width;
	height:$height*1.5;
	background: $redcolor;
	color:$redcolor+#02ffd0;
	position: fixed;
	z-index: 100;
	top:0;
		.head{
			line-height: $height*1.5;
			width: $width*0.9;
			margin: 0 auto;
			display: $display;
			justify-content: space-between;
			align-items: center;
		}
	}
	.home_nav{
		position: fixed;
		top:1.5rem;
		z-index: 100;
		.nav{
			background: #fff;
			white-space: nowrap;
			overflow-x: scroll;
			width: 95vw;
			line-height:$height;
			font-size: $fontsize;
			display: flex;
			position: fixed;
			top:$height*1.5;
			li{
				padding:4px 3px;
				font-size: 0.45rem;
				a{
					color:#000;
				}
			}
		}
		.nav2{
			background: #fff;
			width: 100vw;
			display: flex;
			justify-content: flex-start;
			margin-top: 1rem;
			flex-wrap: wrap;
			li{
				border:1px solid #ccc;
				line-height: 0.8rem;
				width: 25%;
				text-align: center;
				box-sizing: border-box;
				a{
					color:#000;
					font-size: 0.4rem;
				}
			}
		}
		.triangle{
				position: fixed;
				right:0;
				display: inline-block;
				/*height:$height;*/
				background: #fff;
				padding: 0.3rem 0.3rem;
				font-size: 0.5rem;
			}
	}
	.banner{
		 margin-top: 2.5rem;
	}
	.banner2{
		height:5rem!important;
	}
	.swiper-container {
	  width: 100%;
	  height: 100%;
	  .swiper-slide {
	  text-align: center;
	  font-size: 18px;
	  background: #fff;
		
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
			width: 100%;
		}
	}
	.swiper-pagination-bullet{
		width: 0.2rem;
		height:0.2rem;
	}
}
.ul_list{
	margin-top: 0.3rem;
	width: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	li{
		width: 33.3%;
		img{
			width: 95%;
		}
	}
}	
.rec_list{
	width: $width;
	li{
		background: #fff;
		width: $width;
		margin-top: 0.2rem;
		.profilephoto{
			display: flex;
			width: $width;
			height:$height*2;
			.headimg{
				margin-top: -0.8rem;
				margin-left: -0.2rem;
				width: 3.5rem;
				img{
					width: $width;
				}
			}
			.right_name{
				font-size: 0.5rem;
				color:#000;
				margin-left: -0.8rem;
				p{
					margin-top: 0.3rem;
				}
				p:nth-child(2){
					font-size: 0.35rem;
				}
			}
		}
		.rec_image{
			width: $width;
			img{
				width: $width;
			}
		}
		p.title{
			width: 100vw;
			font-size: 0.7rem;
	    color: #000;
	    text-indent: 0.3rem;
	    line-height: 1rem;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    /*盒子模型*/
	    /*display: -webkit-box;*/
	    /*显示的文本行数*/
	    /*-webkit-line-clamp: 2;*/
	    /*子元素的垂直排列方式*/
	    /*-webkit-box-orient: vertical;*/
		}
		p.min_title{
			width: 100vw;
			font-size: 0.4rem;
	    color: #000;
	    text-indent: 0.3rem;
	    line-height: 0.8rem;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    /*盒子模型*/
	    /*display: -webkit-box;*/
	    /*显示的文本行数*/
	    /*-webkit-line-clamp: 2;*/
	    /*子元素的垂直排列方式*/
	    /*-webkit-box-orient: vertical;*/
		}
		.rec_bottom{
			width: $width;
			display: flex;
			justify-content: space-between;
			height:1rem;
			border-top: 1px solid #ccc;
			span.like{
				font-size: 0.35rem;
		    text-indent: 0.3rem;
		    line-height: 0.8rem;
		    color:#000;
			}
			span.like:nth-child(2){
				margin-right: 0.5rem;
			}
		}
	}
}
</style>
