var knife = require('../knife'),
    Issue = require('../issue');

module.exports = {
    name: 'tag-self-close',
    on: ['tag']
};

module.exports.lint = function (ele, opts) {
    if (knife.isVoidElement(ele.name) &&
        opts[this.name] === 'none' &&
        knife.isSelfClosing(ele)) {
        return new Issue('E045', ele.openLineCol);
    } else if (knife.isVoidElement(ele.name) &&
        opts[this.name] === true &&
        !knife.isSelfClosing(ele)) {
        return new Issue('E018', ele.openLineCol);
    }

    return [];
};
