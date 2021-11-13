const getDuplicateCssSelectors = require('get-duplicate-css-selectors')
const CSS = getDuplicateCssSelectors('./dist/utils.css')

test('Find dublicate selector', () => {
    expect(CSS.toString()).toEqual('')
})
