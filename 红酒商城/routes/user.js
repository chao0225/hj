const express = require('express');
const pool = require('../pool');
var router = express.Router();

//验证用户名是否存在
router.get('/checkUname',(req,res)=>{
	var uname = req.query.uname;
	var reg = /^\w{6,12}$/ig
	if(!uname){
		res.send({ok:3,msg:"用户名不能为空"})//用户名为空的情况
		return;
	}else if(!reg.exec(uname)){
		res.send({ok:4,msg:"用户名必须为6-12位"})
		return;
	}
	var sql = "SELECT * FROM hj_user WHERE uname=?"
	pool.query(sql,[uname],(err,result)=>{
		if(err) throw err;
		if(result.length > 0){
            res.write(JSON.stringify({
                ok:2,
                msg:"用户名已存在"
            }))//用户名不能用
        }else{
            res.write(JSON.stringify({
                ok:1,
                msg:"用户名可用"
            }))//用户名可用res.send('1');
        }
        res.end();
	});
});


//注册用户
router.post('/register',(req,res)=>{
	var uname = req.body.uname;
	var upwd = req.body.upwd;
	var email = req.body.email;
	var phone = req.body.phone;
	var user_uname = req.body.user_uname;
	var gender = req.body.gender;
	var sql = 'INSERT INTO hj_user VALUES (NULL,?,?,?,?,?,?)'
	pool.query(sql,[uname,upwd,email,phone,user_uname,gender],(err,result)=>{
		if(err) throw err;
		res.send({ok:1,msg:"注册成功"});

	})
	console.log(uname);
	console.log(upwd);
	console.log(email);
})

//用户登录
router.get('/login',(req,res)=>{
	var uname = req.query.uname;
	var upwd = req.query.upwd;
	console.log(uname);
    console.log(upwd);
	var sql = 'SELECT * FROM hj_user WHERE uname=? AND upwd=?'
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err)  console.log(err);
		if(result.length==1){
			res.send({ok:1});//查询到相应用户
		}else{
			res.send({ok:0,msg:"用户名或密码错误，请重新登录"});//未查询到相应用户
		}
	})
})


//用户列表
router.get('/list',(req,res)=>{
	var $size = parseInt(req.body.size);
	var $page = parseInt(req.body.page);
	var $bedin = ($page-1) * $size;			//计算分页查询的开始
	//bedin = (页码-1)*页码大小，count——页码大小
	var sql = 'SELECT * FROM hj_user LIMIT ?,?'
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		if(result.length > 0){
			res.send(result);
		}
	});
})

router.get('/lyb',(req,res)=>{
	var sql = 'SELECT * FROM redwine_lyb'
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})

router.post('/lybcontent',(req,res)=>{
	var $content = req.body.content;
	var reg = /^([\u4e00-\u9fa5]|\w|.|\s){1,50}$/;
	if(!$content){
		res.send('3')
		return;
	}else if(!reg.exec($content)){
		res.send('2')
		return;
	}
	var sql = "INSERT INTO redwine_lyb VALUES (null,?)"
	pool.query(sql,[$content],(err,result)=>{
		if(err) throw err;
		res.send('1');
	})
})

module.exports = router;