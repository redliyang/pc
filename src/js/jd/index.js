var topBanner = document.querySelector("#J_event");
var xx = document.querySelector("#J_event_close");
xx.addEventListener('click',function () {
	topBanner.style.display = 'none';
});


function ajaxGetPlaceholder(callback){
    var ajaxData=['1-车载手机支架','2-电视盒子','3-小雅智能音箱','4-阳澄湖大杂蟹'];
    callback(ajaxData);　
}
ajaxGetPlaceholder(function(data){
    var searchIpt = document.querySelector("#key");
    var timer = null;
    var order =0;
    var init = function () {
        setPlaceholder();
        searchIpt.addEventListener('focus',function () {
            clearInterval(timer);
            searchIpt.setAttribute("placeholder",'');
        });
        searchIpt.addEventListener('blur',function () {
            setPlaceholder();
        });
        window.addEventListener('scroll',function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if ( scrollTop > 740 ) {
                search.classList.add('search-fix');
                if (((scrollTop - 740) / 300) > 0.9) {
                    search.style.opacity = 0.9;
                }else {
                    search.style.opacity = ((scrollTop - 740) / 300);
                }
            }else {
                search.classList.remove('search-fix');
                search.style.opacity = 1;
            }
        });
    }
    function setPlaceholder() {
        timer = setInterval(function () {
            searchIpt.setAttribute("placeholder",data[order++%4]);
        },1000)
    }
    init();
});　　　　

/**
 * @param  {sting} aa
 * @return {[type]}
 */
function oSearchSuggest(searchFuc) {
	var searchIpt = document.querySelector("#key"); 
	var suggestWrap = document.querySelector("#shelper");
    var key = "";
    var init = function() {
    	searchIpt.addEventListener('keyup',sendKeyWord);
    	searchIpt.addEventListener('blur',function () {
    		setTimeout(function () {
    			suggestWrap.style.display = 'none';
    		},100);
    	});
    }
    var sendKeyWord = function (event) {
		event = window.event || event;
    	if ((event.keyCode == 38 || event.keyCode == 40)   && suggestWrap.style.display == 'block') 
    	{
            var current = document.querySelector('.hover');
            if (event.keyCode == 38) {
                if (current != null) {
                	current.classList.remove('hover');
                    var prevLi = current.previousSibling || current.previousElementSibling;
                    if (prevLi != null) {
	                    prevLi.classList.add('hover');
	                    searchIpt.value = prevLi.lastChild.innerText;
                    }
                } else {
                    var last = suggestWrap.lastChild;
                    last.classList.add('hover');
					searchIpt.value = last.lastChild.innerText;
                }
            } 
            else if (event.keyCode == 40) {
                if (current != null) {
                	current.classList.remove('hover');
                    var nextLi = current.nextSibling || current.nextElementSibling;
                    if (nextLi != null) {
	                    nextLi.classList.add('hover');
	                    searchIpt.value = nextLi.lastChild.innerText;
                    }
                } else {
                    var first = suggestWrap.firstChild;
                    first.classList.add('hover');
                    searchIpt.value = first.lastChild.innerText;
                }
            }
        } 
        else
        {
	    	var valText = trim(searchIpt.value);
		    if (valText == '' || valText == key) {
		        return;
		    }
		    searchFuc(valText);
		    key = valText;
        }
    }
    this.dataDisplay = function(data) {    	
        if (data.length <= 0) {
            suggestWrap.style.display = 'none';
            return;
        }
        //往搜索框下拉建议显示栏中添加条目并显示 
        var li;
        var tmpFrag = document.createDocumentFragment();
        suggestWrap.innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            li = document.createElement('LI');
            li.className = 'searchLi'
            li.innerHTML = data[i];
            li.index = i;
            tmpFrag.appendChild(li);
        }
        suggestWrap.appendChild(tmpFrag);
        suggestWrap.style.display = 'block';
        liArr = document.querySelectorAll('.searchLi');
        for (var i = 0; i < liArr.length; i++) {
	        liArr[i].addEventListener('mouseover',function () {
            	this.classList.add('hover');
	    	});
	    	liArr[i].addEventListener('mouseout',function () {
            	this.classList.remove('hover');
	    	});
	    	liArr[i].addEventListener('click',function () {
	    		searchIpt.value = this.lastChild.innerText;
            	suggestWrap.style.display = 'none';
	    	});
        }
    }
    init();
}

