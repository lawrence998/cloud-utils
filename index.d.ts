/**
 * 加法函数，用来得到精确的加法结果<br>
 * javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1加上arg2的精确结果
 * @example
 *
 * accAdd(0.1, 0.2)
 * // => 0.3
 */
export declare function accAdd(arg1: number, arg2: number): number;

/**
 * 除法函数，用来得到精确的除法结果<br>
 * javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1除以arg2的精确结果
 * @example
 *
 * accDiv(0.2, 0.3)
 * // => 0.6666666666666666
 */
export declare function accDiv(arg1: number, arg2: number): number;

/**
 * 乘法函数，用来得到精确的乘法结果<br>
 * javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1乘以arg2的精确结果
 * @example
 *
 * accMul(0.222, 0.3333)
 * // => 0.0739926
 */
export declare function accMul(arg1: number, arg2: number): number;

/**
 * 减法函数，用来得到精确的减法结果<br>
 * javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1减去arg2的精确结果
 * @example
 *
 * accSub(0.3, 0.2)
 * // => 0.1
 */
export declare function accSub(arg1: number, arg2: number): number;

/**
 * 为数字加上单位：万或亿
 *
 * @param {number} number 输入数字.
 * @param {number} decimalDigit 返回的小数点后最多的位数，默认为 2
 * @return {string} 加上单位后的数字（计算结果有时会有精度问题）
 * @example
 *
 * addChineseUnit(1000.01)
 * // => 1000.01
 *
 * addChineseUnit(10000)
 * // => 1万
 *
 * addChineseUnit(99000)
 * // => 9.9万
 *
 * addChineseUnit(566000)
 * // => 56.6万
 *
 * addChineseUnit(5660000)
 * // => 566万
 *
 * addChineseUnit(44440000)
 * // => 4444万
 *
 * addChineseUnit(11111000)
 * // => 1111.1万
 *
 * addChineseUnit(444400000)
 * // => 4.44亿
 *
 * addChineseUnit(400000000000000000000000)
 * // => 3999.99万亿亿
 *
 * addChineseUnit(4000000000000000000000000)
 * // => 4亿亿亿
 */
export declare function addChineseUnit(number: number, decimalDigit: number): string;

/**
 * dom操作，元素添加某个class
 *
 * @since 1.1.5
 * @param el HTML元素
 * @param cls css类名
 * @example
 *
 * <div class="box flex"></div>
 * addClass(document.querySelector('.box'), 'flex1');
 * // => <div class="box flex flex1"></div>
 */
export declare function addClass(el: HTMLElement, cls: string): void;

/**
 * Anagrams of string（带有重复项）
 * 使用递归。对于给定字符串中的每个字母，为字母创建字谜。使用map（）将字母与每部分字谜组合，然后使用reduce（）将所有字谜组合到一个数组中，最基本情况是字符串长度等于2或1。
 *
 * @since 1.2.1
 * @param str
 * @returns {*}
 * @example
 *
 * anagrams('abc');
 * // => ['abc','acb','bac','bca','cab','cba']
 */
export declare function anagrams(str: string): Array<string>;

/**
 * 识别股票代码添加市场后缀
 *
 * @param {string} stock 股票代码
 * @returns {string}
 * @example
 *
 * appendStockSuffix('600570')
 * // => '600570.SS'
 */
export declare function appendStockSuffix(stock: string): string;

/**
 * 将字节转换成友好格式，如Bytes，KB，MB
 *
 * @param {string} bytes
 * @returns {*}
 * @example
 *
 * bytesToSize(10000)
 * // => 9.8 KB
 */
export declare function bytesToSize(bytes: string): string;

/**
 * 大写每个单词的首字母
 *
 * @since 1.2.1
 * @param str
 * @returns {string|*|void|XML}
 * @example
 *
 * capitalizeEveryWord('hello world!');
 * // => 'Hello World!'
 */
export declare function capitalizeEveryWord(str: string): string;

/**
 * 数字金额大写转换
 *
 * @since 1.2.5
 * @param n
 * @returns {string}
 * @example
 *
 * changeMoneyToChinese(100111);
 * => "壹拾万零壹佰壹拾壹元整"
 *
 * changeMoneyToChinese(7.52);
 * => "柒元伍角贰分"
 *
 * changeMoneyToChinese(951434677682.00);
 * => "玖仟伍佰壹拾肆亿叁仟肆佰陆拾柒万柒仟陆佰捌拾贰元整"
 */
