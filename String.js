String.prototype.insert=function(pos,s){
	if(pos>=this.length)
		return this.valueOf()+s;
	else if(pos<=0)
		return s+this.valueOf();
	else
		return this.substr(0,pos)+s+this.substr(pos);
}

String.prototype.startsWith=function(s){
	if(this.length<s.length)
		return false;
	else if(this.substr(0,s.length)==s)
		return true;
	else
		return false;
}

String.prototype.endsWith=function(s){
	if(this.length<s.length)
		return false;
	else if(this.substr(this.length-s.length)==s)
		return true;
	else
		return false;
}
