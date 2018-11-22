var {expect} = require('chai');
var {formatDateToTimeStamp} = require('../dist/cloud-utils');

describe('#formatDateToTimeStamp() 获取指定时间 unix 时间戳', function () {
  var ret = 1453780800000;
  it('formatDateToTimeStamp(\'20160126 12:00:00\') should return 1453780800000', function () {
    expect(formatDateToTimeStamp('20160126 12:00:00')).to.eql(ret);
  });

  it('formatDateToTimeStamp(\'2016-01-26 12:00:00\') should return 1453780800000', function () {
    expect(formatDateToTimeStamp('2016-01-26 12:00:00')).to.eql(ret);
  });

  it('formatDateToTimeStamp(\'2016.01.26 12:00:00\') should return 1453780800000', function () {
    expect(formatDateToTimeStamp('2016.01.26 12:00:00')).to.eql(ret);
  });

  it('formatDateToTimeStamp(\'2016.01.26 12:00:00.0\') should return 1453780800000', function () {
    expect(formatDateToTimeStamp('2016.01.26 12:00:00.0')).to.eql(ret);
  });

  it('formatDateToTimeStamp(\'20160126\') should return 1453737600000', function () {
    expect(formatDateToTimeStamp('20160126')).to.eql(1453737600000);
  });

  it('formatDateToTimeStamp(1453780800000) should throw an exception', function () {
    var badFn = function () {
      formatDateToTimeStamp(1453780800000);
    };
    expect(badFn).to.throw(TypeError, '据类型必须是 string');
  });
});

