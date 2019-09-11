<template>
	<transition name='main'>
		<div class="zmiti-main-ui" :style='{height:viewH+"px"}' :class="{'show':show}">
			<div class="zmiti-view" :style="{perspective:perspective+'px'}">
				<div class="zmiti-box-ui" ref='boxui'>
					<div class="zmiti-translateZ" ref='toZ' @touchstart='touchstart' @touchmove='touchmove' @touchend='touchend'>
						<div class="zmiti-box-C" ref='box' :class='{"active":rotateBox}'>
							<div  :style="item.style"  ref='item' class="zmiti-box-item" v-for="(item,i) in bgImgs" :key='i'>
							
							</div>
						</div>
						<div class='zmiti-cloud-ui lt-full' ref='cloud' v-if='showClound'>
							<div class='zmiti-cloud-item' :style="cloud.style" v-for='(cloud,i) in clouds' :key="i">
								<img :src="cloud.img" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import './index.css';
	
	import zmitiUtil from '../lib/util';
	import IScroll from 'iscroll';
	import Toast from '../toast/toast';
	
	import zmitiAnimate from '../lib/mTween';
import { clearInterval } from 'timers';
	export default {
		props: ['obserable', 'pv', 'randomPv', 'nickname', 'headimgurl'],
	
		name: 'zmitiindex',
	
		data() {
			return {
				show:true,
				bgImgs:window.bgImgs,
				clouds:window.clouds,
				imgs:window.imgs,
				viewW:Math.min( window.innerWidth,750),
				viewH: window.innerHeight,
				rotateBox:false,
				rotateStop:false,
				perspective:2000,
				lastPoint:0,
				lastTime:0,
				lastSpeed:0,
				isTouch:false,//是否触摸屏幕,
				isStart:true,
				startBoxDeg:0,
				showClound:true,
			}
		},
	
		components: {
			Toast
		},
		watch:{

		},
		methods: {
  			
  			touchstart(e){
  				this.isTouch = true;
  				if(!this.isTouch){
  					return;
  				}
  				if(!this.rotateStop){
  					return;
  				}
  				this.startRotateY = zmitiAnimate.css(this.$refs['box'],'rotateY');
				this.startRotateX = zmitiAnimate.css(this.$refs['box'],'rotateX')||0;
				
  				this.startX = e.changedTouches[0].pageX;
  				this.startY = e.changedTouches[0].pageY;
  				this.isStarting = true;
  				
  				this.lastPoint = this.startX;
  				this.lastTime = Date.now();
  				this.lastSpeed = 0;
  				zmitiAnimate.mTween.stop(this.$refs['toZ']);

  				zmitiAnimate.mTween({
					el:this.$refs['toZ'],
					attrs:{
						translateZ:-1500
					},
					duration:100,
					fx:'easeIn'
				})

				this.startZ = zmitiAnimate.css(this.$refs['toZ'],'translateZ');
  			},
  			touchmove(e){
  				if(!this.rotateStop){
  					return;
  				}
  				if(this.isStarting ){
  					var endX = e.changedTouches[0].pageX;
  					var endY = e.changedTouches[0].pageY;
  					
  					var angleY = (endX - this.startX)/this.viewW * 100;
  					this.angleY = angleY;
					  zmitiAnimate.css(this.$refs['box'],'rotateY',this.startRotateY-angleY);
					  
					var angleX = (endY - this.startY)/this.viewH * 100;
					  this.angleX = angleX;
					  if(angleX - this.startRotateX>0){
						  var x = Math.min(angleX - this.startRotateX,20);
					  }else{
						  var x = Math.max(angleX - this.startRotateX,-20);

					  }
					 

  					zmitiAnimate.css(this.$refs['box'],'rotateX',x);

  					var nowTime = Date.now();
  					this.lastSpeed = (endX - this.lastPoint) / (nowTime - this.lastTime)*300;

  					this.lastPoint = endX;
					this.lastTime = nowTime;
					
					var z = Math.max(this.startZ - Math.abs(endX - this.startX),-2000);
					zmitiAnimate.css(this.$refs['toZ'],'translateZ',z);
					 


  				}
  			},
  			touchend(e){

  				if(!this.isTouch){
  					return;
  				}
  				zmitiAnimate.mTween.stop(this.$refs['toZ']);
				zmitiAnimate.mTween({
					el:this.$refs['toZ'],
					attrs:{
						translateZ:-1500
					},
					duration:300,
					fx:'easeIn',

				})
  				if(!this.rotateStop ||this.lastSpeed === 0||Date.now()-this.lastTime>=40){
					zmitiAnimate.mTween({
						el:this.$refs['box'],
						attrs:{
							rotateX:0
						},
						duration:300,
						fx:'easeOutStrong',
						cb:()=>{
						}
					})
  					setTimeout(()=>{
  						this.isStart = false;
  					},330);
  					return;
  				}



  				this.isStarting = false;
  				var endX = e.changedTouches[0].pageX;
  					
				///zmitiAnimate.css(this.$refs['box'],'rotateY',this.startRotateY-angle);
				//缓存距离

				var dis = (this.lastSpeed)/this.viewW * 120;

				zmitiAnimate.mTween.stop(this.$refs['toZ']);
				zmitiAnimate.mTween({
					el:this.$refs['toZ'],
					attrs:{
						translateZ:-1500
					},
					duration:800,
					fx:'easeOut'

				})

				zmitiAnimate.mTween.stop(this.$refs['box']);
				zmitiAnimate.mTween({
					el:this.$refs['box'],
					attrs:{
						rotateY:zmitiAnimate.css(this.$refs['box'],'rotateY') - dis,
						rotateX:0
					},
					duration:{
						multiple:2,
						min:200,
						max:1500
					},
					fx:'easeOutStrong',
					cb:()=>{
						this.isTouch = false;
						this.isStart = true;
						//zmitiAnimate.css(this.$refs['box'],'rotateX',0);
					}
				})

				 
				

  			},
  			bindEvent(){
  				window.addEventListener('deviceorientation',(e)=>{
  					if(this.isTouch){
  						return;
  					}
  					var box = this.$refs['box'];

  					if(this.isStart){
  						var deg = (e.alpha + e.gamma)%360;
  						this.isStart = false;
  						this.startDeg = deg;

  						this.startBoxDeg = zmitiAnimate.css(box,'rotateY');

  					}else{
  						var nowDeg = (e.alpha + e.gamma)%360;
  						var disDeg = nowDeg - this.startDeg;
  						zmitiAnimate.css(box,'rotateY',disDeg + this.startBoxDeg);
  					}
  				});
  			}
		},
	
		mounted() {

			
			this.showClound = true;
			var angle = 360 / this.bgImgs.length;
			
			var Z = Math.tan(Math.PI/180*(180-angle)/2)*260/2 ;
			this.bgImgs.forEach((item,i)=>{
				item.style = {
					width:'260px',
					height:'1206px',
					background:'url('+item.img+') no-repeat center center',
					backgroundSize:'cover',
					transform:"rotateY("+-angle*i+"deg) translateZ("+-Z+"px)",
					opacity:0
				}
			});

			var iNow =0 ;

			var t = window.setInterval(() => {
				if(this.$refs['item'][iNow]){
					this.$refs['item'][iNow].style.opacity = 1;
				}else{
					window.clearInterval(t);
				}
				iNow++;
			}, 60);



			var perspective = Math.tan(Math.PI/180*65)* this.viewH /2*2 ;
			this.perspective = perspective;
			zmitiAnimate.css(this.$refs['boxui'],"translateZ",perspective);
			this.bgImgs = this.bgImgs.concat([]);

			zmitiAnimate.css(this.$refs['toZ'],'translateZ',-17000);
			zmitiAnimate.css(this.$refs['box'],'rotateX',0);
			zmitiAnimate.css(this.$refs['box'],'rotateY',0);
			zmitiAnimate.css(this.$refs['cloud'],'rotateY',0);



			setTimeout(()=>{
				zmitiAnimate.mTween({
					el:this.$refs['cloud'],
					attrs:{
						'rotateY':1080*2
					},
					duration:4000,
					cb:()=>{
						this.showClound = false;
					}
				});
				zmitiAnimate.mTween({
					el:this.$refs['box'],
					attrs:{
						'rotateY':1080
					},
					duration:4000,
					cb:()=>{
						this.rotateStop = true;
						this.bindEvent();
						
					}
				});
			

				zmitiAnimate.mTween({
					el:this.$refs['toZ'],
					attrs:{
						translateZ:-1500
					},
					duration:2000,
					fx:'easeIn'

				})
			},200)
		}
	
	}
</script>