export declare function changeMoneyToChinese(n: number): string;

/**
 * 版本比较
 *
 * {@link https://github.com/omichelsen/compare-versions}
 * @param v1 老版本
 * @param v2 新版本
 * @returns {number} v1 > v2 => 1, v1 < v2 => -1, v1 === v2 => 0
 * @example
 *
 * compareVersion('10.1.8', '10.0.4');
 * // => 1
 * compareVersion('10.0.1', '10.0.1');
 * // => 0
 * compareVersion('10.1.1', '10.2.2');
 * // => -1
 */
export declare function compareVersion(v1: string, v2: string): boolean;

/**
 * base64转blob
 *
 * @param {string} dataURL
 * @returns {*}
 * @example
 *
 * const URI = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUvPjwvZGVmcz48cGF0aCBkPSJNOTU5LjQzNiAyNDMuNUwzNzcuNDEzIDg3MC4yNyA2NC4wMiA0NjcuMzQ0bDExNC43MjctOTcuOTMgMTk4LjY2NiAyMDcuMDYgNDkyLjQ4Mi00MjIuNTEgODkuNTQgODkuNTM3em0wIDAiIGZpbGw9IiM0M2E5ZjEiLz48L3N2Zz4=';
 *
 * dataURLToBlob(URI);
 * // => Blob {size: 248, type: "image/svg+xml"}
 */
export declare function dataURLToBlob(dataURL: string): any;

/**
 * 深层克隆对象
 *
 * @param obj {object}
 * @returns {*}
 * @example
 *
 * const a = { foo: 'bar', obj: { a: 1, b: 2 } };
 * const b = deepClone(a);
 * // => a !== b, a.obj !== b.obj
 */
export declare function deepClone(obj: object): any;

/**
 * 深层映射对象键
 *
 * @param obj
 * @param fn
 * @returns {{}}
 * @example
 *
 * const obj = {
  foo: '1',
  nested: {
    child: {
      withArray: [
        {
          grandChild: ['hello']
        }
      ]
    }
  }
};

 const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());

 // =>
 {
  "FOO":"1",
  "NESTED":{
    "CHILD":{
      "WITHARRAY":[
        {
          "GRANDCHILD":[ 'hello' ]
        }
      ]
    }
  }
}
 */
export declare function deepMapKeys(obj: object | Array<string>, fn: () => any): any;

/**
 * 基于给定的键返回嵌套JSON对象中的目标值
 *
 * {@link https://30secondsofcode.org/object#dig}
 * @param obj
 * @param target
 * @returns {any}
 * @example
 *
 * const data = {
 *  level1: {
 *    level2: {
 *      level3: 'some data'
 *    }
 *  }
 * };
 * dig(data, 'level3');
 * // => 'some data'
 * dig(data, 'level4');
 * // => undefined
 */
export declare function dig(obj: object, target: object): object;

/**
 * 加密算法
 * 1.所有入参加入集合M，参数名做key, 值做value
 * 2.提供的密钥1（字段名appid）与密钥2（字段名secret）两项，以及当前时间戳（字段名time)也加入集合M,
 * 3.将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（字典序）
 * 4.集合M所有值拼接成字符串，转化成UTF-8编码格式的字节数组, 最后需要取MD5码（signature摘要值）
 *
 * @param {object} params
 * @example
 *
 * const params = { mobile: '15858264900', nickname: 'liwb', appkey: 'ertfgdf345435568123454rtoiko5=' };
 *
 * md5(encrypt(params).toUpperCase());
 * // => md5('APPKEY=ERTFGDF34543545=&MOBILE=15858264903&NICKNAME=LIWB')
 */
export declare function encrypt(params: object): string;

/**
 * 将from所有的键值对都添加到to上面去，返回to
 *
 * @param {Object} to
 * @param {Object} from
 * @returns {*}
 * @example
 *
 * const from = {mobile: '15858264903', nickname: 'liwb'};
 * const to = {nickname: 'cklwb'};
 *
 * extend(to, from);
 * // => {nickname: "liwb", mobile: "15858264903"}
 */
export declare function extend(to: object, from: object): object;

