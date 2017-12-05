//  中间导航条滚动固定到某一位置
var h3_height ;
console.log($(".mid-nav").length);
if($(".mid-nav").length>0){
	h3_height = $(".mid-nav").offset().top;
}
    $(window).scroll(function(){
    var winH = $(window).height();
    var this_scrollTop = $(window).scrollTop();
    if(jQuery('.tips').css("display") == 'none'){
        this_scrollTop += 62;
    }
    if(this_scrollTop > h3_height  && !jQuery(".mid-nav").hasClass("nofix")){
        $(".mid-nav").css({
        	'position':'fixed',
        	'top':0,
        	'z-index':999
        });
        jQuery('.null').show();
        
    }else{
    	$(".mid-nav").css({
        	'position':'static'
        });
        jQuery('.null').hide();
    }





//		var arr = [];
//		jQuery('body>.con').each(function(i,n){
//			if(winH+this_scrollTop - $(this).offset().top > winH/2){
//				arr.push($(this).index() - 3);
//				$(".mid-nav-inner>li").removeClass('active');
//				$(".mid-nav-inner>li").eq(arr.pop()).addClass('active');
//			}
//		})
});
    //点击中间导航栏添加样式
$(".mid-nav-inner>li").click(function(){
	$(".mid-nav-inner>li").removeClass('active');
	$(this).addClass('active');
	var t = jQuery('body>.con').eq($(this).index()).offset().top;
//  	console.log(t);
	$('body,html').animate({"scrollTop":t - 120 + 'px'},500);
});






	//返回顶部

 $(window).bind("scroll", function () {  
    var sTop = $(window).scrollTop();
    if (sTop >= 500){  
        $("#five").css({"display":"block"});
    }  
    else {  
        $("#five").css({"display":"none"});
    }   
});  
$("#five").click(function(){
    $('html,body').animate({scrollTop:"0"}, 800);
})





	// jQuery('.fixed>li.five').click(function(){
	//    	$('html,body').animate({scrollTop: '0px'}, 800);
	// });
	//收回通知内容
	/*jQuery('.notice_list>i').click(function(event){
		 event.stopPropagation();
		$('.notice_list').animate({left: '0px'}, 300);
	});*/
	//展示通知详细
jQuery('.notice').click(function(e){
	e.preventDefault();
	$('.notice_list').animate({left: '-292px'}, 300);
});
//点击x关掉产品上线提示
$('.close').click(function(){
	jQuery(this).parent().fadeOut();
});
