/**
 * Created by Tonny1 on 16/4/24.
 */
var express = require('express');
//调用Router方法生成一个路由的实例
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res, next) {
    res.render('articles/add', { title: '发表文章' });
});

module.exports = router;