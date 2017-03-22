'use strict';

Array.prototype.findIndexM = function (value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i].handle === value) {
            return i;
        }
    }
    return false;
};

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function get_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_random_goods_by_importance(importance) {
	return Math.floor(Math.random() * importance) * 10 + 10;
}
