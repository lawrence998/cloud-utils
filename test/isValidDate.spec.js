var {expect} = require('chai');
var {isValidDate} = require('../dist/cloud-utils');

describe('#isValidDate() 是否为有效的日期，格式为 yyyy-mm-dd', function () {
  it('isValidDate(\'2015-01-20\') should return true', function () {
    expect(isValidDate('2015-01-20')).to.be.ok;
  });

  it('isValidDate(\'2015-0120\') should return false', function () {
    expect(isValidDate('2015-0120')).to.not.be.ok;
  });
});



