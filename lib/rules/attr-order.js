var Issue = require('../issue');

module.exports = {
    name: 'attr-order',
    on: ['tag']
};

module.exports.lint = function (element, opts) {
    var order = opts[this.name];
    if (!order || !element.attribs) {
        return [];
    }

    var attrs_sorted = [];
    for (var key in element.attribs) {
        if (element.attribs.hasOwnProperty(key)) {
            attrs_sorted.push(key);
        }
    }
    attrs_sorted.sort();

    var i = 0;
    for (var key in element.attribs) {
        if (element.attribs.hasOwnProperty(key)) {
            if (key !== attrs_sorted[i]) {
                return new Issue('E044', element.attribs[key].valueLineCol, { order: order });
            } else {
                i++;
            }
        }
    }

    return [];
};
