

var i = 0;

var t = setInterval(function(){
	i++;
	i%=7;
	postMessage(i);
},100);

onmessage = function(e){
	clearInterval(t);
}