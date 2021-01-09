/**
 * 清除空格
 *
 * @param {string} str  目标字符串
 * @param {string} type all-所有空格  startAndEnd | leftAndRight-前后空格  left | start-前空格 right | end-后空格
 * @returns {*}
 * @example
 *
 * trimAll(' 123 ');
 * // => 123
 */
function trimAll(str, type = 'all') {
  if (typeof str !== 'string') throw new Error('输入值必须为字符串');

  switch (type) {
    case 'all':
      return str.replace(/\s+/g, '');
    case 'startAndEnd': case 'leftAndRight':
      return str.replace(/(^\s*)|(\s*$)/g, '');
    case 'left': case 'start':
      return str.replace(/(^\s*)/g, '');
    case 'right': case 'end':
      return str.replace(/(\s*$)/g, '');
    default:
      return str;
  }
}

export default trimAll;
