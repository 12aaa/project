# 接口文档

## 目录：

[1、用户名密码登陆](#1用户名密码登陆)<br/>
## 1、用户名密码登陆
     
### 请求URL：
	http://localhost:4000/login

### 请求方式：
	POST

### 参数类型: 请求体

	|参数		|是否必选 |类型     |说明
	|name       |Y       |string   |用户名
	|pwd        |Y       |string   |密码

### 返回示例：
    * 登陆成功
      {
        "code": 0,
        "data": {
          "_id": "5e56844531fdc80a30f70aca",
          "username": "7"
        }
      }
    * 登陆失败
      {
        "code": 1,
        "msg": "用户名或密码不正确!"
      }

[2、编辑更新用户信息](#2编辑更新用户信息)<br/>
## 2、编辑更新用户信息
     
### 请求URL：
	http://localhost:4000/updata

### 请求方式：
	POST

### 参数类型: 请求体

	|参数		|是否必选 |类型     |说明
	|name      |Y       |string   |姓名
  |age       |Y       |string   |年龄
	|email     |Y       |string   |邮箱
	|phone     |Y       |string   |手机号

### 返回示例：
    * 更新成功

      {
        "code": 0,
        "data": {
          "_id": "5e57156491c90a1904ce3fca",
          "username": "6",
          "name": "lily",
          "age": "21",
          "email": "1774315265",
          "phone": "15879975960"
        }
      }
    * 更新失败
      {
        "code": 1,
        "msg": "请先登陆"
      }


[3、收集人员列表信息](#3收集人员列表信息)<br/>
## 3、收集人员列表信息
     
### 请求URL：
	localhost:4000/userList

### 请求方式：
	GET

### 参数类型: 请求体

	|参数		|无

### 返回示例：
    * 更新成功
    {
    "code": 0,
    "data": [
         {
        "_id": "5e579abbc05cee55e067392f",
        "username": "00",
        "password": "123",
        "__v": 0,
        "phone": "15879975960",
        "email": "1774315265@qq.com",
        "age": "11",
        "name": "456"
      },
      {
        "_id": "5e57a97715b74b56ec3cc015",
        "username": "37",
        "password": "444",
        "__v": 0,
        "phone": "15879975960",
        "email": "1774315265",
        "age": "21",
        "name": "999"
      },
      {
        "_id": "5e57bef160894a1424801ee5",
        "username": "056",
        "password": "123",
        "__v": 0,
        "phone": "15879975960",
        "email": "17743152652@qq.com",
        "age": "13",
        "name": "liluy"
      }
    ]
  }
    * 更新失败
      {
        "code": 1,
        "msg": "请先登陆"
      }