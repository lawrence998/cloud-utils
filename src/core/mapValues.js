/**
 * 根据提供函数返回的值映射一个新对象
 *
 * @param {object} obj 目标底薪
 * @param {function} fn 函数
 * @returns {{}}
 * @example
 *
 * const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
};
 * mapValues(users, u => u.age);
 * // => { fred: 40, pebbles: 1 }
 */
const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj);
    return acc;
  }, {});

export default mapValues;
