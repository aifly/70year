﻿
var boxImgs = [

];
window.imgs = {
	detail: "./assets/images/detail.png",
	p1: "./assets/images/p1.png",
	p2: "./assets/images/p2.png",
	p3: "./assets/images/p3.png",
	p4: "./assets/images/p4.png",
	p5: "./assets/images/p5.png",
	p6: "./assets/images/p6.png",
	p7: "./assets/images/p7.png",
	rocket: "./assets/images/rocket.png",
	page1: "./assets/images/1-8.png",
	page2: "./assets/images/2.png",
	page3: "./assets/images/3.png",
	page4: "./assets/images/4.png",
	loading: "./assets/images/loading.jpg",
	main: "./assets/images/main.jpg",
	play: "./assets/images/bgplay.png",
	play1: "./assets/images/bgpause.png",
	play2: "./assets/images/play3.png",
	year70: "./assets/images/70.png",
	text: "./assets/images/text.png",
	subtitle: "./assets/images/subtitle.png",
	title: "./assets/images/title.png",
	audio: './assets/images/audio.gif',
	audio1: './assets/images/audio.png',
	pause: "./assets/images/pause.png",
	year1949: './assets/images/1949.png',
	year1950: './assets/images/1950.png',
	year1964: './assets/images/1964.png',
	year1970: './assets/images/1970.png',
	year1971: './assets/images/1971.png',
	year1977: './assets/images/1977.png',
	year1978: './assets/images/1978-1.png',
	year1997: './assets/images/1997.png',
	year2001: './assets/images/2001.png',
	year2003: './assets/images/2003-1.png',
	year2008: './assets/images/2008-1.png',
	year2017: './assets/images/2017.png',
	year2017_1: './assets/images/2017-1.png',
	year2017_2: './assets/images/2017-3.png',
	year2019: './assets/images/2019.png',

	chengbushi: "./assets/images/chengbushi.jpg",
	liuxinhua: "./assets/images/liuxinhua.jpg",
	fuyibei: "./assets/images/fuyibei.jpg",
	songzhengyu: "./assets/images/songzhengyu.jpg",
	hanxiansheng: "./assets/images/hanxiansheng.jpg",
	wangyujian: "./assets/images/wangyujian.jpg",
	zhaoruji: "./assets/images/zhaoruji.jpg",
	meiliyuxia: "./assets/images/meiliyuxia.jpg",
	yixiaozhun: "./assets/images/yixiaozhun.jpg",
	yangliwei: "./assets/images/yangliwei.jpg",
	lizhiwei: "./assets/images/lizhiwei.jpg",
	mayipeng: "./assets/images/mayipeng.jpg",
	qixiansheng: "./assets/images/qixiansheng.jpg",
	songxi: "./assets/images/songxi.jpg",
	xieshoudong: "./assets/images/xieshoudong.jpg",
	longxianwen: "./assets/images/longxianwen.jpg",


	chengbushi1: "./assets/images/chengbushi1.jpg",
	liuxinhua1: "./assets/images/liuxinhua1.jpg",
	fuyibei1: "./assets/images/fuyibei1.jpg",
	songzhengyu1: "./assets/images/songzhengyu1.jpg",
	hanxiansheng1: "./assets/images/hanxiansheng1.jpg",
	wangyujian1: "./assets/images/wangyujian1.jpg",
	zhaoruji1: "./assets/images/zhaoruji1.jpg",
	meiliyuxia1: "./assets/images/meiliyuxia1.jpg",
	yixiaozhun1: "./assets/images/yixiaozhun1.jpg",
	yangliwei1: "./assets/images/yangliwei1.jpg",
	lizhiwei1: "./assets/images/lizhiwei1.jpg",
	mayipeng1: "./assets/images/mayipeng1.jpg",
	qixiansheng1: "./assets/images/qixiansheng1.jpg",
	//songxi1: "./assets/images/songxi1.jpg",
	/*
	xieshoudong1: "./assets/images/xieshoudong1.jpg", */
	longxianwen1: "./assets/images/longxianwen1.jpg",

	chengbushi2: "./assets/images/chengbushi5.jpg",
	liuxinhua2: "./assets/images/liuxinhua5.jpg",
	fuyibei2: "./assets/images/fuyibei5.jpg",
	songzhengyu2: "./assets/images/songzhengyu5.jpg",
	hanxiansheng2: "./assets/images/hanxiansheng5.jpg",
	wangyujian2: "./assets/images/wangyujian5.jpg",
	zhaoruji2: "./assets/images/zhaoruji5.jpg",
	meiliyuxia2: "./assets/images/meiliyuxia5.jpg",
	yixiaozhun2: "./assets/images/yixiaozhun5.jpg",
	yangliwei2: "./assets/images/yangliwei5.jpg",
	lizhiwei2: "./assets/images/lizhiwei5.jpg",
	mayipeng2: "./assets/images/mayipeng5.jpg",
	qixiansheng2: "./assets/images/qixiansheng5.jpg",
	longxianwen2: "./assets/images/longxianwen5.jpg",

	refresh: './assets/images/refresh.png',
	photo: './assets/images/photo.png',
	intro: './assets/images/intro.png',
	back: './assets/images/back.png',
	share: './assets/images/share.png',
	intro1: './assets/images/intro1.png',
}


