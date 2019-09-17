﻿
var boxImgs = [
	
];
window.imgs = {
	detail:"./assets/images/detail.png",
	play:"./assets/images/play.png",
	audio:'./assets/images/audio.gif',
	pause:"./assets/images/pause.png",
	year1949:'./assets/images/1949.png',
	year1950:'./assets/images/1950.png',
	year1964:'./assets/images/1964.png',
	year1970:'./assets/images/1970.png',
	year1971:'./assets/images/1971.png',
	year1977:'./assets/images/1977.png',
	year1978:'./assets/images/1978.png',
	year1997:'./assets/images/1997.png',
	year2003:'./assets/images/2003.png',
	year2008:'./assets/images/2008.png',
	year2017:'./assets/images/2017.png',
	year2017_1:'./assets/images/2017-1.png',
	year2019:'./assets/images/2019.png',
}



for (var i = 1; i <= 27; i++) {
	boxImgs.push({
		img: "./assets/images/loading/loadIco" + (i%9+1) + ".png",
		style: {
			transform:'translateZ(10px)',
			transform: 'rotateY(' + (Math.random() * 360 | 0) + 'deg) translate3d(0,' + (Math.random() * 300 * (Math.random() > .5 ? 1 : -1)) + 'px,' + (Math.random() * 300 | 0 + 200) + 'px)', background: 'url(' + "./assets/images/loading/loadIco" + (i % 9 + 1) + ".png" + ') no-repeat center',
			transitionDelay: i * 50 + 'ms',
			}
		
	});
}
var clouds = [];
for(var i = 0 ;i < 9 ; i++){
	clouds.push({
		img: "./assets/images/cloud/cloud" + (i % 3 + 1) + ".png",
		rotateY: (Math.random() * 360 | 0),
		
	})
}
boxImgs.forEach(function (item, i) {
	window.imgs['loadIco' + (i + 1)] = item.img;
});
clouds.forEach(function (item, i) {
	window.imgs['cloudIco' + (i + 1)] = item.img;
});
var bgImgs = [];
var layer1 = [
	{
		dom:{
			img:imgs.year1949,
			title:"1949年10月1日  新中国成立",
			content:"1949年10月1日，中华人民共和国举行开国大典，宣告中华人民共和国、中央人民政府成立。",
			style: {
				transform:'translateZ(10px)',
				top:'50%',
				right:'50px'
			},
			audio:"./assets/music/1.mp3"
		}
	},
	{},//2
	{},//3
	{
		dom:{
			img: imgs.year1950,
			title:"1950年 抗美援朝、保家卫国",
			content:'1950年，应朝鲜民主主义人民共和国的请求，中共中央多次召开会议，经过反复权衡，在10月上旬做出了抗美援朝、保家卫国的历史性决策。',
			style: {
				transform:'translateZ(10px)',
				top:'60%',
				left:0
			},
			audio:"./assets/music/1.mp3"
		}
	},//4
	{},//5
	{
		dom: {
			img: imgs.year1964,
			title:"1964年 我国第一颗原子弹爆炸成功",
			content: '1964年10月16日，中国自行制造的第一颗原子弹于在新疆罗布泊爆炸成功。',
			style: {
				transform:'translateZ(10px)',
				top: '60%',
				left: 0
			},
			audio:"./assets/music/1.mp3"
		}
	},//6
	{

	},//7
	{
		dom: {
			img: imgs.year1970,
			title:'1970年 “东方红一号”成功发射',
			content: '1970年4月24日，“东方红一号”卫星在酒泉卫星发射中心成功发射，是中国发射的第一颗人造地球卫星。',
			style: {
				transform:'translateZ(10px)',
				top: '60%',
				left: 0
			},
			audio:"./assets/music/1.mp3"
		}
	},//8
	{
		dom: {
			img: imgs.year1971,
			title: '1971年我国恢复联合国合法权利',
			content: '1971年10月25日，第26届联合国大会通过决议，恢复中华人民共和国在联合国的一切合法权利。',
			style: {
				transform:'translateZ(10px)',
				top: '60%',
				left: 0
			},
			audio: "./assets/music/1.mp3"
		}
	},//9
	{
		dom: {
			img: imgs.year1977,
			title: '1977年，恢复高考',
			content: '1977年9月，中国教育部在北京召开全国高等学校招生工作会议，决定恢复已经停止了10年的全国高等院校招生考试。',
			style: {
				transform:'translateZ(10px)',
				top: '60%',
				left: 0
			},
			audio: "./assets/music/1.mp3"
		}
	},//10
	{
		dom: {
			img: imgs.year1978,
			title: '1978年 改革开放新时期',
			content: '1978年12月18日至22日，中共十一届三中全会举行，开启了我国改革开放和社会主义现代化建设历史新时期。',
			style: {
				transform:'translateZ(10px)',
				top: '60%',
				left: 0
			},
			audio: "./assets/music/1.mp3"
		}	
	},//11
	{

		dom: {
			img: imgs.year1997,
			title: '1997年香港、1999年澳门回归祖国',
			content: '1997年7月1日，中华人民共和国政府对香港恢复行使主权。1999年12月20日，中华人民共和国政府对澳门恢复行使主权。',
			style: {
				transform:'translateZ(10px)',
				top: '60%',
				left: 0
			},
			audio: "./assets/music/1.mp3"
		}
	},//12
	{
		dom: {
			img: imgs.year2001,
			title: '2001年 加入世界贸易组织（WTO）',
			content: '2001年12月11日中国正式加入世界贸易组织(WTO)，成为其第143个成员。',
			style: {
				transform:'translateZ(10px)',
				top: '60%',
				left: 0
			},
			audio: "./assets/music/1.mp3"
		}
	},//13
	{
		dom: {
			img: imgs.year2003,
			title:"2003年 神舟五号发射升空",
			content: '2003年10月15日，中国第一艘载人飞船神舟五号发射升空。',
			style: {
				transform:'translateZ(10px)',
				top: '60%',
				left: 0
			},
			audio:"./assets/music/1.mp3"
		}
	},//14
	{
		dom: {
			img: imgs.year2008,
			title:"2008年 奥运会北京举行",
			content: '2008年8月，第29届夏季奥林匹克运动会在北京举行。',
			style: {
				transform:'translateZ(10px)',
				top: '60%',
				left: 0
			},
			audio:"./assets/music/1.mp3"
		}
	},//15
	{},//16
	{
		dom: {
			img: imgs.year2017,
			title:"2017年 雄安新区设立",
			content: '2017年4月1日 ，中共中央、国务院决定在河北雄安设立国家级新区。',
			style: {
				transform:'translateZ(10px)',
				top: '60%',
				left: 0
			},
			audio:"./assets/music/1.mp3"
		}
	},//17
	{},//18
	{
		dom: {
			img: imgs.year2017_1,
			title:"科技创新、重大工程建设捷报频传",
			content: '科技创新、重大工程建设捷报频传。“慧眼”“悟空”遨游太空，嫦娥四号首探月背、“中国天眼”落成启用，C919大型客机飞上蓝天，量子计算机研制成功，海水稻进行测产，首艘国产航母下水，“海翼”号深海滑翔机完成深海观测，海域可燃冰试采成功，洋山四期自动化码头正式开港，港珠澳大桥主体工程全线贯通，复兴号奔驰在祖国广袤的大地上……',
			style: {
				transform:'translateZ(10px)',
				top: '60%',
				left: 0
			},
			audio:"./assets/music/1.mp3"
		}
	},//19
	{
		dom: {
			img: imgs.year2019,
			title:'2019年 新中国70周年',
			content: '2017年10月，中国共产党第十九次全国代表大会在人民大会堂举行，中国特色社会主义进入新时代。《2017年 十九大召开，中国特色社会主义进入新时代》',
			style: {
				transform:'translateZ(10px)',
				top: '60%',
				left: 0
			},
			audio:"./assets/music/1.mp3"
		}
	}//20
];
for (var i = 0; i < 20; i++) {
	window.imgs['img' + (i + 1)] = './assets/images/bg/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.jpg';
	bgImgs.push({img:'./assets/images/bg/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.jpg'});
}
for(var i = 0;i<20;i++){
	window.imgs['layer1'+(i+1)] = './assets/images/layer1/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png';
	layer1[i].img = './assets/images/layer1/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png';
}

var layer2 = [];
for(var i = 0;i<20;i++){
	window.imgs['layer2'+(i+1)] = './assets/images/layer2/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png';
	layer2.push({
		img:'./assets/images/layer2/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png'
	})
}

var layer3 = [];
for(var i = 0;i<20;i++){
	window.imgs['layer3'+(i+1)] = './assets/images/layer3/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png';
	layer3.push({
		img:'./assets/images/layer3/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png'
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