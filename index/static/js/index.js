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
   
        


        /* 小轮播 */
        (function ($) {
            // 创建构造函数
            function Slide(ele, options) {
                this.$ele = $(ele)//this. 构造函数的实例对象
                this.options = $.extend({
                    speed: 1000,
                    delay: 3000
                }, options)//拓展
                this.states = [
                    { '&zIndex': 1, width: 120, height: 220, top: 71, left: 134, $opacity: 0.7 },
                    { '&zIndex': 2, width: 150, height: 240, top: 61, left: 0, $opacity: 0.8 },
                    { '&zIndex': 3, width: 180, height: 288, top: 37, left: 110, $opacity: 0.9 },
                    { '&zIndex': 4, width: 200, height: 358, top: 0, left: 262, $opacity: 1 },
                    { '&zIndex': 3, width: 180, height: 288, top: 37, left: 468, $opacity: 0.9 },
                    { '&zIndex': 2, width: 150, height: 240, top: 61, left: 620, $opacity: 0.8 },
                    { '&zIndex': 1, width: 120, height: 220, top: 71, left: 496, $opacity: 0.7 }
                ]
                this.lis = this.$ele.find('.li_1')
                
                this.interval
                // 点击切换到下一张
        
                this.$ele.find('section:nth-child(2)').on('click', function () {
                    this.stop()
                    this.next()
                    this.play()
                }.bind(this))
                // 点击切换到上一张
                this.$ele.find('section:nth-child(1)').on('click', function () {
                    this.stop()
                    this.prev()
                    this.play()
                }.bind(this))
                this.move()
                // 让轮播图开始自动播放
                this.play()
            }
        
        
            Slide.prototype = {
        
        
                // 原型是一个对象，所以写成一个花括号
        
                // move()方法让轮播图到达states指定的状态
                // <1>当页面打开时将轮播图从中心点展开
                // <2>当轮播图已经展开时，会滚动轮播图(需要翻转states数组中的数据)
                move: function () {
        
                    this.lis.each(function (i, el) {
                        $(el)
                            .css('z-index', this.states[i]['&zIndex'])
                            .finish().animate(this.states[i], this.options.speed)
                            // .stop(true,true).animate(states[i], 1000)
                            .find('.sp').css('opacity', this.states[i].$opacity)
                    }.bind(this))
                },
                // 让轮播图切换到下一张
                next: function () {
        
                    this.states.unshift(this.states.pop())
                    this.move()
                },
                // 让轮播图滚动到上一张
                prev: function () {
        
                    this.states.push(this.states.shift())
                    this.move()
                },
                play: function () {
        
                    this.interval = setInterval(function () {//这个this指window
                        // setInterval、setTimeOut 中的this指向window
        
                        // states.unshift(states.pop())       //从后往前走
                        // states.push(states.shift())     //从前往后走
                        this.next()
                    }.bind(this), this.options.delay)
                },
                // 停止自动播放
                stop: function () {
                    // var _this = this
                    clearInterval(this.interval)
                }
        
            }
            $.fn.zySlide = function (options) {
                this.each(function (i, ele) {
                    new Slide(ele, options)
                })
                return this
            }
        })(jQuery)
        $.noConflict()
        jQuery('.zy-Slide').zySlide({ speed: 500 })
        .css('border', '0px solid blue')