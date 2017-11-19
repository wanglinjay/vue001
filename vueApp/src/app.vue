<template>
	 <div>
	 
	 	<mt-header title="海贼王App"></mt-header>
	 	
	 	<router-view></router-view>
	 	<nav class="mui-bar mui-bar-tab">
			<router-link :to="{name:'home'}"   class="mui-tab-item ">
				<span class="mui-icon mui-icon-a"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link   :to="{name:'list'}" class="mui-tab-item">
				<span class="mui-icon mui-icon-b"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link :to="{name:'lib'}" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-c"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link :to="{name:'methods'}" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-d"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
	 </div>
</template>

<script>
	
</script>

<style scoped>

</style>