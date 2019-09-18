<template>
	<transition name='main'><!--url("+imgs.bg+") no-repeat center-->
		<div class="zmiti-main-ui" :style='{height:viewH+"px",background:"url("+imgs.main+") no-repeat center",backgroundSize:"cover"}' :class="{'show':show,'active':currentObj.style}">
			<div class="zmiti-view" :style="{perspective:perspective+'px'}">
				<div class="zmiti-box-ui" ref='boxui' v-tap='[layer1Click]'>
					<div class="zmiti-translateZ" ref='toZ' @touchstart='touchstart' @touchmove='touchmove' @touchend='touchend'>
						<div class="zmiti-box-C" ref='box' :class='{"active":rotateBox}'>
							<div  :style="item.style"  ref='item' class="zmiti-box-item" v-for="(item,i) in bgImgs" :key='i'>
							</div>				 
						</div>
						<div class="zmiti-box-C layer1" ref='layer1' >
							<div  :style="item.style" class="zmiti-box-item " v-for="(item,k) in layer1" :key='k*100+30'>
								<div v-tap=[showDetail,item] v-if="item.dom " class='zmiti-item-dom' :style="item.dom.style||{}">
									<span v-if='false' v-html='item.dom.title'></span>
								</div>
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

						

						<div class='zmiti-cloud-ui lt-full' ref='cloud' v-if='showClound' v-show='false'>
							<div class='zmiti-cloud-item' :style="cloud.style" v-for='(cloud,i) in clouds' :key="i">
								<img :style="cloud.imgStyle||{}"  :src="cloud.img" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class='zmiti-subtitle'>
				<img :src="imgs.subtitle" alt="">
			</div>

			<div class='zmiti-text'>
				<img :src="imgs.text" alt="">
			</div>
			<section class='zmiti-detail-page lt-full'  v-if='currentObj.style'>
				<div class='zmiti-detail-ui lt-full'>
					<div class='zmiti-detail-content'>
						<span class='zmiti-detail-close' v-tap='[closeDetail]'></span>
						<img :src="imgs.detail" alt="">
						<div class='zmiti-detail-img'>
							<div class='zmiti-year-img'>
								<img :src="currentObj.img" alt="">
							</div>
							<div class='zmiti-detail-wrap' ref='wrap'>
								<div>
									{{currentObj.content}}
								</div>
							</div>
							<div class='zmiti-detail-bottom'>
								<div v-tap='[toggleAudio]'>
									<img :src="imgs[isPlaying?'play2':'pause']" alt="">
									<audio ref='audio' :src='currentObj.audio' ></audio>
								</div>
								<div>
									<img :src="imgs[isPlaying?'audio':'audio1']" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	</transition>
</template>

