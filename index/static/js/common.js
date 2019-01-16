//获取指定ID元素的内容
function $(id){
	return document.getElementById(id);
};


//创建异步对象
function createXhr(){
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();	//有返回值，为true的情况下，标准创建
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHttp");	//没有返回值，为false的情况下，表示IE8以下的浏览器，IE8创建
	}
	return xhr;
};