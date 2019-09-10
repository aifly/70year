<template>
	<transition name='loading'>
		<section v-if='show' class="lt-full zmiti-loading1" >
			
			<div class='zmiti-laoding-view lt-full' :class="{'active':beginLoading}">

				<div class="zmiti-loading-icons">		
					<span v-for="(icon,i) in boxImgs" :key="i"
						:style="icon[scale?'style':'style']"
					>
						<img :src="icon.img" alt="">
					</span>
				</div>
			</div>

			<div class='zmiti-loading-ui' v-if='!loaded && showLoading && false'>
				<div class='zmiti-loading-C'>
					<div class='zmiti-loading-bar '  :style="{webkitTransform:'scale('+(width)+',1)'}">  </div>
				</div>
				<div class='zmiti-progress'>
					{{parseInt(width*100)}}%
				</div>
			</div>
			
		</section>
	</transition>
</template>

<script>
	import './index.css';
	import zmitiUtil from '../lib/util';
	export default {
		props:['width','obserable'],
		name:'zmitiindex',
		data(){
			return{
				imgs:window.imgs,
				boxImgs:window.boxImgs,
				scale:true,
				className:"",
				beginLoading:false,
				viewW:Math.min(window.innerWidth,750),
				viewH:window.innerHeight,
				show:true,
				loaded:false,
				currentTime:'',
				currentDate:"",
				showLoading:true,
			}
		},
		components:{
		},
		
		methods:{

			imgStart(e){
				e.preventDefault(); 
			},
			entryIndex(){
				clearInterval(this.timer);
				this.obserable.trigger({
					type:'toggleBgMusic',
					data:true
				});
				this.show = false;
				clearInterval(this.t);
				this.obserable.trigger({
					type:'showIndexTitle'
				})
			},
			 
		},
		mounted(){


			

			setTimeout(() => {
				this.beginLoading = true;
			}, 10);


			setInterval(() => {
				this.beginLoading = !this.beginLoading;
				this.scale = !this.scale;
			},4120);
 

			this.obserable.on('hideloading',()=>{
				this.loaded = true;
				this.showLoading = false;

				///


			
			});



		}
	}
</script>