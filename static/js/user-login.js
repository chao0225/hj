// function postlogin(){
// 	var xhr = createXhr();
// 	xhr.onreadystatechange = function(){
// 		if(xhr.readyState == 4 && xhr.status ==200){
// 			var result = xhr.responseText;
// 			if(result == 0){
// 				alert("用户名或密码错误，请确认后重新登录")
// 			}else{
// 				alert("登录成功");
// 				location.href='http://127.0.0.1:2500/index.html';
// 			}
// 		}
// 	}
// 	var uname=$("uname").value;
// 	var upwd=$("upwd").value;
// 	console.log(uname);
// 	console.log(upwd);
// 	xhr.open("get","/user/login?uname=" + uname + "&upwd=" + upwd,true);
// 	xhr.send(null);
// }

$(function(){
    $("#login").click(function(){
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        $.ajax({
            url:"http://localhost:2500/user/login",
            type:"get",        
            data:{uname,upwd},
            dataType:"json",            //数据类型
            success:function(res){    
                console.log(res);
                if(res){
                    if(res.ok=="0"){
                      alert('密码错误，请重新输入');  
                      return false;                                       
                    }else{

                        sessionStorage.setItem("uname",uname); 
                        alert('登陆成功！3s后跳转回首页');
                        setTimeout(function(){
                        location.href='http://localhost:2500/index.html';
                      },3000)
                      

                     
                    }
                  }
            }
        })
    })
})