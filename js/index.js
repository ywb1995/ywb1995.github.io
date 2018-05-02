window.addEventListener("load",function(){
	var linknav = document.getElementById("Marketingul");
	var lis = linknav.getElementsByTagName("li");
	var divs = linknav.getElementsByTagName("i");
	// console.info(divs);
	//给每一个li添加事件响应，移动是
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		console.info();
		lis[i].onmouseover = function(){
		
			divs[this.index].style.display = "inline-block";			
		}
		lis[i].onmouseout = function () {
		
			divs[this.index].style.display = "none";			
		}
	}

	var Marketingtitle = document.getElementById("Marketingtitle");
	Marketingtitle.onmouseover = function(){
		var Marketingi = this.getElementsByTagName("i");
		Marketingi[0].style.display = "inline-block";			
	}
	Marketingtitle.onmouseout = function(){
		var Marketingi = this.getElementsByTagName("i");
		Marketingi[0].style.display = "none";				
	}

	var Recommendtitle = document.getElementById("Recommendtitle");
	Recommendtitle.onmouseover = function(){
		var Marketingi = this.getElementsByTagName("i");
		
		Marketingi[0].style.display = "inline-block";			
	}
	Recommendtitle.onmouseout = function(){
		var Marketingi = this.getElementsByTagName("i");
		Marketingi[0].style.display = "none";				
	}

	var moretitle = document.getElementById("moretitle");
	moretitle.onmouseover = function(){
		var Marketingi = this.getElementsByTagName("i");
		
		Marketingi[0].style.display = "inline-block";			
	}
	moretitle.onmouseout = function(){
		var Marketingi = this.getElementsByTagName("i");
		Marketingi[0].style.display = "none";				
	}

		var foottitle = document.getElementById("foottitle");
	foottitle.onmouseover = function(){
		var Marketingi = this.getElementsByTagName("i");
		
		Marketingi[0].style.display = "inline-block";			
	}
	foottitle.onmouseout = function(){
		var Marketingi = this.getElementsByTagName("i");
		Marketingi[0].style.display = "none";				
	}

});