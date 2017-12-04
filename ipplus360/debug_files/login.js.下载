  var _index5=0;
  $("#four_flash .but_right").click(function(){
    console.log("right "+_index5);
    $(".but_left").show();
    if (_index5>=2){
      return;
    }else{
      _index5++;
      $("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*300},1000);
      if (_index5==2){
        $(".but_right").hide();
      }
    }
  });
  $("#four_flash .but_left").click(function(){
    console.log("left "+_index5);
    $(".but_right").show();
    if (_index5<=0){
      return;
    }else{
      _index5--;
      $("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*300},1000);
      if (_index5==0){
        $(".but_left").hide();
      }
    }
  });