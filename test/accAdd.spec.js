var expect = require('expect.js');
var {accAdd} = require('../dist/cloud-utils');

describe('accAdd() 加法函数，用来得到精确的加法结果', function () {
  it('0.1 + 0.2 应该等于 0.3', function () {
    expect(accAdd(0.1, 0.2)).to.eql(0.3);
  });
});
