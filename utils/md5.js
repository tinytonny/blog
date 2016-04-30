//input为用户密码 str为加盐的字符串
var str = exports.withSalt = 'withSalt12345';
exports.md5 = function (input) {
    return require('crypto').createHash('md5').update(input + str).digest('hex');//以16进制表示输出值
};