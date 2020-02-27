var express = require('express');
var router = express.Router();
const {UserModel} = require('../db/models')
const filter = {'password': 0, '__v': 0} // 查询时过滤掉


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/login', function (req, res) {
  const {username, password} = req.body
  // console.log('/login', username, password)

  UserModel.findOne({username}, function (err, user) {
    if (user) {
      console.log('findUser', user)
      if (user.password !== password) {
        res.send({code: 1, msg: '用户名或密码不正确!'})
      } else {
        req.session.userid = user._id
        res.send({code: 0, data: {_id: user._id, username}})
      }
    } else {
      const userModel = new UserModel({username, password})
      userModel.save(function (err, user) {
        // 向浏览器端返回cookie(key=value)
        res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7})
        req.session.userid = user._id
        const data = {_id: user._id, username}
        // 3.2. 返回数据(新的user)
        res.send({code: 0, data})
      })
    }
  })
})


router.post('/updata', function (req, res) {
  // 从请求的cookie得到userid
  const userid = req.cookies.userid
  // 如果不存在, 直接返回一个提示信息
  if(!userid) {
    return res.send({code: 1, msg: '请先登陆'})
  }
  // 存在, 根据userid更新对应的user文档数据
  // 得到提交的用户数据
  const user = req.body // 没有_id
  UserModel.findByIdAndUpdate({_id: userid}, user, function (error, oldUser) {

    if(!oldUser) {
      // 通知浏览器删除userid cookie
      res.clearCookie('userid')
      // 返回返回一个提示信息
      res.send({code: 1, msg: '请先登陆'})
    } else {
      // 准备一个返回的user数据对象
      const {_id, username} = oldUser
      const data = Object.assign({_id, username}, user)
      // 返回
      res.send({code: 0, data})
    }
  })
})
// 获取用户列表
router.get('/userList', function(req,res) {
  // 从请求的cookie得到userid
  const userid = req.cookies.userid
  if(!userid) {
    return res.send({code:1, msg:'请先登录'})
  }
  // 根据userid查询对应的user
  UserModel.find(function(err, user) {
    res.send({code:0, data:user})
  })
})

//获取用户详细信息的路由

router.get('/user', function(req,res) {
  // 从请求的cookie得到userid
  const userid = req.cookies.userid
  
  if(!userid) {
    return res.send({code:1, msg:'请先登录'})
  }
    UserModel.findOne({_id:userid},filter, function(err, user) {
      res.send({code:0, data:user})
    })
  
})


  module.exports = router
