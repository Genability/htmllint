module.exports = [
    {
        desc: 'should pass when set to false',
        input: '<body><div><p class="a c b">Text</p></div></body>',
        opts: { 'class-order': false },
        output: 0
    },
    {
        desc: 'should pass when there are no classes',
        input: '<body><div><p>Text</p></div></body>',
        opts: { 'class-order': 'alphabetically' },
        output: 0
    },
    {
        desc: 'should pass when there is 1 class',
        input: '<body><div><p class="a">Text</p></div></body>',
        opts: { 'class-order': 'alphabetically' },
        output: 0
    },
    {
        desc: 'should pass when classes are ordered alphabetically',
        input: '<body><div><p class="a b c">Text</p></div></body>',
        opts: { 'class-order': 'alphabetically' },
        output: 0
    },
    {
        desc: 'should fail when classes are not ordered alphabetically',
        input: '<body><div><p class="a c b">Text</p></div></body>',
        opts: { 'class-order': 'alphabetically' },
        output: 1
    },
    {
        desc: 'should catch multiple duplicates in one class',
        input: '<body><div><p class="hey hey hi ho ho">Text</p></div></body>',
        opts: { 'class-order': true },
        output: 2
    }
];
