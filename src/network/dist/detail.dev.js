"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDetailData = getDetailData;
exports.getRecommend = getRecommend;
exports.goodsParam = exports.Goods = void 0;

var _request = require("./request.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getDetailData(iid) {
  return (0, _request.request)({
    url: "/detail",
    params: {
      iid: iid
    }
  });
}

function getRecommend() {
  return (0, _request.request)({
    url: "/recommend"
  });
}

var Goods = function Goods(itemInfo, columns, services) {
  _classCallCheck(this, Goods);

  this.title = itemInfo.title;
  this.desc = itemInfo.desc;
  this.newPrice = itemInfo.price;
  this.oldPrice = itemInfo.oldPrice;
  this.discount = itemInfo.discountDesc;
  this.service = services;
  this.columns = columns;
  this.realPrice = itemInfo.lowNowPrice;
};

exports.Goods = Goods;

var goodsParam = function goodsParam(info, rule) {
  _classCallCheck(this, goodsParam);

  this.image = info.images ? info.images[0] : '';
  this.infos = info.set;
  this.sizes = rule.tables;
};

exports.goodsParam = goodsParam;