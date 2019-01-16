$(function(){
    var  pno=0;
    function loadPage(no=0){
      pno=no;
    if(location.search.indexOf("kwords=")!=-1){

      //header.js:23 $input.val(decodeURI(kw))
      var kwords=decodeURI(
        location.search.split("=")[1]
      );
      $.ajax({
        url:"http://localhost:2500/product/",
        type:"get",
        data:{kwords,pno},
        dataType:"json",
        success:function(output){
          var {product}=output;
         var html="";
         for(var p of product){
           var {lid,title,price,md}=p;
           html+=`<div class="col-lg-4 col-md-6 p-2">
                    <div class="card p-3">
                        <!--上：图片-->
                        <a href="product_detail.html?lid=${lid}">
                            <img class="card-img-top" src="${md}"/>
                        </a>
                        <!--下：具体内容-->
                        <div class="mt-3">
                            <h5 class="my-fontcolor">¥${price.toFixed(2)}</h5>
                            <a href="product_detail.html?lid=${lid}" class="my-alist text-muted my_small">${title}</a>
                            <!--所有按钮 :- 输入框 + 加入购物车-->
                            <div class="d-flex justify-content-between align-items-center"  id="btn">
                                <button type="button" class="btn p-0 text-white border-0 my_btn_gray">-</button>
                                <input type="text" class="form-control my_input_w p-1 text-center" value="1"/>
                                <button type="button" class="btn p-0 text-white border-0 my_btn_gray">+</button>
                                <a href="http://localhost:2500/cart.html" class="btn pl-1 pr-1 my-bgcolor border-0"  data-lid="${lid}">加入购物车</a>
                            </div>
                        </div>
                    </div>
                </div>`;
         }
         $("#shangpin").html(html);

          /*  分页 */
        var {pno,pageCount}=output;
        html=`<li class="page-item  ${pno==0?'disabled':''}"><a class="page-link my-fontcolor href="#">上一页</a></li>`;
        for(var i=0;i<pageCount;i++){
        html+=`<li class="page-item ${pno==i?'active':''}" ><a class="page-link ${pno!=i?'bg-transparent':'border'}" href="#">${i+1}</a></li>`;
       }

        html+=`<li class="page-item ${pno==pageCount-1?'disabled':''}" ><a class="page-link  my-fontcolor" href="#">下一页</a></li>`;
        $(".pagination").html(html);
       }
    })
 }
}
loadPage();


$(".pagination").on("click","a:not(.disabled):not(.active)",function(e){
    e.preventDefault();
    var $a=$(this);
    if($a.parent().is(":first-child")){
      loadPage(pno-1);
    }else if($a.html()==="下一页"){
      loadPage(pno+1);
    }else{
      var n=parseInt($a.html());     
      pno=n-1;
      loadPage(pno);
      /* 123  */
    }
})

        /* 加入购物车按钮 */
        $("#btn button").click(function(){
          console.log(11111);
          
          var n=parseInt($("input").val());
            if($("button").html("++"))
              n++;
            else if(n>1)
              n--;
              $("input").val(n);
        });
})