String.prototype.insert=function(pos,s){
	if(pos>=this.length)
		return this.toStr()+s;
	else if(pos<=0)
		return s+this.toStr();
	else
		return this.substr(0,pos)+s+this.substr(pos+1);
}
