//封装一个代替getelementbyid的方法
function byId(id){
 return	typeof(id)==="string"?document.getElementById(id):id;
}
console.log(byId("main"))

var index=0,timer = null,
     pics = byId("banner").getElementsByTagName("div"),
     dots = byId("dots").getElementsByTagName("span"),
     len = pics.length,
     prev = byId("prev"),
     next = byId("next"),
     menu = byId("menu-content"),
     menuItems = menu.getElementsByClassName("menu-item"),
     subMenu = byId("sub-menu"),
     innerBox = subMenu.getElementsByClassName("inner-box")
    //getElementsByClassName ie8以下不支持
     

function slideImg(){
   //导航菜单
   console.log(subMenu)
   for(var m=0;m<menuItems.length;m++){

   	 menuItems[m].setAttribute("data-index",m);
   	 //给每一个menuitem定义data-index属性 作为索引
     menuItems[m].onmouseover = function(){
     	for(var j =0;j<innerBox.length;j++){
     		innerBox[j].style.display='none';
     		menuItems[j].style.background = 'none'
     }
     	var idx = this.getAttribute("data-index");
     	subMenu.className='sub-menu';
     	menuItems[idx].style.background = 'rgba(0,0,0,0.1)';
     	innerBox[idx].style.display='block'
     
     }
     // menuItems[m].onmouseout = function(){
     // 	// for(var j =0;j<innerBox.length;j++){subMenu.className='sub-menu hide';}
     // }
   }

	var main = byId("main");
	main.onmouseover = function(){
		//清除定时器
		if(timer) clearInterval(timer);
	  
	}
	main.onmouseout = function(){
      timer = setInterval(function(){ index++;
        if (index>=len) {
        	index = 0;
        }

      	changeImg()},3000)
	}

    // main.onmouseout = function(){
    // 	timer = setInterval(function(){
    //      index++;if (index>=len) {index=0;} changeImg()
    // 	},2000)
    // }


	//在main上自动触发onmouseout时间
	main.onmouseout();
	//遍历所有点击，且绑定点击事件，点击远点切换
	for(var d=0;d<len;d++){
		dots[d].id = d
		dots[d].onclick = function(){      
         index = this.id
         changeImg()
	}
}
      next.onclick = function(){
      	
     	index++;
        if (index>=len) {
        	index = 0;
        }
         changeImg()
     }
     prev.onclick = function(){
     	index--;
     	if (index==-1) {
     		index=2;
     	}
     	changeImg()
     }

     menu.onmouseout = function(){
     	subMenu.className="sub-menu hide";
     }
     subMenu.onmouseover = function(){
     	this.className= "sub-menu";
     }
     subMenu.onmouseout = function(){
     	this.className= "sub-menu hide";
     }
}
//切换图片
function changeImg(){
	for(var i=0;i<len;i++){
      pics[i].style.display = 'none';
	}
	pics[index].style.display = 'block';
}
slideImg()
 console.log(pics)
 console.log(len)
  console.log(dots)