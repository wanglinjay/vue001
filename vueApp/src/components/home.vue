<template>
	<div class="white">
	<mt-swipe :auto="4000">
	 	    
	 	      		 <mt-swipe-item v-for="(img,index) in imsg" :key="index">
	 	      		 	<a href=""><img :src="img.name"></a>
                   			 
               
	 	      		 </mt-swipe-item>
	 	      
		</mt-swipe>
			<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            <router-link :to="{name:'Character'}">
		                    <span class="mui-icon"><img src="../img/2.jpg"></span>
		                    <div class="mui-media-body">人物详情</div>
		             </router-link>

		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon "><img src="../img/2.jpg"></span>
		                    <div class="mui-media-body">论坛</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <span class="mui-icon "><img src="../img/2.jpg"></span>
		                    <div class="mui-media-body">剧情介绍</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon "><img src="../img/2.jpg"></span>
		                    <div class="mui-media-body">观看视频</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <span class="mui-icon "><img src="../img/2.jpg"></span>
		                    <div class="mui-media-body">微信</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon "><img src="../img/2.jpg"></span>
		                    <div class="mui-media-body">海贼社区</div></a></li>
		          
		        </ul> 
		</div>
	</div>
</template>
<script type="text/javascript">
	
export default{
		data(){
			return{
				imsg:[]
			}
		},
		created(){
			 var promise=new Promise((resolve,reject)=>{
			 	    const data=[
			 	    	{name:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510922442680&di=ba95b2cd926abc402ca73da14e5bbf39&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8601a18b87d6277fbc33ed5522381f30e924fcbe.jpg'},
			 	    	{name:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510922913954&di=5b5dbea6b0785731bff4e176fd96bfb6&imgtype=0&src=http%3A%2F%2Fbcs.91.com%2Frbpiczy%2FWallpaper%2F2015%2F1%2F9%2Fd4b1ade76d3549bdbd94937201a32c0d-9.jpg'},
			 	    	{name:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510922883400&di=49d2c38076c62a37f1c0c91e9a599ca2&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2Fshaitu%2F20130405%2F1020%2F515e35039c8c4.jpg'},

			 	    ]
			 	    resolve(data);
			 	
			 })
			 .then((data)=>{
			 	    this.imsg=data;
			 	    console.log(data);
			 })
		}

	}




</script>
<style scoped>
	.mint-swipe{
		height: 200px;
	
		
	}
	img{
		width: 100%;
		height: 200px;

	}
	.mui-content{
		background-color: white
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
			border: 0px;

	}
	.mui-table-view.mui-grid-view.mui-grid-9{
		background-color: white;
		

	}
	.mui-content > .mui-table-view:first-child{
		margin: 0;
		padding: 0;
		margin-bottom: 50px;
	}
	.white{
		background-color: white
	}
	.mui-icon img{
		width: 50px;
		height: 50px;
		
	}

</style>