/**
 * 斐波那契数组生成器
 * 创建一个特定长度的空数组，初始化前两个值（0和1）。使用Array.reduce（）向数组中添加值，后面的一个数等于前面两个数相加之和（前两个除外）。
 *
 * @since 1.2.1
 * @param num
 * @returns {*}
 * @example
 *
 * fibonacci(5);
 * // => [0,1,1,2,3]
 */
export declare function fibonacci(num: number): Array<number>;

/**
 * 格式化银行卡<br>
 * 用户在输入银行卡号时，需要以4位4位的形式显示，就是每隔4位加个空格，方便用户校对输入的银行卡是否正确<br>
 * **注：**一般数据库里面存的都是不带格式的原始数据，所以提交的时候记得过滤下空格再提交哦。毕竟格式化这种算是表现层，前端展示的时候处理下就好，业务逻辑什么用到的卡号可不是格式化后的呢。<br>
 * 还原`val.replace(/\s/g, '');`
 *
 * @param {string} val
 * @returns {*}
 * @example
 *
 * formatBankCard('6225365271562822');
 * // => 6225 3652 7156 2822
 */
export declare function formatBankCard(val: string): string;

/**
 * Date 转化为指定格式的String<br>
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)可以用 1-2 个占位符<br>
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *
 * @param {string | number} date string支持形式：20160126 12:00:00，2016-01-26 12:00:00，2016.01.26 12:00:00，20160126，2016-01-26 12:00:00.0
 * @param {string} fmt
 * @returns {string}
 * @example
 *
 * formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss.S');
 * // => 2006-07-02 08:09:04.423
 *
 * formatDate(Date.now(), 'yyyy-MM-dd E HH:mm:ss');
 * // => 2009-03-10 二 20:09:04
 *
 * formatDate(Date.now(), 'yyyy-MM-dd EE hh:mm:ss');
 * // => 2009-03-10 周二 08:09:04
 *
 * formatDate(Date.now(), 'yyyy-MM-dd EEE hh:mm:ss');
 * // => 2009-03-10 星期二 08:09:04
 *
 * formatDate(Date.now(), 'yyyy-M-d h:m:s.S')
 * // => 2006-7-2 8:9:4.18
 */
export declare function formatDate(date: any, fmt: string): string;

/**
 * 用符号（默认为逗号）格式化金钱
 *
 * @param {string} val
 * @param {string} symbol 默认`,`
 * @returns {string|*|XML|void}
 * @example
 *
 * formatMoney('1234567890');
 * // => 1,234,567,890
 */
export declare function formatMoney(val: string, symbol: string): string;

/**
 * 格式化数字、金额、千分位、保留几位小数、舍入舍去
 *
 * @since 1.0.7
 * @param number 要格式化的数字
 * @param decimals 保留几位小数
 * @param decPoint 小数点符号
 * @param thousandsSep 千分位符号
 * @param roundTag 舍入参数，默认 'ceil' 向上取,'floor'向下取,'round' 四舍五入
 * @returns {XML|void|*|string}
 * @example
 *
 * formatNumber(2, 2, '.', ',');
 * // => 2.00
 */
export declare function formatNumber(number: number, decimals: number, decPoint: string, thousandsSep: string, roundTag: string): number;

/**
 * 手机号码中间部分替换成指定符号
 *
 * @param {string} phone
 * @param {string} symbol 默认为`*`
 * @returns {string|*|XML|void}
 * @example
 *
 * formatPhone('15858264903');
 * // => 158****4903
 */
export declare function formatPhone(phone: string, symbol: string): string;

/**
 * 将时间转化为几天前,几小时前，几分钟前
 *
 * @param {number} ms
 * @returns {*}
 * @example
 *
 * formatTimeAgo(1505232000000);
 * // => 1天前
 */
export declare function formatTimeAgo(ms: number): string;

/**
 * 生成guid
 *
 * @returns {string}
 * @example
 *
 * generateGUID();
 * // => 1e508ed6-6177-498d-c2a3-467f546db6ab
 */
export declare function generateGUID(): string;

/**
 * 从对象中检索给定选择器指示的一组属性
 *
 * {@link https://30secondsofcode.org/object#get}
 * @param from
 * @param selectors
 * @returns {string[]}
 * @example
 *
 * const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
 * get(obj, 'selector.to.val', 'target[0]', 'target[2].a');
 * // =>  ['val to select', 1, 'test']
 */
