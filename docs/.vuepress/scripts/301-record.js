const urlMapping = {
  '/note/frontend-development-cookbook': [
    '/note/fe-development-cookbook-old',
    '/note/fe-development-cookbook',
  ],
  '/note/javascript-language-basic': ['/note/js-basic'],
};

// * ================================================================================

const flatList = Object.entries(urlMapping)
  .map(([newUrl, oldUrls]) =>
    oldUrls.map((oldUrl) => [
      [oldUrl + '.html', newUrl + '.html'],
      [oldUrl, newUrl + '.html'],
    ]),
  )
  .flat(2);

module.exports = { flatList };
