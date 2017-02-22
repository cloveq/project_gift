<template>
	<div id="mine">
		<div class="login">
			<img src="../assets/img6.jpg" class="head_img"/>
			<p class="pp">注册登录</p>
			<div class="tel">
				<span class="glyphicon glyphicon-phone"></span>
				<p>+86 <input type="text" placeholder="输入手机号" /></p>
			</div>
			<p class="pwd">
				<span class="glyphicon glyphicon-lock"></span>
				<input type="password" placeholder="输入密码"/>
			</p>
			<button>确定</button>
			<div class="login_code">使用验证码登录</div>
			<div class="login_soc">使用社交账号登录</div>
			<div class="login_img">
				<img src="../assets/img3.jpg"/><img src="../assets/img4.jpg"/><img src="../assets/img5.jpg"/>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
	}
</script>

<style lang="scss">
	.login{
		width: 100%;
		.head_img{
			width: 25%;
			margin-top: 2rem;
			margin-left: 38%;
		}
		.pp{
			font-size: 0.5rem;
			margin: 0 40%;
		}
		.tel{
			display: flex;
			margin: 0.5rem 20%;
			p{
				font-size: 0.5rem;
				border-bottom: 1px solid #000;
				margin-left: 0.3rem;
				width: 4.6rem;
			}
			input{
				border:none;
				outline: none;
				font-size: 0.5rem;
				width: 3rem;
				line-height: 0.8rem;
			}
		}
		.pwd{
			margin: 0.5rem 20%;
			input{
				width: 4.6rem;
				font-size: 0.5rem;
				border:none;
				outline: none;
				border-bottom:1px solid #000;
				line-height: 0.8rem;
			}
		}
		button{
			width: 70%;
			line-height:1rem;
			text-align: center;
			background: #EAC87B;
			color:#fff;
			border:none;
			font-size: 0.5rem;
			margin: 0 15%;
		}
		.login_code{
			float: right;
			margin-right: 0.5rem;
			font-size: 0.4rem;
			color:red;
			margin-top: 0.5rem;
		}
		.login_soc{
			width: 70%;
			line-height: 1rem;
			text-align: center;
			clear: both;
			margin: 2rem 15% 0.5rem;
			font-size: 0.55rem;
			border-bottom: 1px solid #ccc;
		}
		.login_img{
			width: 80%;
			display: flex;
			margin: 0 10% 2rem;
			justify-content: space-around;
			img{
				width: 35%;
				height:35%;
			}
		}
	}
</style>