export declare function get(from: object, selectors: object): Array<any>;

/**
 * 获取浏览器的类型和版本号
 *
 * @returns {{type: string, version: string}}
 * @example
 *
 * getBrowser();
 * // => {type: "chrome", version: "60.0.3112.101"}
 */
export declare function getBrowser(): object;

/**
 * 获取某个日期是当年中的第几天
 *
 * @since 1.2.4
 * @param time
 * @returns {number}
 * @example
 *
 * getDayOfYear('2014-01-10')
 * => 10
 */
export declare function getDayOfYear(time: string): number;

/**
 * 获取某个日期在这一年的第几周
 *
 * @since 1.2.4
 * @param time
 * @returns {number}
 * @example
 *
 * getDayOfYearWeek('2014-01-10')
 * => 2
 */
export declare function getDayOfYearWeek(time: string): number;

/**
 * 返回指定长度的天数集合
 * 摘自：https://segmentfault.com/a/1190000013041329
 *
 * @param time
 * @param len
 * @param direction
 * @return {Array} 数组
 * @example
 *
 * getDays('2018-1-29', 6, 1)
 * // => ["2018-1-26", "2018-1-27", "2018-1-28", "2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]
 */
export declare function getDays(time: string, len: number, direction: number): Array<string>;

/**
 * 获取移动设备信息，如是否是iOS，android等
 *
 * @returns {{}}
 * @example
 *
 * getDevice();
 * // => {"androidChrome":false,"ipad":false,"iphone":true,"android":false,"ios":true,"os":"ios","osVersion":"9.1","webView":null}
 */
export declare function getDevice(): object;

/**
 * 得到两个时间的时间差（返回天数）
 *
 * @since 1.0.7
 * @param {number} startDay 开始时间戳
 * @param {number} endDay   结束时间戳
 * @returns {number}
 * @example
 *
 * getDiffDay(1501516800000, 1504195200000);
 * // => 31
 */
export declare function getDiffDay(startDay: number, endDay: number): number;

/**
 * 主动防御
 * 对于我们操作的数据，尤其是由 API 接口返回的，时常会有一个很复杂的深层嵌套的数据结构。为了代码的健壮性，很多时候需要对每一层访问都作空值判断，就像这样：
 props.user &&
 props.user.posts &&
 props.user.posts[0] &&
 props.user.posts[0].comments &&
 props.user.posts[0].comments[0]
 代码看起来相当不美观，因此提供了一个非常简洁明了的原生的方式。
 *
 * @param p 属性列表
 * @param o 对象
 * @returns {*} 如果正常访问到，则返回对应的值，否则返回 null。
 * @example
 *
 * var props = {
 *  user: {
 *    post: [{
 *      comments: 'test'
 *    }]
 *  }
 * };
 * getIn(['user', 'post', 0, 'comments'], props);
 * // => test
 */
export declare function getIn(p: Array<string | number>, o: any): number | string;

/**
 * 获取location.href参数
 *
 * @param {string} name
 * @returns {*}
 * @example
 *
 * window.location.href = 'http://www.baidu.com/?a=1&b=2';
 *
 * getLocationHrefParam('a');
 * // => 1
 */
export declare function getLocationHrefParam(name: string): string;

/**
 * 获取location.search的参数
 *
 * @param {string} name
 * @returns {*}
 * @example
 *
 * window.location.href = 'http://www.baidu.com/?a=1&b=2';
 *
 * getLocationSearchParam('a');
 * // => 1
 */
export declare function getLocationSearchParam(name: string): string;

/**
 * 获取某月有多少天
 * 摘自：https://segmentfault.com/a/1190000013041329
 *
 * @param time
 * @return {number} 天数
 * @example
 *
 * getMonthOfDay('2018-1-29')
 * // => 31
 */
export declare function getMonthOfDay(time: string): number;

/**
 * 返回指定长度的月份集合
 * 摘自：https://segmentfault.com/a/1190000013041329
 *
 * @param time
 * @param len
 * @param direction
 * @return {Array} 数组
 * @example
 *
 * getMonths('2018-1-29', 6, 1)
 * // => ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
 */
export declare function getMonths(time: string, len: number, direction: number): Array<string>;

