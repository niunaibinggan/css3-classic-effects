/**
 * @Author: WY
 * @Date: 2017/7/29
 * @Last Modified by: WY
 * @Last Modified time: 2017/7/29
 */
Nav = (function(){
	// OOP
	// 定义构造函数/类      第一段
	var Obj = function(options){
		// 设计一个方法，专门处理属性的
		this._setPara(options);
	};
	
	// 在原型对象上添加方法     第二段
	Obj.prototype = {
		constructor: Obj, // 修正一下构造函数的指针
		author: 'WY',
		verson: '1.00',
		init: function (){ // 入口方法     共有方法
			// 获取节点
			// 局部面向过程
			this.bOn = true;
			this._oHomeFn();
			//this._LargeImg();
		},
		/*_LargeImg : function(){
			var This = this;
			for(var i=0;i<This.aImg.length;i++){
				This.aImg[i].onclick = function(){
					this.style.WebkitTransition = "0.3s";
					this.style.WebkitTransform = "scale(2)";
					this.style.opcity = 0.1;
					This.addEnd(this,This.fn);
				}	
			}	
		},
		fn : function(){
			this.style.WebkitTransition = "0.1s";
			this.style.WebkitTransform = "scale(1)";
			this.style.opcity = 1;
			this.removeEnd(this,this.fn);
		},
		addEnd : function(obj,fn){
			obj.addEventListener('WebkitTransitionEnd',fn,false);
            obj.addEventListener('transitionend',fn,false);  
		},
		removeEnd : function(obj,fn){
			obj.removeEventListener('WebkitTransitionEnd',fn,false);
            obj.removeEventListener('transitionend',fn,false);
		},*/
		_oHomeFn : function(){
			var This = this;
			this.oHome.onclick = function(){
				if(This.bOn){
					this.style.WebkitTransform = "rotate(-360deg)";
					for(var i=0;i<This.aImg.length;i++){
						This.aImg[i].style.WebkitTransition = "0.5s "+ This.iTime*i +"ms ease";
						This.aImg[i].style.left = This._toMove(This.oR,90/(This.aImg.length-1)*i).l+"px";
						This.aImg[i].style.top = This._toMove(This.oR,90/(This.aImg.length-1)*i).t+"px";
						This.aImg[i].style.WebkitTransform = "rotate(-360deg)";
					}
				}else{
					this.style.WebkitTransform = "rotate(0deg)";
					for(var i=0;i<This.aImg.length;i++){
						This.aImg[i].style.WebkitTransition = "0.5s "+ This.iTime*(This.aImg.length-1-i) +"ms ease";
						This.aImg[i].style.left = 0+"px";
						This.aImg[i].style.top = 0+"px";
						This.aImg[i].style.WebkitTransform = "rotate(0deg)";
					}
				}
				This.bOn = !This.bOn;
			}
		},
		_toMove:function(iR,iDeg){
			return {
				l : Math.round(Math.sin(iDeg/180*Math.PI)*iR),
				t : Math.round(Math.cos(iDeg/180*Math.PI)*iR)
			}
		},
		_setPara: function(option){ // 设置参数     _  私有方法
			console.log(option);
			this.oHome = option.oHome;
			this.aImg = option.aImg;
			this.oR = option.oR;
			this.iTime = option.iTime;
		}
	};
	
	// 公开接口
	return Obj;
})();
