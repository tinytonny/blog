var express = require('express');
var router = express.Router();
var dbModel = require('../models/db');
var md5 = require('../utils/md5');
var async = require('async');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//method:get 注册页面
router.get('/reg', function (req, res, next) {
    res.render('users/reg', {title: '注册'});
});

//method:post 注册页面
router.post('/reg', function (req, res, next) {
    var user = req.body,
        psw = user.password,
        repsw = user.repassword;
    if (psw !== repsw) {
        res.redirect('back');
        console.log('两次输入密码不一致!');
    } else {
        async.series([
            function () {
                dbModel.Users.find({username: user.username}, function (err, doc) {
                    if (err) {
                        res.redirect('back');
                        console.log('注册失败!');
                    } else {
                        if (doc.length !== 0) {
                            res.redirect('back');
                            console.log('用户名已经存在!');
                        }
                    }
                })
            },
            function () {
                dbModel.Users.create(user, function (err, doc) {
                    if (err) {
                        console.log('用户注册失败!');
                    } else {
                        res.redirect('/users/login');
                        console.log('注册成功!');
                    }
                })
            }
        ]);
    }
});

router.get('/login', function (req, res, next) {
    res.render('users/login', {title: '登录'});
});

router.get('/logout', function (req, res, next) {
    res.render('users/logout', {title: '登出'});
});

module.exports = router;
