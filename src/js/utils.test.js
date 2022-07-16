const { add } = require('./utils');

test('two plus three equals five', ()=>{
    expect(add(2, 3)).toBe(5);
});