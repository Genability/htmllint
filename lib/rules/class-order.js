var Issue = require('../issue');

module.exports = {
    name: 'class-order',
    on: ['attr'],
    filter: ['class']
};

module.exports.lint = function (attr, opts) {
    var order = opts[this.name];
    if (!order) {
        return [];
    }

    var v = attr.value;
    var cssclasses = v.split(/\s+/);
    var cssclasses_sorted = cssclasses.slice(0).sort();

    for (var i = 0; i < cssclasses.length; i++) {
        if (cssclasses[i] !== cssclasses_sorted[i]) {
            return new Issue('E043', attr.valueLineCol, { order: order });
        }
    }

    return [];
};
