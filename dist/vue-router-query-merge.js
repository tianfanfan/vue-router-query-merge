'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
 * @Author: tian.fanfan
 * @Date: 2018-12-19 13:25:51
 * @Last Modified by: tian.fanfan
 * @Last Modified time: 2018-12-19 13:49:09
 */
exports.default = {
  install: function install(Vue, options) {
    function needRouterPlugin() {
      console.log('%cneed vue router plugins', 'color: #ff0000;');
    };
    Vue.prototype.$routerNQpush = function (queryObj) {
      if (this.$router) {
        // console.log('welcome to use routerQpush')
        this.$router.push(_extends({}, this.$route, {
          query: _extends({}, queryObj)
        }));
      } else {
        needRouterPlugin();
      }
    };
    Vue.prototype.$routerQpush = function (queryObj) {
      if (this.$router) {
        // console.log('welcome to use routerQpush')
        this.$router.push(_extends({}, this.$route, {
          query: _extends({}, this.$route.query, queryObj)
        }));
      } else {
        needRouterPlugin();
      }
    };
    Vue.prototype.$routerNQrep = function (queryObj) {
      if (this.$router) {
        this.$router.replace(_extends({}, this.$route, {
          query: _extends({}, queryObj)
        }));
      } else {
        needRouterPlugin();
      }
    };
    Vue.prototype.$routerQrep = function (queryObj) {
      if (this.$router) {
        this.$router.replace(_extends({}, this.$route, {
          query: _extends({}, this.$route.query, queryObj)
        }));
      } else {
        needRouterPlugin();
      }
    };
  }
};