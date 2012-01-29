String.prototype.insert=function(pos,s){
	if(end>=this.length)
		return this.toStr()+s;
	else
		return this.substr(0,pos)+s+this.substr(pos+1);
}
