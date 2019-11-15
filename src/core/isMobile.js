/**
 * 是否为有效的手机号
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isMobile('15898745678');
 * // => true
 */
function isMobile(val) {
  const reg = /^[1][3456789]\d{9}$/;

  return reg.test(val);
}

export default isMobile;
