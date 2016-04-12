var knife = require('../knife'),
    Issue = require('../issue');

module.exports = {
    name: 'tag-self-close',
    on: ['tag']
};

module.exports.lint = function (ele, opts) {
    if (!opts[this.name] ||
        !knife.isVoidElement(ele.name) ||
       (knife.isSelfClosing(ele) && opts[this.name] !== 'none')) {
        return [];
    }

    if ((knife.isSelfClosing(ele) && opts[this.name] !== 'none')) {
        return new Issue('E045', ele.openLineCol);
    }

    return new Issue('E018', ele.openLineCol);
};
