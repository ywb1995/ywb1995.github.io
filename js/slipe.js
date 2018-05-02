/**
 * 在主页中使用的轮播的效果
 * @type {[type]}
 */
window.addEventListener("load",function(){
	var itemlistul = document.getElementById('itemlistul');
	var dx = 1;
	var currentIndex = 0 ; //当前是第1屏
	//向左移动,减少left。
	//思路 
	//动画控制ul移动一屏，当完成移动后，停3秒，再进行下一屏。
	//go();
	//只移动一屏

	function move(){
		var oldleft = itemlistul.offsetLeft
		
		if(oldleft <= -839){
			itemlistul.style.left =0 + "px";
			return ;
		}
		var newleft = oldleft-3;
		itemlistul.style.left =newleft + "px";
		console.info(newleft);

	}
	function main(argument) {
		var timeer = setInterval(function(){move();},100);
	}
	main();
	//第一次调用 move，currentIndex是0，相当是从0屏到第1屏。
	//第二次调用 move，currentIndex是1，相当是从1屏到第2屏。
});
