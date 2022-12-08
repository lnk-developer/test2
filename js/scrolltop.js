// JavaScript Document
$(document).ready(function() {
 var resizeNum
// 메뉴클릭과 마우스휠을 이용한 스크롤 페이지 효과 함수	 
 function pageScroll(){
   var scrollHeight = $(window).height() 
   var scrollNum=0 // 마우스 휠로 페이지 전환을 위한 변수 
   var pageNum = 5  // 페이지 수 - 1
  
   function move(){	
	 $("html, body").stop()  
	 $("html, body").animate({ scrollTop: scrollHeight*(resizeNum)}, 500);	
   }
   function resizeMove(){
	 $("html, body").stop()  
	 $("html, body").animate({ scrollTop: scrollHeight*(resizeNum)}, 100);	
   }
   resizeMove(resizeNum)
   
   $('.scrollbox').css('height',scrollHeight); // 주요 div의 높이를 window의 높이와 맞춰줌
   
   $('#lnb>ul>li').each(function(index){
	$(this).attr('data-index', index);
    $(this).click(function(){  // 메뉴 클릭 효과   	
	 scrollNum=index;  // 메뉴의 넘버와 동기화
	 resizeNum=index;
	 move()		 
	 $(this).addClass('select').siblings().removeClass('select')	
	})	
   })
  
   
   // 마우스 휠로 페이지 이동
   $('.scrollbox').on('mousewheel DOMMouseScroll', function(e){ 
    // wheel down  
	if(e.originalEvent.wheelDelta>0){       
       scrollNum-=1
	   if(scrollNum<0){
	    scrollNum=0 			
	   }
     } 
	 // wheel up
	 else {     
       scrollNum+=1
	   if(scrollNum>pageNum){
	     scrollNum=pageNum			
	   }
     }
	 resizeNum=scrollNum
	 move()
	 	 
	 $('.select').removeClass('select')	 
	 $('#bibicontrols>ul>li[data-index=' + scrollNum + ']').addClass('select')
	 	
    //prevent page fom scrolling
     return false;
   })         
  }
  
 pageScroll()
 
 // 브라우져 크기 변화시 화면크기 변화
 $(window).resize(function(){
   pageScroll(resizeNum)  	
 })

})

 