<template>
	<transition name='loading'>
		<section v-if='show' class="lt-full zmiti-loading1" :style="{background:'url('+imgs.loading+') no-repeat center bottom',backgroundSize:'cover'}" >
			 
			 <div class='zmiti-img70'>
				 <img :src="imgs.year70" alt="">
			 </div>

			 <div class='zmiti-img-text'>
				 <img :src="imgs.text" alt="">
			 </div>

			 <div class="zmiti-img-title">
				 <img :src="imgs.title" alt="">
			 </div>

			 <div class='zmiti-loading-progress' >
				 <div class='zmiti-progress' :style="{transform:'scale('+width+',1)'}"></div>
				 
			 </div>
			 <div class='zmiti-prec'> 加载中，请稍后...{{parseInt(width*100)}}% </div>

			<div class='zmiti-loading-ui' v-if='!loaded && showLoading && false'>
				<div class='zmiti-loading-C'>
					<div class='zmiti-loading-bar '  :style="{webkitTransform:'scale('+(width)+',1)'}">  </div>
				</div>
				<div class='zmiti-progress'>
				
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