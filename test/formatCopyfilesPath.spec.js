var {expect} = require('chai');
var {formatCopyfilesPath} = require('../dist/cloud-utils');

describe('#formatCopyfilesPath() 静态文件路径补全', function () {
  it('formatCopyfilesPath(\'logo.png\') should return \'assets/images/copyfiles/logo.png\'', function () {
    var ret = 'assets/images/copyfiles/logo.png';

    expect(formatCopyfilesPath('logo.png')).to.eql(ret);
  });
});
