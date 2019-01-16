$(function(){
  var lid=location.search.slice(5);
  $.ajax({
    url:"http://localhost:2500/details",
    type:"get",
    data:{lid},
    dataType:"json",
    success: function(res) {
      console.log(res);
      var {product, pics}=res;
      var {title,subtitle,price}=product;
      var h6=document.querySelector(
        "#details>h4:first-child"
      );
      h6.innerHTML=title;    //商品标题
      var nextH6=h6.nextElementSibling;   
      nextH6.innerHTML=subtitle;    //  商品标题  小标题
      var nextDiv=nextH6.nextElementSibling;
      nextDiv.children[0].children[0].innerHTML=
        "¥"+price.toFixed(2);     // 价格
                       
      var html="";
      for(var p of pics){  //遍历图片
        var {sm,md,lg}=p;   //结构 三张图片的  参数
        html+=`<li class="float-left p-1">
          <img src="${sm}" data-md="${md}" data-lg="${lg}">
        </li>`;
      }
      var ulImgs=document.querySelector(   //获取图片的 父级元素
        "#ulimg>ul"
      )
      ulImgs.innerHTML=html;                     // 把三张图片的内容放进父元素里面
      ulImgs.style.width=`${pics.length*62}px`; //父级元素的宽度  
      var leftBtn=
        ulImgs.parentNode.previousElementSibling;  //左边 箭头按钮
      var rightBtn=
        ulImgs.parentNode.nextElementSibling;     //右边 箭头按钮
      if(pics.length<=4)                          //图片的长度 等于 4
        rightBtn.className+=" disabled";          //右边的箭头 就 禁用
  
      var moved=0;    // 移动的个数
      leftBtn.onclick=function(){                   //左边按钮 的 点击事件
        var btn=this;
        if(btn.className.indexOf("disabled")==-1){  //如果左边按钮不是禁用的
          moved--;                                  // --
          ulImgs.style.marginLeft=`-${moved*62}px`  //图片的父级元素往左移动    
          rightBtn.className=           
            rightBtn.className
                    .replace("disabled","");        //右边的按钮禁用解除
          if(moved==0)                              //当图片的个数 为  0时
            btn.className+=" disabled";             // 左边的按钮禁用
        } 
      }
      rightBtn.onclick=function(){                   //左边按钮 的 点击事件
        var btn=this;
        if(btn.className.indexOf("disabled")==-1){   //如果右边按钮不是禁用的
          moved++;                                    //  ++ 
          ulImgs.style.marginLeft=                    //图片的父级元素往右移动    
            `-${moved*62}px`;
          leftBtn.className=
            leftBtn.className
                   .replace("disabled","")            //左边的按钮禁用解除
          if(pics.length-4==moved)                    //当图片的个数 为  7-4时
            btn.className+=" disabled";               // 右边的按钮禁用
        }
      }
  
      var mImg=document.querySelector(                //md  图片
        "#preview>div>img"
      );
      var lgDiv=document.getElementById("div-lg");     //lg 大图片
      mImg.src=pics[0].md;                             //md  图片路径
      lgDiv.style.backgroundImage=                     //大图片的背景 路径
        `url(${pics[0].lg})`;
      //html 30行: class=" ... d-none"
      ulImgs.onmouseover=function(e){                  //四张小图片的鼠标移入事件
        if(e.target.nodeName=="IMG"){                  //如果 点的标签是img
          var img=e.target;
          //<img src=sm data-md=md data-lg=lg
          mImg.src=img.getAttribute("data-md");         //点的是哪个 路径就变成哪个
          lgDiv.style.backgroundImage=  
            `url(${img.getAttribute("data-lg")})`;      //lg图片背景相应的改变
        }
      }
      var mask=document.getElementById("mask");         //获取小布
      var sMask=
        document.getElementById("super-mask");          //获取md 图片
      sMask.onmouseover=function(){                     //md  移入事件
        lgDiv.className=                                  
          lgDiv.className
              .replace("d-none","");                    // lg 图片显示
        mask.className=
          mask.className
              .replace("d-none","");                     // 小布  图片显示
      }
      sMask.onmouseout=function(){                       //md  移出事件
        lgDiv.className+=" d-none";                       // lg 图片隐藏
        mask.className+="d-none";                         // 小布  图片隐藏
      }
      var msize=176;                                      //小布的宽度 或高度  正方形  
      sMask.onmousemove=function(e){
        var left=e.offsetX-msize/2;                       //获取鼠标到 md 图片左边框的距离
        var top=e.offsetY-msize/2;                        //获取鼠标到 md 图片上边框的距离
        //防止mask超出lgDiv范围！ 
        mask.style.left=`${left}px`;                      //小布就往右 移动多少距离
        mask.style.top=`${top}px`;                        //小布就往下 移动多少距离
  
        lgDiv.style.backgroundPosition=
          `-${16/7*left}px -${16/7*top}px`                //lg大图片 移动 16/7 距离
      }
    }
  })
})
//地址: http://localhost:2500/product_details.html?lid=1