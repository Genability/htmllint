module.exports = [
    {
        desc: 'should not match non self-closing tags when disabled',
        input: '<img>',
        opts: { 'tag-self-close': false },
        output: 0
    }, {
        desc: 'should match non self-closing tags when enabled',
        input: '<img>',
        opts: { 'tag-self-close': true },
        output: 1
    }, {
        desc: 'should not match self-closed tags when enabled',
        input: '<img/>',
        opts: { 'tag-self-close': true },
        output: 0
    }, {
        desc: 'should match self-closed tags when set to none',
        input: '<img/>',
        opts: { 'tag-self-close': 'none' },
        output: 1
    }, {
        desc: 'should not match self-closed tags when set to none',
        input: '<img>',
        opts: { 'tag-self-close': 'none' },
        output: 1
    }
];
