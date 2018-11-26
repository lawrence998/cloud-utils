var {expect} = require('chai');
var {compareVersion} = require('../dist/cloud-utils');

describe('#compareVersion() 版本比较', function () {
  it('compareVersion(\'1.0.0\', \'1.0.1\') should return true', function () {
    expect(compareVersion('1.0.0', '1.0.1')).to.be.ok;
  });

  it('compareVersion(\'6.02.002\', \'6.02.001\') should return false', function () {
    expect(compareVersion('6.02.002', '6.02.001')).to.not.be.ok;
  });

  it('compareVersion(\'6.02.002\', \'6.02\') should return false', function () {
    expect(compareVersion('6.02.002', '6.02')).to.not.be.ok;
  });
});

