﻿
var boxImgs = [
	
];
window.imgs = {

};
boxImgs.forEach(function (item, i) {
	window.imgs['index' + (i + 1)] = item.img;
});
var bgImgs = [];
for (var i = 0; i < 45; i++) {

	window.imgs['img' + (i + 1)] = './assets/images/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png';
	bgImgs.push({
		img: './assets/images/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png',
		id: 'img_' + i
	})
}
var arr = [];


for (var attr in imgs) {
	arr.push(imgs[attr]);
}

window.config = {
	indexvideo: './assets/video/index3.mp4',
	indexvideo1: './assets/video/index3.mp4',
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