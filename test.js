var fs = require('fs')
const css = require('css')

const file =  fs.readFileSync('./dist/utils.css', 'utf8')
const parsed = css.parse(file);

const other = []
const declarations = []


parsed.stylesheet.rules.forEach(current => {
    const value = {}
    // Ignore non-rule types

    if (current.type !== 'rule') {
        other.push(current)
        return
    }

    const selector = current.selectors.join(',')

    current.declarations.forEach(rule => {
        value[rule.property] = rule.value
    })

    declarations.push(selector)
})

const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort();
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
}

test('Find dublicate selector', () => {
    const dublicate = findDuplicates(declarations)
    expect(dublicate.toString()).toEqual('')
})
