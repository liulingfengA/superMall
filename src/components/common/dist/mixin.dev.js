"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backTopMixin = exports.imgloadListener = void 0;

var _utils = require("components/common/utils.js");

var _backTop = _interopRequireDefault(require("components/content/backTop/backTop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var imgloadListener = {
  data: function data() {
    return {
      imgloadListener: null
    };
  },
  mounted: function mounted() {
    var refresh = (0, _utils.debounce)(this.$refs.scroll.refresh, 200);

    this.imgloadListener = function () {
      refresh();
    };

    this.$bus.$on('imgload', this.imgloadListener);
    console.log('我是混入的内容');
  }
};
exports.imgloadListener = imgloadListener;
var backTopMixin = {
  components: {
    BackTop: _backTop["default"]
  },
  data: function data() {
    return {
      isBackTopType: false
    };
  },
  methods: {
    backTop: function backTop() {
      this.$refs.scroll.scrollTo(0, 0, 800);
    }
  }
};
exports.backTopMixin = backTopMixin;