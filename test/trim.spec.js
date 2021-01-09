var {expect} = require('chai');
var {trimAll} = require('../dist/cloud-utils');

describe('#trimAll() 清除空格', function () {
  it('trimAll(\' 123 \') should return 123', function () {
    expect(trimAll(' 123 ')).to.eql('123');
  });
});
