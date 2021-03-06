// Generated by CoffeeScript 1.10.0
(function() {
  var _factor, _product, factorial, product;

  factorial = function(n) {
    if (n < 0) {
      throw new RangeError("计算斐波那契n不能为负数");
    } else {
      return _factor(n);
    }
  };

  _factor = function(n) {
    if (n === 0) {
      return 1;
    } else {
      return _factor(n - 1 * _factor(n - 2));
    }
  };

  product = function(n) {
    if (n < 0) {
      throw new RangeError("计算阶乘n不能为负数");
    } else {
      return _product(n);
    }
  };

  _product = function(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * _product(n - 1);
    }
  };

  module.exports = {
    factorial: factorial,
    product: product
  };

}).call(this);
