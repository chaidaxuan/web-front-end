function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}
var pics = byId("banner").getElementsByTagName("div"),
    main = byId("main"),
    timer = null,
    index = 0,
    len = pics.length,
    nav1 =  byId("nav");
    a= nav1.getElementsByTagName("a"),
    banner = byId("banner");
console.log(pics)
console.log(main)
console.log(banner)
// for(let i=0;i<size;i++){
// a[i].setAttribute("data-index",i);
// }
function startAutoPlay(){
  timer = setInterval(function(){
   index++;
   if (index >= len) {
   	index=0;
   }
   changeImg();

  },3000)

  banner.onmouseover = function(){
   if(timer){clearInterval(timer)}
  }
  banner.onmouseout = function(){
   timer = setInterval(function(){
   index++;
   if (index >= len) {
   	index=0;
   }
   changeImg();

  },3000)
  }
  // for(var j=0;j<len;j++){
  //   a[j].id = j
  //   a[j].onclick = function(){
  //     index=this.id

  //     alert(index)
  //        changeImg()
  //   }
  // }
    for(var d=0;d<len-1;d++){
    a[d].id = d
    a[d].onclick = function(){  
           
         index = this.id
         console.log(index)  
         changeImg()
}

}}
function changeImg(){
	
	for(var i=0;i<=len-1;i++){
		pics[i].style.display = 'none';
		a[i].style.backgroundColor='#fff';
	}
	pics[index].style.display='block';
	a[index].style.backgroundColor='#ffcc00';
}
startAutoPlay()