<script>
	import './index.css';
	
	import zmitiUtil from '../lib/util';
	import IScroll from 'iscroll';
	import Toast from '../toast/toast';
	import Vue from 'vue';
	import zmitiAnimate from '../lib/mTween';
	import ISroll from 'iscroll';
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
				isPlaying:false,
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
						transform:"rotateY("+-angle*i+"deg) scale(1.01) translateZ("+-Z1+"px)",
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
			toggleAudio(){
				let audio = this.$refs['audio'];
				if(audio.paused){
					audio.play();
					this.isPlaying = true;

				}else{
					audio.pause();
					this.isPlaying = false;
				}

				this.obserable.trigger({
					type:'toggleBgMusic',
					data:audio.paused
				})

				audio.addEventListener('ended',()=>{
					this.isPlaying = false;
				})
			},
			closeDetail(){
				this.currentObj = {};
				this.isPlaying = false;
				this.obserable.trigger({
					type:'toggleBgMusic',
					data:true
				})
			},
			showDetail(item){

				this.currentObj = item.dom;
				this.$nextTick(()=>{
					this.toggleAudio();
				})
				setTimeout(() => {
					this.scroll &&this.scroll.destroy();
					this.scroll = new IScroll(this.$refs['wrap'],{
						scrollbars:true
					});
				}, 100);
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
  				this.startRotateY = zmitiAnimate.css(this.domBox,'rotateY'); 
  				this.startRotateLayer1 = zmitiAnimate.css(this.domLayer1,'rotateY');
  				this.startRotateLayer2 = zmitiAnimate.css(this.domLayer2,'rotateY');
				this.startRotateLayer3 = zmitiAnimate.css(this.domLayer3,'rotateY');
  	 
				  
				
  				this.startX = e.changedTouches[0].pageX;
  				this.startY = e.changedTouches[0].pageY;
  				this.isStarting = true;
  				
  				this.lastPoint = this.startX;
  				this.lastTime = Date.now();
  				this.lastSpeed = 0;
  				//zmitiAnimate.mTween.stop(this.$refs['toZ']);


				///this.startZ = zmitiAnimate.css(this.$refs['toZ'],'translateZ');
  			},
  			touchmove(e){
  				if(!this.rotateStop ){
  					return;
  				}
  				if(this.isStarting ){
  					var endX = e.changedTouches[0].pageX;
  					var endY = e.changedTouches[0].pageY;
  					
  					var angleY = (endX - this.startX)/this.viewW * 10;
					this.angleY = angleY;

					var angle1  =(endX - this.startX)/this.viewW * 120;
					var angle2  =(endX - this.startX)/this.viewW * 80;
					var angle3  =(endX - this.startX)/this.viewW * 40;
					
					zmitiAnimate.css(this.domBox,'rotateY',this.startRotateY- angleY);
					zmitiAnimate.css(this.domLayer1,'rotateY',(this.startRotateLayer1-angle1));
					zmitiAnimate.css(this.domLayer2,'rotateY',(this.startRotateLayer2-angle2));
					zmitiAnimate.css(this.domLayer3,'rotateY',(this.startRotateLayer3-angle3));

					var angleX = (endY - this.startY)/this.viewH * 100;
					  this.angleX = angleX;
					  if(angleX - this.startRotateX>0){
						  var x = Math.min(angleX - this.startRotateX,20);
					  }else{
						  var x = Math.max(angleX - this.startRotateX,-20);

					  }

  					////zmitiAnimate.css(this.domBox,'rotateX',x);

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
						this.isTouch = false;
  						this.isStart = false;
					  },330);
  					return;
  				}



  				this.isStarting = false;
  				var endX = e.changedTouches[0].pageX;
  					
				///zmitiAnimate.css(this.$refs['box'],'rotateY',this.startRotateY-angle);
				//缓存距离

				var dis = (this.lastSpeed)/this.viewW * 120;
				var layer1Dis  = (this.lastSpeed)/this.viewW * 200;;
				var layer2Dis  = (this.lastSpeed)/this.viewW * 170;;
				var layer3Dis  = (this.lastSpeed)/this.viewW * 140;;

			

				zmitiAnimate.mTween.stop(this.domBox);
				zmitiAnimate.mTween.stop(this.domLayer1);
				zmitiAnimate.mTween.stop(this.domLayer2);
				zmitiAnimate.mTween.stop(this.domLayer3);
				
				zmitiAnimate.mTween({
					el:this.domBox,
					attrs:{
						rotateY:zmitiAnimate.css(this.domBox,'rotateY') - dis,
					},
					duration:{
						multiple:3,
						min:300,
						max:1500
					},
					cb:()=>{
						
					
						//zmitiAnimate.css(this.$refs['box'],'rotateX',0);
					}
				})

				this.touchTimer = setTimeout(() => {
					this.isTouch = false;
					this.isStart = true;
				}, 1600);


				zmitiAnimate.mTween({
					el:this.domLayer1,
					attrs:{
						rotateY:zmitiAnimate.css(this.domLayer1,'rotateY') - layer1Dis,
					},
					duration:{
						multiple:3,
						min:300,
						max:1500
					},
					//fx:'easeOutStrong',
					cb:()=>{
					
						//zmitiAnimate.css(this.$refs['box'],'rotateX',0);
					}
				})


				zmitiAnimate.mTween({
					el:this.domLayer2,
					attrs:{
						rotateY:zmitiAnimate.css(this.domLayer2,'rotateY') - layer2Dis,
					},
					duration:{
						multiple:3,
						min:300,
						max:1500
					},
					//fx:'easeOutStrong',
					cb:()=>{
						//zmitiAnimate.css(this.$refs['box'],'rotateX',0);
					}
				})

				zmitiAnimate.mTween({
					el:this.domLayer3,
					attrs:{
						rotateY:zmitiAnimate.css(this.domLayer3,'rotateY') - layer3Dis,
					},
					duration:{
						multiple:3,
						min:300,
						max:1500
					},
					//fx:'easeOutStrong',
					cb:()=>{
						//zmitiAnimate.css(this.$refs['box'],'rotateX',0);
					}
				})
  			},
  			bindEvent(){
				  var s = this;
  				window.addEventListener('deviceorientation',(e)=>{
					if( this.isTouch ){
						return;
					}
  					var box = this.domBox;
  					var layer1 = this.domLayer1;
  					var layer2 = this.domLayer2;
  					var layer3 = this.domLayer3;
					
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
  						zmitiAnimate.css(layer1,'rotateY',(disDeg + this.startlayer1Deg)*2);
  						zmitiAnimate.css(layer2,'rotateY',(disDeg + this.startlayer2Deg));
  						zmitiAnimate.css(layer3,'rotateY',disDeg+ this.startlayer3Deg);
  					}
				  });
				   if (window.DeviceMotionEvent) {
						//window.addEventListener('devicemotion',deviceMotionHandler,false);
					}

						
					//获取加速度信息
					//通过监听上一步获取到的x, y, z 值在一定时间范围内的变化率，进行设备是否有进行晃动的判断。
					//而为了防止正常移动的误判，需要给该变化率设置一个合适的临界值。
					var SHAKE_THRESHOLD = 8000;
					var last_update = 0;
					var x, y, z, last_x = 0, last_y = 0, last_z = 0;
					function deviceMotionHandler(eventData) {
							var acceleration =eventData.accelerationIncludingGravity;
							var curTime = new Date().getTime();
							if ((curTime-last_update)> 10) {
								var diffTime = curTime -last_update;
								last_update = curTime;
								x = acceleration.x;
								y = acceleration.y;
								z = acceleration.z;
								var speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
								if (speed > SHAKE_THRESHOLD) {
									var index = s.getIndex();
									s.currentObj = s.layer1[index].dom;
									s.$nextTick(()=>{
										s.toggleAudio();
									})
								}
								last_x = x;
								last_y = y;
								last_z = z;
							}
					}
			 },
			 getIndex(){
				 var index = (14*Math.random())|0;
					document.title = index;
				 if(!this.layer1[index].dom){
					 return this.getIndex();
				 }else{
					 return index;
				 }
			 }
		},
	
		mounted() { 

			///this.currentObj = this.layer1[0].dom;
			
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
					//opacity:0
				}
			});

			this.createLayer(angle,Z1,Z2,Z3);

			

			var perspective = Math.tan(Math.PI/180*50)* this.viewH /2*2 ;
			this.perspective = perspective;
			 

		
			zmitiAnimate.css(this.$refs['boxui'],"translateZ",perspective);
			this.bgImgs = this.bgImgs.concat([]);
			this.domLayer1 = this.$refs['layer1'];
			this.domLayer2 = this.$refs['layer2'];
			this.domLayer3 = this.$refs['layer3'];
			this.domBox = this.$refs['box'];

			zmitiAnimate.css(this.$refs['toZ'],'translateZ',-1500);
			zmitiAnimate.css(this.domBox,'rotateY',0);
			zmitiAnimate.css(this.domLayer1,'rotateY',0);
			zmitiAnimate.css(this.domLayer2,'rotateY',0);
			zmitiAnimate.css(this.domLayer3,'rotateY',0);
	/* 		[...this.$refs['cloud'].querySelectorAll('img')].forEach(item=>{
				zmitiAnimate.css(item,'rotateY',0);
			}) */




			setTimeout(()=>{
				

				zmitiAnimate.mTween({
					el:this.domBox,
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
					el:this.domLayer1,
					attrs:{
						'rotateY':720
					},
					duration:2000,
					cb:()=>{
					}
				});

				zmitiAnimate.mTween({
					el:this.domLayer2,
					attrs:{
						'rotateY':360
					},
					duration:2000,
					cb:()=>{
					}
				});
				zmitiAnimate.mTween({
					el:this.domLayer3,
					attrs:{
						'rotateY':360
					},
					duration:2000,
					cb:()=>{
					}
				});
			 
			},600)
		}
	
	}
</script>
