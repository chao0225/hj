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


      
        //导航栏切 换
        $('.tab_box>div:first-child').siblings().hide();
        $('.tab_menu li').mouseover(function(){
        var index=$(this).index();     
        $(this).addClass('active1');                   
        $(this).siblings().removeClass('active1');  
        $('.tab_box>div').eq(index).show();
        $('.tab_box>div').eq(index).siblings().hide();
        })

        //限时抢购
        function time(){
                var end=new Date("2019/1/14 14:58:00");
                var now=new Date();
                var s=parseInt((end-now)/1000);
                if(s>0){
                var d=parseInt(s/3600/24);
                if(d<10) d="0"+d;
                //s/3600/24,再下取整
                var h=parseInt(s%(3600*24)/3600);
                if(h<10) h="0"+h;
                //s/(3600*24)的余数,再/3600,再下去整
                var m=parseInt(s%3600/60);
                if(m<10) m="0"+m;
                //s/3600的余数,再/60，再下取整
                s%=60;//s/60的余数
                if(s<10) s="0"+s;
                //距离下一个假期还有: ?天?小时?分?秒
                var span=document.getElementById("time");
                span.innerHTML=d+" 天 "+h+" 时 "+m+" 分 "+s+" 秒";
                }else{
                var span=document.getElementById("time");
                span.innerHTML="放学了！";
                clearInterval(timer);
                }
        }
        time(); 
        var timer=setInterval(time,1000);
    