/* 
for (var i = 1; i <= 27; i++) {
	boxImgs.push({
		img: "./assets/images/loading/loadIco" + (i%9+1) + ".png",
		style: {
			transform:'translateZ(10px)',
			transform: 'rotateY(' + (Math.random() * 360 | 0) + 'deg) translate3d(0,' + (Math.random() * 300 * (Math.random() > .5 ? 1 : -1)) + 'px,' + (Math.random() * 300 | 0 + 200) + 'px)', background: 'url(' + "./assets/images/loading/loadIco" + (i % 9 + 1) + ".png" + ') no-repeat center',
			transitionDelay: i * 50 + 'ms',
			}
		
	});
} */
var clouds = [];
for (var i = 0; i < 0; i++) {
	clouds.push({
		img: "./assets/images/cloud/cloud" + (i % 3 + 1) + ".png",
		rotateY: (Math.random() * 360 | 0),

	})
}
/* boxImgs.forEach(function (item, i) {
	window.imgs['loadIco' + (i + 1)] = item.img;
}); */
clouds.forEach(function (item, i) {
	window.imgs['cloudIco' + (i + 1)] = item.img;
});
var bgImgs = [];
var layer1 = [
	{
		dom: {
			img: imgs.year1949,
			title: "1949年10月1日  新中国成立",
			headimg: imgs.chengbushi,
			headimg1: imgs.chengbushi1,
			poster: imgs.chengbushi2,
			nickname: 'C919专家组成员 程不时',
			content: "1949年10月1日，中华人民共和国中央人民政府成立。",
			introduce: '在那个旗杆下面这个参加了开国大典，听到这种呼声，心潮澎湃感到这个非常的激动。<div>上海分社：贾远琨、狄春</div>',
			style: {

				transform: 'translateZ(10px)',
				top: '50px',
				width: '400px',
				height: '355px',
				transformOrigin: 'left',
				transform: 'rotateY(-10deg) translateZ(10px)',
				opacity: 0,
				left: 0
			},
			audio: "./assets/music/1.mp3"
		}
	},
	{

	},//2
	{
		dom: {
			img: imgs.year1950,
			title: "1950年 抗美援朝、保家卫国",
			headimg: imgs.liuxinhua,
			headimg1: imgs.liuxinhua1,
			poster: imgs.liuxinhua2,
			nickname: '抗美援朝老兵 刘兴华',
			content: '1950年，应朝鲜民主主义人民共和国的请求，中共中央多次召开会议，经过反复权衡，在10月上旬做出了抗美援朝、保家卫国的历史性决策。',
			introduce: "志愿军战士一不怕苦，二不怕死，一心一意为了国家，为了共产党这种精神，讲给青年一代，让他们传下去。<div>山西分社 马志异</div>",

			style: {
				transform: 'translateZ(10px)',
				width: '416px',
				height: '256px',
				transformOrigin: 'left',
				transform: 'translateZ(74px)',
				opacity: 0,
				top: '50%',
				left: '-187px'
			},
			audio: "./assets/music/2.mp3"
		}
	},//3
	{

	},//4
	{
		dom: {
			img: imgs.year1964,
			title: "1964年 我国第一颗原子弹爆炸成功",
			headimg: imgs.fuyibei,
			headimg1: imgs.fuyibei1,
			poster: imgs.fuyibei2,
			nickname: '中国工程院院士 傅依备',
			content: '1964年10月16日，中国自行制造的第一颗原子弹于在新疆罗布泊爆炸成功。',
			introduce: "这“两弹一星”确确实实是在艰苦的环境当中，在我们条件很不具备的情况之下搞出来的，所以这个精神我觉得是很了不起的，这对于全国人民是一个很大的鼓舞。<div>四川分社 刘海、杨华</div>",
			style: {
				top: ' 26px',
				width: ' 436px',
				left: ' -147px',
				transform: ' rotateY(-16deg) translateZ(127px)',
				height: ' 310px',
				opacity: 0
			},
			audio: "./assets/music/3.mp3"
		}
	},//5
	{
		dom: {
			img: imgs.year1970,
			title: '1970年 “东方红一号”成功发射',
			headimg: imgs.songzhengyu,
			headimg1: imgs.songzhengyu1,
			poster: imgs.songzhengyu2,
			nickname: '长征八号运载火箭总设计师<br/> 　宋征宇',
			content: '1970年4月24日，“东方红一号”卫星在酒泉卫星发射中心成功发射，是中国发射的第一颗人造地球卫星。',
			introduce: "我出生的那一年，正好是东方红一号卫星上天，全国人民都很高兴，我父母就给我取了这么一个名字。后来逐步逐步地认识到了航天探索的魅力，而且发现我能够在其中发挥一定的作用<div>范军威、林凯、王晖、毛振华</div>",
			style: {
				transform: ' translateZ(40px)',
				top: ' 49%',
				left: ' -112px',
				width: ' 300px',
				height: ' 407px',
				opacity: 0
			},
			audio: "./assets/music/4.mp3"
		}
	},//6
	{

	},//7
	{
		dom: {
			img: imgs.year1971,
			title: '1971年我国恢复联合国合法权利',
			headimg: imgs.hanxiansheng,
			headimg1: imgs.hanxiansheng1,
			poster: imgs.hanxiansheng2,
			nickname: '普通市民 韩先生',
			content: '1971年10月25日，第26届联合国大会通过决议，恢复中华人民共和国在联合国的一切合法权利。',
			introduce: "体现在世界上一个大国地位的一个显示，这一点我说实在，作为一个中国人，挺骄傲。<div>天津分社 许健</div>",
			style: {
				transform: ' translateZ(58px)',
				top: ' 11%',
				left: ' -182px',
				width: ' 304px',
				height: '241px',
				opacity: 0
			},
			audio: "./assets/music/5.mp3"
		}
	},//8
	{
		dom: {
			img: imgs.year1977,
			title: '1977年，恢复高考',
			headimg: imgs.wangyujian,
			headimg1: imgs.wangyujian1,
			poster: imgs.wangyujian2,
			nickname: '南开大学中文系77级学生 王宇建',
			content: '1977年，国家决定恢复已经停止了10年的全国高等院校招生考试。',
			introduce: "1977年高考改变了我们的命运，而且我们整个国家的命运都发生了非常重大的变化。<div>天津分社 许健</div>",
			style: {
				transform: ' translateZ(62px)',
				top: ' 65%',
				left: ' -180px',
				width: ' 276px',
				height: ' 200px',
				opacity: 0
			},
			audio: "./assets/music/6.mp3"
		}
	},//9
	{

		dom: {
			img: imgs.year1978,
			title: '1978年 改革开放新时期',
			headimg: imgs.zhaoruji,
			headimg1: imgs.zhaoruji1,
			poster: imgs.zhaoruji2,
			nickname: '广东佛山市顺德区政协原主席<br/> 招汝基',
			content: '1978年12月18日至22日，中共十一届三中全会举行，开启了我国改革开放和社会主义现代化建设历史新时期。',
			introduce: "几十年都坚信一条：必须要通过改革才能够打破原来的旧框框，取得发展的动力，这是一个很深刻的体会。",
			style: {
				transform: ' translateZ(47px)',
				top: '8%',
				left: ' -24px',
				width: ' 342px',
				height: ' 259px',
				opacity: 0
			},
			audio: "./assets/music/7-1.mp3"
		}
	},//10
	{
		dom: {
			img: imgs.year1997,
			title: '1997年香港、1999年澳门回归祖国',
			headimg: imgs.meiliyuxia,
			headimg1: imgs.meiliyuxia1,
			poster: imgs.meiliyuxia2,
			nickname: '香港市民 梅李玉霞',
			content: '1997年7月1日，中华人民共和国政府对香港恢复行使主权。1999年12月20日，中华人民共和国政府对澳门恢复行使主权。',
			introduce: "第一天看着区旗升起来。做为一个中国人你也觉得很骄傲。那个心情都觉得心跳都停了。<div>新华社报道员曾嘉慧、周锦铭 亚太总分社</div>",
			style: {
				transform: ' translateZ(79px)',
				top: ' 58%',
				left: ' -184px',
				width: ' 331px',
				height: ' 408px',
				opacity: 0
			},
			audio: "./assets/music/8.mp3"
		}
	},//11
	{
	},//12
	{
		dom: {
			img: imgs.year2001,
			title: '2001年 加入世界贸易组织（WTO）',
			headimg: imgs.yixiaozhun,
			headimg1: imgs.yixiaozhun1,
			poster: imgs.yixiaozhun2,
			nickname: '世界贸易组织副总干事 易小准',
			content: '2001年12月11日，中国正式加入世界贸易组织(WTO)，成为其第143个成员。',
			introduce: "中国刚刚加入WTO，那时候是全世界服务贸易出口的第12位，今年已经到了第5位。 <div>杜洋、凌馨，欧洲总分社</div>",
			style: {
				transform: ' translateZ(50px)',
				top: ' 7%',
				left: ' -118px',
				width: ' 356px',
				height: ' 252px',
				opacity: 0
			},
			audio: "./assets/music/9.mp3"
		}
	},//13
	{
		dom: {
			img: imgs.year2003,
			title: "2003年 神舟五号发射升空",
			headimg: imgs.yangliwei,
			headimg1: imgs.yangliwei1,
			poster: imgs.yangliwei2,
			nickname: '杨利伟',
			content: '2003年10月15日，中国第一艘载人飞船神舟五号发射升空。',
			introduce: "在我们中国首次飞行过程当中，我就展示了中国的国旗和联合国旗，那么是希望能够通过我们各自的努力，为人类更好地造福。<div>联合国分社 谢锷</div>",
			style: {
				transform: ' translateZ(122px)',
				top: ' 58%',
				left: ' -260px',
				width: ' 443px',
				height: ' 300px',
				opacity: 0
			},
			audio: "./assets/music/10.mp3"
		}
	},//14
	{
		dom: {
			img: imgs.year2008,
			title: "2008年 奥运会北京举行",
			headimg: imgs.lizhiwei,
			headimg1: imgs.lizhiwei1,
			poster: imgs.lizhiwei2,
			nickname: '工人 李志伟',
			content: '2008年8月，第29届夏季奥林匹克运动会在北京举行。',
			introduce: "我孩子是08年出生的，以后稍微大一点我就带他到奥运鸟巢去转。<div>吴新生 江苏分社</div>",
			style: {
				transform: ' translateZ(51px)',
				top: ' 39%',
				left: '-41px',
				height: ' 240px',
				width: ' 374px',
				opacity: 0
			},
			audio: "./assets/music/11.mp3"
		}
	},//15
	{},//16
	{
		dom: {
			img: imgs.year2017,
			title: "2017年 雄安新区设立",
			headimg: imgs.mayipeng,
			headimg1: imgs.mayipeng1,
			poster: imgs.mayipeng2,
			nickname: '中铁十八局集团造林项目部副经理 马毅鹏',
			content: '2017年4月1日 ，中共中央、国务院决定在河北雄安设立国家级新区。',
			introduce: "撸起袖子加油干，一张蓝图绘到底，打造雄安质量，努力使雄安新区这张蓝图成为现实。",
			style: {
				transform: ' translateZ(51px)',
				top: ' 6%',
				left: '-121px',
				height: ' 274px',
				width: ' 414px',
				opacity: 0
			},
			audio: "./assets/music/12.mp3"
		}
	},//17
	{
		dom: {
			img: imgs.year2017_1,
			title: "科技创新、重大工程建设捷报频传",
			headimg: [imgs.songxi, imgs.xieshoudong, imgs.longxianwen],
			headimg1: imgs.songxi,
			poster: imgs.longxianwen2,
			nickname: '北京大学研究生 宋玺',
			content: '2017年10月，中国共产党第十九次全国代表大会在人民大会堂举行，中国特色社会主义进入新时代。',
			introduce: "<div style='margin:10px 0;'>做努力奔跑的追梦人，我们的奋斗终将伟大。</div><div style='margin:10px 0;'>宁夏科研工作者 谢守栋: 用自己学到的东西，报效祖国。湖南牛角山村村民 </div><div style='margin:10px 0;'>龙献文: 撸起袖子加油干，幸福都是奋斗出来的。</div>",
			style: {
				transform: ' translateZ(145px)',
				top: ' 66%',
				left: ' -242px',
				height: ' 274px',
				width: ' 462px',
				opacity: 0
			},
			audio: "./assets/music/14.mp3"
		}
	},//18

	{
		/*dom: {
			img: imgs.year2019,
			title: '2019年 新中国70周年',
			headimg: imgs.longxianwen,
			headimg1: imgs.longxianwen1,
			poster: imgs.longxianwen2,
			nickname: '北京大学研究生 宋玺',
			content: '2017年10月，中国共产党第十九次全国代表大会在人民大会堂举行，中国特色社会主义进入新时代。《2017年 十九大召开，中国特色社会主义进入新时代》',
			introduce: "做努力奔跑的追梦人，我们的奋斗终将伟大。宁夏科研工作者 谢守栋: 用自己学到的东西，报效祖国。湖南牛角山村村民 龙献文: 撸起袖子加油干，幸福都是奋斗出来的。",
			style: {
				transform: ' rotateY(0) translateZ(160px)',
				top: ' 34%',
				left: ' -307px',
				height: ' 333px',
				width: ' 500px',
				opacity: 0
			},
			audio: "./assets/music/14.mp3"
		} */
	},
	{
		dom: {
			img: imgs.year2017_2,
			title: '2019年 新中国70周年',
			headimg: imgs.qixiansheng,
			headimg1: imgs.qixiansheng1,
			poster: imgs.qixiansheng2,
			nickname: '普通市民 齐先生',
			content: '“慧眼”“悟空”遨游太空，嫦娥四号首探月背、“中国天眼”落成启用，C919大型客机飞上蓝天，量子计算机研制成功，海水稻进行测产，首艘国产航母下水，“海翼”号深海滑翔机完成深海观测，海域可燃冰试采成功，洋山四期自动化码头正式开港，港珠澳大桥主体工程全线贯通，复兴号奔驰在祖国广袤的大地上……',
			introduce: "不管从老百姓、从国家都确实是得到实实在在的好处，国家飞跃地发展，人民生活水平在极速地提高，这要感谢党、感谢国家。",

			style: {
				transform: ' rotateY(0) translateZ(160px)',
				top: ' 71%',
				left: ' -144px',
				height: ' 180px',
				width: ' 300px',
				opacity: 0
			},
			audio: "./assets/music/13.mp3"
		}
	},//19//20
];
/* for (var i = 0; i < 20; i++) {
	window.imgs['img' + (i + 1)] = './assets/images/bg/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png';
	bgImgs.push({img:'./assets/images/bg/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png'});
} */

