function Heap(){

	this.heap=function(array){
		_list=array;
		_heapSize=_list.length;
		_buildHeap();
	}

	this.max=function(){
		return _list[0];
	}

	this.get=function(i){
		if(i>=_list.length)
			throw "Index out of bounds";
		return _list[i];
	}

	this.sort=function(){
		_heapSort();
	}

	this.length=function(){
		return _list.length;
	}

	this.insert=function(e){
		_heapSize++;
		_list.push(e);
		_swap(0,_heapSize-1);
		_buildHeap();
		//_heapify(0);
	}

	var _heapify=function(i){
		var left=_leftChild(i);
		var right=_rightChild(i);
		var largest=i;
		if(left<_heapSize && _list[left]>_list[largest])
			largest=left;
		if(right<_heapSize && _list[right]>_list[largest])
			largest=right;
		if(largest!=i){
			_swap(i,largest);
			_heapify(largest);
		}
	}

	var _buildHeap=function(){
		for(var i=Math.floor(_list.length/2);i>=0;i--)
			_heapify(i);
	}

	var _heapSort=function(){
		for(var i=_list.length-1;i>=1;i--){
			_swap(0,i);
			_heapSize--;
			_heapify(0);
		}
	}

	var _swap=function(i,j){
		var temp=_list[i];
		_list[i]=_list[j];
		_list[j]=temp;
	}

	var _rightChild=function(i){
		return 2*i+2;
	}

	var _leftChild=function(i){
		return 2*i+1;
	}
	
	var _heapSize=0;
	var _list=new Array();
}
