<template>
	<transition name='main'><!--url("+imgs.bg+") no-repeat center-->
		<div class="zmiti-main-ui" :style='{height:viewH+"px",background:"#eee",backgroundSize:"cover"}' :class="{'show':show}">
			<div class="zmiti-view" :style="{perspective:perspective+'px'}">
				<div class="zmiti-box-ui" ref='boxui' v-tap='[layer1Click]'>
					<div class="zmiti-translateZ" ref='toZ' @touchstart='touchstart' @touchmove='touchmove' @touchend='touchend'>
						<div class="zmiti-box-C" ref='box' :class='{"active":rotateBox}'>
							<div  :style="item.style"  ref='item' class="zmiti-box-item" v-for="(item,i) in bgImgs" :key='i'>
							</div>				 
						</div>
						<div class="zmiti-box-C layer2" ref='layer2'>
							<div  :style="item.style" class="zmiti-box-item layer2" v-for="(item,k) in layer2" :key='k*34+22'>
							</div>
						</div>

						<div class="zmiti-box-C layer3" ref='layer3'>
							<div  :style="item.style" class="zmiti-box-item layer3" v-for="(item,k) in layer3" :key='k*43+25'>
							</div>
						</div>

						<div class="zmiti-box-C layer1" ref='layer1' >
							<div  :style="item.style" class="zmiti-box-item " v-for="(item,k) in layer1" :key='k*100+30'>
								<div v-tap=[showDetail,item] v-if="item.dom " class='zmiti-item-dom' :style="item.dom.style||{}">
									<span v-if='false' v-html='item.dom.title'></span>
								</div>
							</div>
						</div>

						<div class='zmiti-cloud-ui lt-full' ref='cloud' v-if='showClound' v-show='false'>
							<div class='zmiti-cloud-item' :style="cloud.style" v-for='(cloud,i) in clouds' :key="i">
								<img :style="cloud.imgStyle||{}"  :src="cloud.img" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='zmiti-detail-ui lt-full' v-if='currentObj.style'>
				<span class='zmiti-detail-close' v-tap='[closeDetail]'>&times;</span>
				<div class='zmiti-detail-content'>
					<img :src="imgs.detail" alt="">
					<div class='zmiti-detail-img'>
						<div class='zmiti-year-img'>
							<img :src="currentObj.img" alt="">
						</div>
						<div class='zmiti-detail-wrap'>
							{{currentObj.content}}
						</div>
						<div class='zmiti-detail-bottom'>
							<div>
								<img :src="imgs.play" alt="">
							</div>
							<div>
								<img :src="imgs.audio" alt="">
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
				layer1:window.layer1,
				layer2:window.layer2,
				layer3:window.layer3,

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
				currentObj:{

				}
			}
		},
	
		components: {
			Toast
		},
		watch:{

		},
		methods: {
			layer1Click(){
			},
			createLayer(angle,Z1,Z2,Z3){
				///zmitiUtil.css(this.$refs['layer1'],)
				this.layer1.forEach((item,i)=>{
					item.style = {
						width:'185px',
						height:'1116px',
						background:'url('+item.img+') no-repeat center center',
						backgroundSize:'cover',
						transform:"rotateY("+-angle*i+"deg) translateZ("+-Z1+"px)",
					}
				});

			this.layer2.forEach((item,i)=>{
				item.style = {
					width:'190px',
					height:'1146px',
					background:'url('+item.img+') no-repeat center center',
					backgroundSize:'cover',
					transform:"rotateY("+-angle*i+"deg) translateZ("+-Z2+"px)",
				}
			});
			this.layer3.forEach((item,i)=>{
				item.style = {
					width:'195px',
					height:'1176px',
					background:'url('+item.img+') no-repeat center center',
					backgroundSize:'cover',
					transform:"rotateY("+-angle*i+"deg) translateZ("+-Z3+"px)",
				}
			});
			},
			closeDetail(){
				this.currentObj = {};
			},
			showDetail(item){
				console.log(item)
				this.currentObj = item.dom;
			},
  			touchstart(e){
				clearTimeout(this.touchTimer);
  				this.isTouch = true;
  				if(!this.isTouch){
  					return;
  				}
  				if(!this.rotateStop){
  					return;
  				}
  				this.startRotateY = zmitiAnimate.css(this.$refs['box'],'rotateY');
  				this.startRotateLayer1 = zmitiAnimate.css(this.$refs['layer1'],'rotateY');
  				this.startRotateLayer2 = zmitiAnimate.css(this.$refs['layer2'],'rotateY');
				  this.startRotateLayer3 = zmitiAnimate.css(this.$refs['layer3'],'rotateY');
				  
				
  				this.startX = e.changedTouches[0].pageX;
  				this.startY = e.changedTouches[0].pageY;
  				this.isStarting = true;
  				
  				this.lastPoint = this.startX;
  				this.lastTime = Date.now();
  				this.lastSpeed = 0;
  				zmitiAnimate.mTween.stop(this.$refs['toZ']);


				this.startZ = zmitiAnimate.css(this.$refs['toZ'],'translateZ');
  			},
  			touchmove(e){
  				if(!this.rotateStop ){
  					return;
  				}
  				if(this.isStarting ){
  					var endX = e.changedTouches[0].pageX;
  					var endY = e.changedTouches[0].pageY;
  					
  					var angleY = (endX - this.startX)/this.viewW * 30;
					this.angleY = angleY;

					var angle1  =(endX - this.startX)/this.viewW * 120;
					var angle2  =(endX - this.startX)/this.viewW * 80;
					var angle3  =(endX - this.startX)/this.viewW * 40;
					
					zmitiAnimate.css(this.$refs['box'],'rotateY',this.startRotateY-angleY);
					zmitiAnimate.css(this.$refs['layer1'],'rotateY',(this.startRotateLayer1-angle1));
					zmitiAnimate.css(this.$refs['layer2'],'rotateY',(this.startRotateLayer2-angle2));
					zmitiAnimate.css(this.$refs['layer3'],'rotateY',(this.startRotateLayer3-angle3));

					var angleX = (endY - this.startY)/this.viewH * 100;
					  this.angleX = angleX;
					  if(angleX - this.startRotateX>0){
						  var x = Math.min(angleX - this.startRotateX,20);
					  }else{
						  var x = Math.max(angleX - this.startRotateX,-20);

					  }

					 

				

  					//zmitiAnimate.css(this.$refs['box'],'rotateX',x);

  					var nowTime = Date.now();
  					this.lastSpeed = (endX - this.lastPoint) / (nowTime - this.lastTime)*300;

  					this.lastPoint = endX;
					this.lastTime = nowTime;
					
					var z = Math.max(this.startZ - Math.abs(endX - this.startX),-2000);
					//zmitiAnimate.css(this.$refs['toZ'],'translateZ',z);
					 


  				}
  			},
  			touchend(e){

  				if(!this.isTouch){
  					return;
				  }
				  
  				 
  				if(!this.rotateStop ||this.lastSpeed === 0||Date.now()-this.lastTime>=40){
					 
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


				zmitiAnimate.mTween.stop(this.$refs['box']);
				zmitiAnimate.mTween.stop(this.$refs['layer1']);
				zmitiAnimate.mTween.stop(this.$refs['layer2']);
				zmitiAnimate.mTween.stop(this.$refs['layer3']);
				zmitiAnimate.mTween({
					el:this.$refs['box'],
					attrs:{
						rotateY:zmitiAnimate.css(this.$refs['box'],'rotateY') - dis,
					},
					duration:{
						multiple:2,
						min:300,
						max:1000
					},
					//fx:'easeOutStrong',
					cb:()=>{
						
						this.touchTimer = setTimeout(() => {
							this.isTouch = false;
							this.isStart = true;
						}, 1200);
						//zmitiAnimate.css(this.$refs['box'],'rotateX',0);
					}
				})


				zmitiAnimate.mTween({
					el:this.$refs['layer1'],
					attrs:{
						rotateY:zmitiAnimate.css(this.$refs['layer1'],'rotateY') - dis,
					},
					duration:{
						multiple:2,
						min:300,
						max:1000
					},
					//fx:'easeOutStrong',
					cb:()=>{
					
						//zmitiAnimate.css(this.$refs['box'],'rotateX',0);
					}
				})


				zmitiAnimate.mTween({
					el:this.$refs['layer2'],
					attrs:{
						rotateY:zmitiAnimate.css(this.$refs['layer2'],'rotateY') - dis,
					},
					duration:{
						multiple:2,
						min:300,
						max:1000
					},
					//fx:'easeOutStrong',
					cb:()=>{
						//zmitiAnimate.css(this.$refs['box'],'rotateX',0);
					}
				})

				zmitiAnimate.mTween({
					el:this.$refs['layer3'],
					attrs:{
						rotateY:zmitiAnimate.css(this.$refs['layer3'],'rotateY') - dis,
					},
					duration:{
						multiple:2,
						min:300,
						max:1000
					},
					//fx:'easeOutStrong',
					cb:()=>{
						//zmitiAnimate.css(this.$refs['box'],'rotateX',0);
					}
				})

				 
				

  			},
  			bindEvent(){
  				window.addEventListener('deviceorientation',(e)=>{
					  if( this.isTouch ){
						  document.title = 'stop';
						  return;
					}
					document.title = e.alpha;
  					var box = this.$refs['box'];
  					var layer1 = this.$refs['layer1'];
  					var layer2 = this.$refs['layer2'];
  					var layer3 = this.$refs['layer3'];

  					if(this.isStart){
  						var deg = (e.alpha + e.gamma)%360;
  						this.isStart = false;
  						this.startDeg = deg;

  						this.startBoxDeg = zmitiAnimate.css(box,'rotateY');
  						this.startlayer1Deg = zmitiAnimate.css(layer1,'rotateY');
  						this.startlayer2Deg = zmitiAnimate.css(layer2,'rotateY');
  						this.startlayer3Deg = zmitiAnimate.css(layer3,'rotateY');

  					}else{
  						var nowDeg = (e.alpha + e.gamma)%360;
  						var disDeg = nowDeg - this.startDeg;
  						zmitiAnimate.css(box,'rotateY',disDeg + this.startBoxDeg);
  						zmitiAnimate.css(layer1,'rotateY',disDeg + this.startlayer1Deg);
  						zmitiAnimate.css(layer2,'rotateY',disDeg + this.startlayer2Deg);
  						zmitiAnimate.css(layer3,'rotateY',disDeg + this.startlayer3Deg);
  					}
  				});
  			}
		},
	
		mounted() {

			//this.currentObj = this.layer1[0].dom;

			
			this.showClound = true;
			var angle = 360 / this.bgImgs.length;
			
			var Z = Math.tan(Math.PI/180*(180-angle)/2)*200/2;
			var Z1 = Math.tan(Math.PI/180*(180-angle)/2)*185/2;
			var Z2 = Math.tan(Math.PI/180*(180-angle)/2)*190/2;
			var Z3 = Math.tan(Math.PI/180*(180-angle)/2)*195/2;

			this.bgImgs.forEach((item,i)=>{
				item.style = {
					width:'200px',
					height:'1206px',
					background:'url('+item.img+') no-repeat center center',
					backgroundSize:'cover',
					transform:"rotateY("+-angle*i+"deg) translateZ("+-Z+"px)",
					opacity:0
				}
			});

			this.createLayer(angle,Z1,Z2,Z3);

			

			var perspective = Math.tan(Math.PI/180*63)* this.viewH /2*2 ;
			this.perspective = perspective;
			this.clouds.forEach((item)=>{
				item.style = {
					transform: 'rotateY(' + item.rotateY + 'deg) translate3d(0,' + (Math.random() * 200 * (Math.random() > .5 ? 1 : -1)) + 'px,' + Z/2  + 'px)', background: 'url(' + "./assets/images/loading/loadIco" + (i % 9 + 1) + ".png" + ') no-repeat center',
					}
			})

			var iNow =0 ;

			var t = window.setInterval(() => {
				if(this.$refs['item'][iNow]){
					this.$refs['item'][iNow].style.opacity = 1;
				}else{
					window.clearInterval(t);
				}
				iNow++;
			}, 60);



		
			zmitiAnimate.css(this.$refs['boxui'],"translateZ",perspective);
			this.bgImgs = this.bgImgs.concat([]);

			zmitiAnimate.css(this.$refs['toZ'],'translateZ',-1500);
			zmitiAnimate.css(this.$refs['layer1'],'rotateY',0);
			zmitiAnimate.css(this.$refs['layer2'],'rotateY',0);
			zmitiAnimate.css(this.$refs['layer3'],'rotateY',0);
			zmitiAnimate.css(this.$refs['box'],'rotateY',0);
			zmitiAnimate.css(this.$refs['cloud'],'rotateY',0);
			zmitiAnimate.css(this.$refs['cloud'],'translateX',0);

			[...this.$refs['cloud'].querySelectorAll('img')].forEach(item=>{
				zmitiAnimate.css(item,'rotateY',0);
			})




			setTimeout(()=>{
				zmitiAnimate.mTween({
					el:this.$refs['cloud'],
					attrs:{
						'rotateY':720,
						'translateX':1000
					},
					duration:4000,
					cb:()=>{

						//this.showClound = false;
						
					},
					update:(val,key)=>{
						//this.$refs['cloud'].style.opacity = (1 - val / (1080*2 ))*2
						[...this.$refs['cloud'].querySelectorAll('.zmiti-cloud-item')].forEach((item,i)=>{

						//	zmitiAnimate.css(item.querySelector('img'),'rotateY',val - this.clouds[i].rotateY );
						})
					}
				});

				zmitiAnimate.mTween({
					el:this.$refs['box'],
					attrs:{
						'rotateY':360
					},
					duration:2000,
					cb:()=>{
						this.rotateStop = true;
						this.bindEvent();
						
					}
				});

				zmitiAnimate.mTween({
					el:this.$refs['layer1'],
					attrs:{
						'rotateY':360
					},
					duration:2000,
					cb:()=>{
					}
				});

				zmitiAnimate.mTween({
					el:this.$refs['layer2'],
					attrs:{
						'rotateY':360
					},
					duration:2000,
					cb:()=>{
					}
				});
				zmitiAnimate.mTween({
					el:this.$refs['layer3'],
					attrs:{
						'rotateY':360
					},
					duration:2000,
					cb:()=>{
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
