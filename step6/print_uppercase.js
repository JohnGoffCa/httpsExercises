var getHTML = require("../http-functions");

function printUpper(html) {
  console.log(html.toUpperCase());
}

const request = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML(request, printUpper);
