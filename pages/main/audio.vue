<template>
	<div class='zmiti-audio-main-ui'>
		<div class='zmiti-audio-icon'>
			<img :src="imgs.play2" alt="">
		</div>
		<div class='zmiti-audio-canvas'>
			<canvas width="400" height="50" ref='canvas'></canvas>
		</div>
	</div>
</template>

 
<script>
export default {
	props:[
		'src',
		'id',
		'show',
		'obserable'
	],
	data(){
		return {
			imgs:window.imgs,
			stop:false,
		}
	},
	watch: {
		show(val){
		}
	},
	methods:{
		initCanvas(){
			var canvas = this.$refs['canvas'];
			const context = canvas.getContext('2d');
			const margin =  10,
				startX = 4;
			
			var linear = context.createLinearGradient(0,0,margin,100);
			linear.addColorStop(0,'#f4cc62')
			linear.addColorStop(1,'#f00')
			context.fillStyle = linear;
			this.context = context;
			for(var i = 0; i < 16;i++){
				context.fillRect((startX+margin*2 )*i+margin,startX,10,10);
			}
		},
		initAduio(){
			if(this.src){
				let audio = new Audio();
				audio.src = this.src;
				audio.play();
				
				
				audio.loop = 'loop';
				
				this.audio = audio;
				this.obserable.trigger({
					type:'toggleBgMusic',
					data:false
				})
				var ac = new (window.AudioContext || window.webkitAudioContext)();

				var audioSrc = ac.createMediaElementSource(this.audio);//oAudio为<audio>对象

				var analyser = ac.createAnalyser();
				this.analyser = analyser;
				audioSrc.connect(analyser);
				
				analyser.connect(ac.destination);
				analyser.fftSize = 128; 
				this.arr = new Uint8Array(analyser.frequencyBinCount);
			}

		}
	},
	destroyed() {
		this.stop = true;
		if(this.src){
			this.audio.pause(); 
			this.audio = null;
		}
	},
	mounted() {


		this.initCanvas();
		setTimeout(() => {
			
			this.initAduio();
			var max = Math.max;
			const margin =  10,
				startX = 4;
			if(this.src){
				var s = this;
				(function render(){
	
					!s.stop && requestAnimationFrame(render);
	
					if (s.arr.length) {
						s.analyser.getByteFrequencyData(s.arr);
						s.context.clearRect(0,0,400,100);
						for(var i = 0; i < 16;i++){
							s.context.fillRect((startX+margin*2 )*i+margin,startX,10,max(s.arr[i]/8,4));
						}
						s.obserable.trigger({
							type:'dunce',
							data:s.arr
						})
					}
	
					//console.log(s.arr)
				})();
			}
		}, 500);
	},

}
</script>