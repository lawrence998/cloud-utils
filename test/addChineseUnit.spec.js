var expect = require('expect.js');
var {addChineseUnit} = require('../dist/cloud-utils');

describe('addChineseUnit() 为数字加上单位：万或亿', function () {
  it('1000.01 应该转换为 1000.01', function () {
    expect(addChineseUnit(1000.01)).to.eql(1000.01);
  });

  it('10000 应该转换为 1万', function () {
    expect(addChineseUnit(10000)).to.eql('1万');
  });
});
