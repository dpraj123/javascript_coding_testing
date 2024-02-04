const convertInUpperCase = require('./convert_in_uppercase.js')
test('convert sentece every word in 1st letter in upperCase', () => {
    expect(convertInUpperCase("ram is a boy")).toBe('Ram Is A Boy');
})