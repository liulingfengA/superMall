"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modules = require("./modules");

var _default = {
  addCart: function addCart(context, payload) {
    return new Promise(function (resolve, reject) {
      var oldProduct = context.state.cartList.find(function (item) {
        return item.iid === payload.iid;
      });

      if (oldProduct) {
        context.commit(_modules.ADD_COUNTER, oldProduct);
        resolve('添加商品成功');
      } else {
        payload.count = 1;
        context.commit(_modules.ADD_TO_CART, payload);
        resolve('添加商品成功');
      }
    });
  }
};
exports["default"] = _default;