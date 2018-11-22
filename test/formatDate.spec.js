var {expect} = require('chai');
var {formatDate} = require('../dist/cloud-utils');

describe('#formatDate() Date 转化为指定的格式', function () {
  it('formatDate(1542844800000, \'yyyy-MM-dd hh:mm:ss.S\') should return \'2018-11-22 08:00:00.0\'', function () {
    var ret = '2018-11-22 08:00:00.0';

    expect(formatDate(1542844800000, 'yyyy-MM-dd hh:mm:ss.S')).to.eql(ret);
  });

  it('formatDate(1542844800000, \'yyyy-MM-dd hh:mm:ss\') should return \'2018-11-22 08:00:00\'', function () {
    var ret = '2018-11-22 08:00:00';

    expect(formatDate(1542844800000, 'yyyy-MM-dd hh:mm:ss')).to.eql(ret);
  });

  it('formatDate(1542844800000, \'yyyy-MM-dd hh:mm:ss\') should return \'2018-11-22 08:00:00\'', function () {
    var ret = '2018-11-22 08:00:00';

    expect(formatDate(1542844800000, 'yyyy-MM-dd hh:mm:ss')).to.eql(ret);
  });

  it('formatDate(1542844800000, \'yyyy-MM-dd E hh:mm\') should return \'2018-11-22 四 08:00:00\'', function () {
    var ret = '2018-11-22 四 08:00:00';

    expect(formatDate(1542844800000, 'yyyy-MM-dd E hh:mm:ss')).to.eql(ret);
  });

  it('formatDate(1542844800000, \'yyyy-MM-dd EE hh:mm\') should return \'2018-11-22 周四 08:00:00\'', function () {
    var ret = '2018-11-22 周四 08:00:00';

    expect(formatDate(1542844800000, 'yyyy-MM-dd EE hh:mm:ss')).to.eql(ret);
  });

  it('formatDate(1542844800000, \'yyyy-MM-dd EEE hh:mm\') should return \'2018-11-22 星期四 08:00:00\'', function () {
    var ret = '2018-11-22 星期四 08:00:00';

    expect(formatDate(1542844800000, 'yyyy-MM-dd EEE hh:mm:ss')).to.eql(ret);
  });
});
