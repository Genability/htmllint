module.exports = [
    {
        desc: 'should pass when set to false',
        input: '<div a="test" c="test" b d="test"></div>',
        opts: { 'attr-order': false },
        output: 0
    },
    {
        desc: 'should pass when there are no attributes',
        input: '<div></div>',
        opts: { 'attr-order': true },
        output: 0
    },
    {
        desc: 'should pass when there is one attribute',
        input: '<div a></div>',
        opts: { 'attr-order': true },
        output: 0
    },
    {
        desc: 'should not pass when attributes are not ordered alphabetically',
        input: '<div a="test" c="test" b d="test"></div>',
        opts: { 'attr-order': 'alphabetically' },
        output: 1
    },
    {
        desc: 'should pass when attributes are not ordered alphabetically',
        input: '<div a="test" b="test" c d="test"></div>',
        opts: { 'attr-order': 'alphabetically' },
        output: 0
    },
];
