$(function(){
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    $.ajax({
      url:"header.html",
      type:"get",
      success:function(res){
        $(res).replaceAll("#header");

          var $search=
          $("#header>div>h6>a");   //搜索按钮
        var $input=$search.prev();
        $search.click(function(){
          location.href=
            `http://localhost:2500/product.html?kwords=${$input.val().trim()}`
        })
        $input.keyup(function(e){
          if(e.keyCode==13)
            $search.click()
        })
        
        if(location.search.indexOf("kwords=")!=-1){
          $input.val(
          //专治: encodeURI/encodeURIComponent编码后的字符
            decodeURIComponent(
              location.search.split("=")[1]
            )
          )
        }
  
        var uname=sessionStorage.getItem("uname");  
        if(uname){
            var html='<a href="#">'+"欢迎"+': &nbsp;<span id="uname">'
            +uname+`</span></a>
            <a id="zhuxiao" href="javascript:;">注销</a>`;
            $("#signout").html(html);
        }
        $("#zhuxiao").click(function(){
            //将sessionStorage  uname  删除
          sessionStorage.removeItem("uname");
          // 2: 3s退出index.html
          alert("退出登录,3秒后即将返回首页");
          setTimeout(function(){
              location.href="http://localhost:2500/index.html"
          },3000)
        })
      }
      
    }) 
  })