/**
 * 获取设备像素比
 *
 * @returns {number}
 * @example
 *
 * // window.navigator.appVersion(5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1)
 * getPixelRatio();
 * // => 2
 */
export declare function getPixelRatio(): number;

/**
 * 获取滚动位置
 * 如果已定义，请使用pageXOffset和pageYOffset，否则使用scrollLeft和scrollTop，可以省略el来使用window的默认值。
 *
 * @since 1.2.1
 * @param el
 * @returns {{x: Number, y: Number}}
 * @example
 *
 * getScrollPos();
 * // => {x: 0, y: 200}
 */
export declare function getScrollPos(el: HTMLElement): any;

/**
 * 根据参数获取对应的值
 *
 * @param {string} name
 * @returns {*}
 * @example
 *
 * // window.location.href: 'http://www.baidu.com/?a=1&b=2&state=broker:aaaa1111ccc;tenant:asdfasdf;view_tag:2;
 * getUrlNames('state');
 * // => {broker: "aaaa1111ccc", tenant: "asdfasdf", view_tag: "2"}
 */
export declare function getUrlNames(name: string): any;

/**
 * 获取网址参数
 * @param {string} url
 * @returns {{}} 返回包含当前URL参数的对象。
 * @example
 *
 * getURLParameters('http://url.com/page?name=Adam&surname=Smith');
 * => // {name: 'Adam', surname: 'Smith'}
 */
export declare function getURLParameters(url: string): any;

/**
 * 获取某年有多少天
 *
 * @since 1.2.4
 * @param time
 * @returns {number}
 * @example
 *
 * getYearOfDay('2014')
 * => 365
 */
export declare function getYearOfDay(time: string): number;

/**
 * Dom 操作，元素是包含某个 class
 *
 * @since 1.1.5
 * @param el HTML元素
 * @param cls css类名
 * @returns {boolean}
 * @example
 *
 * <div class="box flex"></div>
 * hasClass(document.querySelector('.box'), 'flex');
 * // => true
 */
export declare function hasClass(el: HTMLElement, cls: string): boolean;

/**
 * Hex 转换为 Rgb
 *
 * @since 1.2.0
 * @param hex
 * @returns {*}
 * @example
 *
 * hexToRgb("#0033ff").g;
 * // => 51
 */
export declare function hexToRgb(hex: string): any;

/**
 * html字符解码
 *
 * @param {string} str
 * @returns {string}
 * @example
 *
 * htmlDecode('&lt;script&gt;');
 * // => <script>
 */
export declare function htmlDecode(str: string): string;

/**
 * html字符编码
 *
 * @param {string} str
 * @returns {string}
 * @example
 *
 * htmlEncode('<script>');
 * // => &lt;script&gt;
 */
export declare function htmlEncode(str: string): string;

/**
 * 是否是支付宝内核
 *
 * @returns {boolean}
 * @example
 *
 * inAlipay();
 * // => false
 */
export declare function inAlipay(): boolean;

/**
 * 将文本插入到文本区域的光标位置<br>
 * _应用场景：_如在评论框里，在光标位置里插入emoji等
 *
 * @param {object} dom对象
 * @param {string} str
 * @example
 *
 * <textarea name="textarea" rows="10" cols="50">你好世界~</textarea>
 *
 * const editText = document.querySelector('#editText');
 *
 * insertText(editText, 'hello world');
 * // =>
 */
export declare function insertAtCaret(dom: any, str: string): void;

/**
 * 反转对象的键值对
 * 而不会改变它。使用 Object.keys() 和 Array.reduce() 来反转对象的键值对。
 *
 * @param obj
 * @returns {{}}
 * @example
 *
 * invertKeyValues({ name: 'John', age: 20 });
 * // => { 20: 'age', John: 'name' }
 */
export declare function invertKeyValues(obj: object): object;

/**
 * 是否是微信内核
 *
 * @returns {boolean}
 * @example
 *
 * inWeixin();
 * // => false
 */
export declare function inWeixin(): boolean;

/**
 * 是否为有效的身份证号
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isCardId('411423198807127834');
 * // => true
 */
export declare function isCardId(val: string): boolean;

/**
 * 是否为中文
 *
 * @since 1.2.4
 * @param val
 * @returns {boolean}
 * @example
 *
 * isChinese('中文');
 * // => true
 */
export declare function isChinese(val: string): boolean;