var searchSuggest = new oSearchSuggest(sendKeyWordToBack);
//这是一个模似函数，实现向后台发送ajax查询请求，并返回一个查询结果数据，传递给前台的JS,再由前台JS来展示数据。本函数由程序员进行修改实现查询的请求 
//参数为一个字符串，是搜索输入框中当前的内容 
function sendKeyWordToBack(keyword) {
    var aData = [];
    var ajaxJsonData={"蓝宝石":"100","8g":"150","profession":"344","profeion":"344","rofession":"344","profeson":"344","profen":"344","fession":"344","profion":"344"};
    for(var item in ajaxJsonData){
        aData.push('<span class="num_right">约'+ajaxJsonData[item]+'个商品</span>' + '<span class="keyWord">' + keyword + '&nbsp;' +item + '</span>');
    }
    aData.push('<span class="num_right">关闭</span>');
    //将返回的数据传递给实现搜索输入框的输入提示js类 
    searchSuggest.dataDisplay(aData);
}

(function (cateMenuItemArr) {
    for (var i = 0; i < cateMenuItemArr.length; i++) {
        document.querySelector('.cate_menu').onmouseover = function () {
            document.querySelector('.cate_pop').style.display = 'block';
        }
        document.querySelector('.cate_menu').onmouseout = function () {
            document.querySelector('.cate_pop').style.display = 'none';
        }
        cateMenuItemArr[i].onmouseover = (function (index) {
            return function () {
                if (document.querySelector('#cate_item' + index )) {
                    document.querySelector('#cate_item' + index ).style.display = 'block';
                }
            }
        })(cateMenuItemArr[i].dataset.index);
        cateMenuItemArr[i].onmouseout = (function (index) {
            return function () {
                if (document.querySelector('#cate_item' + index )) {
                    document.querySelector('#cate_item' + index ).style.display = 'none';
                }
            }
        })(cateMenuItemArr[i].dataset.index);
    }
})(document.querySelectorAll('.cate_menu_item'))


function slide() {
    var sliderMain = document.querySelector('.slider_main');
    var sliderControlItem = document.querySelectorAll('.slider_control_item');
    var sliderItem = document.querySelectorAll('.slider_item');
    var sliderIndicatorBtn = document.querySelectorAll('.slider_indicator_btn');
    var aa = null;
    var i = -1 ;
    function autoPlay() {
        aa = setInterval(function () {
            orderPlay(++i);
        },1000);
    }
    function orderPlay(order) {
        if (order < 0 ) {
            order = order%8+8;
        }else {
            order = order%8;
        }
        console.log(sliderMain);
        if (document.querySelector('.slider_item_active')) {
            document.querySelector('.slider_item_active').classList.remove('slider_item_active');
        }
        sliderItem[order].classList.add('slider_item_active');
        if (document.querySelector('.slider_indicator_btn_active')) {
            document.querySelector('.slider_indicator_btn_active').classList.remove('slider_indicator_btn_active');
        }
        sliderIndicatorBtn[order].classList.add('slider_indicator_btn_active');
    }

    autoPlay();
    sliderMain.onmouseover = function () {
        clearInterval(aa);
        sliderControlItem[0].style.display = 'block';
        sliderControlItem[1].style.display = 'block';
    }
    sliderMain.onmouseout = function () {
        autoPlay();
        sliderControlItem[0].style.display = 'none';
        sliderControlItem[1].style.display = 'none';
    }
    document.querySelector('.slider_control_prev').onclick = function () {
        orderPlay(--i);
    }
    document.querySelector('.slider_control_next').onclick = function () {
        orderPlay(++i);
    }
}
slide();