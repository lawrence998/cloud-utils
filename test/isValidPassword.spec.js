var {expect} = require('chai');
var {isValidPassword} = require('../dist/cloud-utils');

describe('#isValidPassword() 是否为有效的密码强度，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符', function () {
  it('isValidPassword(\'Kd@curry666\') should return true', function () {
    expect(isValidPassword('Kd@curry666')).to.be.ok;
  });

  it('isValidPassword(\'123456qq.com\') should return false', function () {
    expect(isValidPassword('123456qq.com')).to.not.be.ok;
  });
});



