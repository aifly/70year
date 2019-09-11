﻿
var boxImgs = [
	
];
window.imgs = {
};
for (var i = 1; i <= 27; i++) {
	boxImgs.push({
		img: "./assets/images/loading/loadIco" + (i%9+1) + ".png",
		style: {
			transform: 'rotateY(' + (Math.random() * 360 | 0) + 'deg) translate3d(0,' + (Math.random() * 300 * (Math.random() > .5 ? 1 : -1)) + 'px,' + (Math.random() * 300 | 0 + 200) + 'px)', background: 'url(' + "./assets/images/loading/loadIco" + (i % 9 + 1) + ".png" + ') no-repeat center',
			transitionDelay: i * 50 + 'ms',
			}
		
	});
}
var clouds = [];
for(var i = 0 ;i < 9 ; i++){
	clouds.push({
		img: "./assets/images/cloud/cloud" + (i % 3 + 1) + ".png",
		style: {
			transform: 'rotateY(' + (Math.random() * 360 | 0) + 'deg) translate3d(0,' + (Math.random() * 300 * (Math.random() > .5 ? 1 : -1)) + 'px,' + (Math.random() * 400 | 0 + 300) + 'px)', background: 'url(' + "./assets/images/cloud/cloud" + (i % 3 + 1) + ".png" + ') no-repeat center',
			transitionDelay: i * 50 + 'ms',
		}
	})
}
boxImgs.forEach(function (item, i) {
	window.imgs['loadIco' + (i + 1)] = item.img;
});
clouds.forEach(function (item, i) {
	window.imgs['cloudIco' + (i + 1)] = item.img;
});
var bgImgs = [];
for (var i = 0; i < 20; i++) {

	window.imgs['img' + (i + 1)] = './assets/images/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png';
	bgImgs.push({
		img: './assets/images/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png',
		id: 'img_' + i,
	})
}
var arr = [

];


for (var attr in imgs) {
	arr.push(imgs[attr]);
}

window.config = {
	baseUrl: "https://testxlive.xinhuaapp.com",
	host: "https://xlive.xinhuaapp.com", //正式域名：https://testxlive.xinhuaapp.com
	secretKey: "e9469538b0623783f38c585821459454",

};

var musics = {
	music: {
		src: './assets/music/bg2.mp3',
		autoplay: false,
		name: 'bg2',
		loop: true
	},
	alert: {
		src: './assets/music/alert.mp3',
		autoplay: true,
		name: 'alert',
	},
	error: {
		src: './assets/music/error.mp3',
		autoplay: true,
		name: 'error',
	},
	right: {
		src: './assets/music/right.mp3',
		autoplay: true,
		name: 'right',
	}
};

(function () {

	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
		handleFontSize();
	} else {
		if (document.addEventListener) {
			document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
		} else if (document.attachEvent) {
			document.attachEvent("WeixinJSBridgeReady", handleFontSize);
			document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
		}
	}

	function handleFontSize() {
		// 设置网页字体为默认大小
		WeixinJSBridge.invoke('setFontSizeCallback', {
			'fontSize': 0
		});
		// 重写设置网页字体大小的事件
		WeixinJSBridge.on('menu:setfont', function () {
			WeixinJSBridge.invoke('setFontSizeCallback', {
				'fontSize': 0
			});
		});
	}
})();