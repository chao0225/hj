//失去焦点时验证用户名是否可用
/*
var yhm;
function checkUname(){
	//异步请求 后台查询是否存在该用户
	var xhr = createXhr();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var result = xhr.responseText;
			if(result == 1){
				yhm = '1'//可注册
				$("showUname").innerHTML = "用户名可用";
				$("showUname").style.color = "#83F7BF";
			}else if(result == 2){
				yhm = '0'//不可注册
				$("showUname").innerHTML = "用户名已注册";
				$("showUname").style.color = "red";
			}else if(result == 3){
				yhm = '0'//不可注册
				$("showUname").innerHTML = "用户名称不能为空";
				$("showUname").style.color = "red";
			}else if(result == 4){
				yhm = '0'//不可注册
				$("showUname").innerHTML = "用户名称格式不正确";
				$("showUname").style.color = "red";
			}
		}
	}
	var uname = $("uname").value;
	xhr.open("get","/user/checkUname?uname=" + uname,true);
	xhr.send(null);
}

var mima;
//用户密码失去焦点 验证是否为空
function checkUpwd(){
	var reg = /^\w{6,9}$/ig
	var $upwd = $("upwd")
	if(!$upwd.value){
		$("showUpwd").innerHTML = "用户密码不能为空";
		$("showUpwd").style.color = "red";
		mima = "0";//不可注册
	 }
	//else if(!reg.exec($upwd)){
	// 	$("showUpwd").innerHTML = "用户密码格式不正确";
	// 	$("showUpwd").style.color = "red";
	// 	mima = "0";//不可注册
	// }
	else{
		$("showUpwd").innerHTML = "通过";
		$("showUpwd").style.color = "#83F7BF";
		mima = "1";//可注册
	}
}

var cr;
//确认密码失去焦点时，验证两次密码是否相同
function checkRepeatUpwd(){
	if(!$("repeat-upwd").value){
		$("showRepeatUpwd").innerHTML = "确认密码不能为空";
		$("showRepeatUpwd").style.color = "red";
		cr = "0";//不可注册
	}else if($("repeat-upwd").value == $("upwd").value){
		$("showRepeatUpwd").innerHTML = "通过";
		$("showRepeatUpwd").style.color = "#83F7BF";
		cr = "1";//可注册
	}else{
		$("showRepeatUpwd").innerHTML = "两次密码不一致";
		$("showRepeatUpwd").style.color = "red";
		cr = "0";//不可注册
	}
}

var yx;
//邮箱失去焦点时，验证是否为空
function checkEmail(){
	if(!$("email").value){
		$("showEmail").innerHTML = "邮箱不能为空";
		$("showEmail").style.color = "red";
		yx = "0";//不可注册
	}else{
		$("showEmail").innerHTML = "通过";
		$("showEmail").style.color = "#83F7BF";
		yx = "1";//可注册
	}
}

var lx;
//联系方式失去焦点时，验证是否为空
function checkPhone(){
	if(!$("phone").value){
		$("showPhone").innerHTML = "联系方式不能为空";
		$("showPhone").style.color = "red"
		lx = "0";//不可注册
	}else{
		$("showPhone").innerHTML = "通过";
		$("showPhone").style.color = "#83F7BF";
		lx = "1";//可注册
	}
}

var xm;
//真是姓名失去焦点时，验证是否为空
function checkUserName(){
	if(!$("user_uname").value){
		$("showUserName").innerHTML = "真实姓名不能为空";
		$("showUserName").style.color = "red";
		xm = "0";//不可注册
	}else{
		$("showUserName").innerHTML = "通过";
		$("showUserName").style.color = "#83F7BF";
		xm = "1";//可注册
	}
}

function register(){
	if(yhm == 1 && mima == 1 && yx == 1 && lx == 1 && xm == 1){
		var xhr = createXhr()
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				var result = xhr.responseText;
				console.log(result);
				alert(result);location.href='http://127.0.0.1:2500/user_login.html'
			}
		}
		xhr.open("post","/user/register",true);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		var uname = $("uname").value;
		var upwd = $("upwd").value;
		var email = $("email").value;
		var phone = $("phone").value;
		var user_uname = $("user_uname").value;
		if($("man").checked == true){
			var gender = $("man").value
		}else if($("woman").checked == true){
			var gender = $("woman").value
		}else if($("bm").checked == true){
			var gender = $("bm").value
		}
		xhr.send("uname=" + uname + "&upwd=" + upwd + "&email=" + email + "&phone=" + phone + "&user_uname=" + user_uname + "&gender=" + gender);
	}else{
		alert("请检查注册信息")
	}
}
*/


$(function(){
    //找元素
    $("#register").click(function(){
        var uname=$("#uname").val();
		var upwd=$("#upwd").val();
		var email=$("#email").val();
		var phone=$("#phone").val();
		var user_uname=$("#user_uname").val();
		if($("#man").attr("checked",true)){
			var gender=$("#man").val();
		}else if($("#woman").attr("checked",true)){
			var gender=$("#woman").val();
		}else{
			var gender=$("#bm").val();
		}
        
        /*var reg = /^[a-zA-Z0-9]{4-10}$/
        if(reg.test(upwd)==false){
            upwd.attr("placeholder","密码为字母数字，长度为4-10")
        }*/
        console.log(uname);
        (async function(){
            var res=await $.ajax({
                url:"http://localhost:2500/user/checkUname",
                type:"get",
                data:{uname},
                dataType:"json"
            })
            console.log(res.ok)
            if(res.ok==2){//
                alert(res.msg)//跳转到index.html
            }else if(res.ok==3){
                alert(res.msg)
            }else if(res.ok==4){
                alert(res.msg)
            }
            console.log(res.msg)
            if(res.ok==1){
                var res2 =await $.ajax({
                    url:"http://localhost:2500/user/register",
                    type:"post",
                    data:{uname,upwd,email,phone,user_uname,gender},
                    dataType:"json"
                })
                alert(res2.msg)//提示注册成功
                //跳转到登录页
                if(location.search.startsWith("?back=")){
                    console.log(location.search);
                    var url=location.search.slice(6)
                }else{
                    var url="../user_login.html"
                }
                location.href=url;
            }
        })()
        
        
    })
})