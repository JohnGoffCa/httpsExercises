var getHTML = require("../http-functions");

function printReverse(html) {
  console.log(html.split("").reverse().join(""));
}

const request = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML(request, printReverse);
