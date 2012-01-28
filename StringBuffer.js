function StringBuffer(){
	var list=new Array();
	this.append=function(s){
		list.push(s);
	}
	this.toString=function(){
		return list.join("");
	}
}
