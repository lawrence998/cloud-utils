var {expect} = require('chai');
var {getDayOfYear} = require('../dist/cloud-utils');

describe('#getDayOfYear() 获取某个日期是当年中的第几天', function () {
  it('getDayOfYear(\'2014-01-10\') should return 10', function () {
    expect(getDayOfYear('2014-01-10')).to.eql(10);
  });
});