var img = new Image();
img.onload = function () {
	for (var i = 0; i < 20; i++) {
		var canvas = document.createElement('canvas');
		canvas.width = this.width / 20;
		canvas.height = this.height;
		var context = canvas.getContext('2d');
		context.drawImage(this, i * canvas.width, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
		bgImgs.push({ img: canvas.toDataURL('image/png') });
	}
}
img.src = imgs.page2;
/* for(var i = 0;i<20;i++){
	window.imgs['layer1'+(i+1)] = './assets/images/layer1/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png';
	layer1[i].img = './assets/images/layer1/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png';
} */

var img = new Image();
img.onload = function () {
	for (var i = 0; i < 20; i++) {
		var canvas = document.createElement('canvas');
		canvas.width = this.width / 20;
		canvas.height = this.height;
		var context = canvas.getContext('2d');
		context.drawImage(this, i * canvas.width, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
		layer1[i].img = canvas.toDataURL('image/png');

	}
}
img.src = imgs.page1;

var layer2 = [];
for (var i = 0; i < 20; i++) {
	/* 	window.imgs['layer2'+(i+1)] = './assets/images/layer2/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png';
		layer2.push({
			img:'./assets/images/layer2/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png'
		}) */
}
var img = new Image();
img.onload = function () {
	for (var i = 0; i < 20; i++) {
		var canvas = document.createElement('canvas');
		canvas.width = this.width / 20;
		canvas.height = this.height;
		var context = canvas.getContext('2d');
		context.drawImage(this, i * canvas.width, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
		layer2.push({ img: canvas.toDataURL('image/png') });
	}
}
img.src = imgs.page4;
var layer3 = [];
/* for(var i = 0;i<20;i++){
	window.imgs['layer3'+(i+1)] = './assets/images/layer3/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png';
	layer3.push({
		img:'./assets/images/layer3/1_' + (i + 1 <= 9 ? '0' + (i + 1) : i + 1) + '.png'
	})
}
 */
var img = new Image();
img.onload = function () {
	for (var i = 0; i < 20; i++) {
		var canvas = document.createElement('canvas');
		canvas.width = this.width / 20;
		canvas.height = this.height;
		var context = canvas.getContext('2d');
		context.drawImage(this, i * canvas.width, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
		layer3.push({ img: canvas.toDataURL('image/png') });
	}
}
img.src = imgs.page3;

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
		src: './assets/music/bg.mp3',
		autoplay: false,
		name: 'bg2',
		loop: true
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