/* 最简单的轮播 */


$(function() {

  
    var imgindex = $(".swiper_2 img").length;
    
    var num = 1;
    var timer = setInterval(function() {
        if (num >= imgindex) {
            num = 1;
        } else {
            num++;
        }
        $(".swiper_2 img").eq(num).show().siblings().hide();
    }, 4000);

    // 左右箭头
    $(".next").click(function(){
        if (num >= imgindex) {
            num = 1;
        } else {
            num++;
        }
        $(".swiper_2 img").eq(num).show().siblings().hide();
    })
    $(".prev").click(function(){
        if(num<1)
            num=4;
        else
        num--;
        $(".swiper_2 img").eq(num).show().siblings().hide();
    })
   
})


//导航栏切换
$('.center_sp div:last-child').hide();
$('.lay_6_dh span').mouseover(function(){
    var index=$(this).index();     
    $(this).addClass('active');                   
    $(this).siblings().removeClass('active');  
    $('.center_sp>div').eq(index).show();
    $('.center_sp>div').eq(index).siblings().hide();
})