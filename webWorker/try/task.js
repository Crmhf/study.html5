onmessage = function(event){
	var num = event.data;
	var result = 0;
	for(var i=0,len=num; i<len; i++){
	    result += i;
	}

	// 向线程创建源回消息
	postMessage(result);
}

