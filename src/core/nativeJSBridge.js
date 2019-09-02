import isLightOS from './isLightOS';

/**
 * 兼容 lightOS 离线包及 tzyj 在线
 * @param method
 * @param params
 * @param cb
 *
 */
function nativeJSBridge({method = '', params = null, cb = null}) {
  if (isLightOS()) {
    // tzyj 在 light 的 基类上自行扩展封装的方法
    if (method === 'winner.hsJsFunction') {
      window.LightJSBridge && window.LightJSBridge.call(method, params, function (result) {
        let ret = null;
        if (result.info && result.info.error_message === 'success') {
          ret = result.data;
        }
        typeof cb === 'function' && cb(ret);
      });
    } else {
      // LightSDK
      window.LightSDK && window.LightSDK.native[method](params, function (result) {
        let ret = null;
        if (result.info && result.info.error_message === 'success') {
          ret = result.data;
        }
        typeof cb === 'function' && cb(ret);
      });
    }
  } else {
    // 非 Light 容器，
    // 安卓和IOS的在线版本
    if (typeof window.winner === 'object') {
      window.winner.hsJsFunction(JSON.stringify(params));
    }
  }
}

export default nativeJSBridge;
