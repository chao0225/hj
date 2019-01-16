 /*
        轮播逻辑
        效果 ==> 图片显示第几章的时候，下面的bullet的第几个就要改变成active
                 点击相应的bullet可以切换到对应的图片
    */

    //初始化一个vue实例然后挂载到父元素上，并设定数据为图片的数组，以及后面计数用的mark，mark初始值为0
    var vm = new Vue({
        el:'.carousel',
        data:{
            mark:0,
            img:[
                    "img/1920.jpg",
                    "img/1920 (1).jpg",
                    "img/1920 (2).jpg",
                    "img/1920 (3).jpg",
                    "img/1920 (4).jpg",
            ],
            time:null
        },
        methods:{   //添加方法
            change(i){
                this.mark = i;
            },
            prev(){
                this.mark--;
                if(this.mark === -1){
                    this.mark = 3;
                    return
                }
            },
            next(){
                this.mark++;
                if(this.mark === 5){
                    this.mark = 0;
                    return
                }
            },
            autoPlay(){
                this.mark++;
                if(this.mark === 5){
                    this.mark = 0;
                    return
                }
            },
            play(){
                this.time = setInterval(this.autoPlay,4000);
            },
            enter(){
                //console.log('enter')
                clearInterval(this.time);
            },
            leave(){
                //console.log('leave')
                this.play();
            }
        },
        created(){
            this.play()
        }
    })


    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
        }
    });


    
$(document).ready(function(){
    
        var slideBox = $("#lb_3");//最外层的div
        var ul = slideBox.find("#lb_3 ul");//搜索最外层的div下所有段落中的后代 ul 元素
        var oneWidth = slideBox.find("li").eq(0).width();//搜索最外层的div下所有段落中的后代 ul li第一个 元素 的宽度
        var number = slideBox.find(" p"); 
        //搜索最外层的div下所有段落中的后代下 .spanBox p  元素
        //注意分号 和逗号的用法
        var timer = null;
        var sw = 0;   
        console.log(222222222222211);                 
        //每个span绑定click事件，完成切换颜色和动画，以及读取参数值
        number.on("click",function (){
            console.log(111111111);
            $(this).addClass("active").siblings().removeClass("active");
            sw=$(this).index();
                ul.animate({
                    "right":oneWidth*sw,   //ul标签的动画为向左移动；
                });
        });
    
        //定时器的使用，自动开始
        timer = setInterval(function (){
            sw++;
            if(sw==number.length){sw=0};
            number.eq(sw).trigger("click");
            },3000);
 
})