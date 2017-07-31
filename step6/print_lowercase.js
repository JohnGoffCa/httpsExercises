var getHTML = require("../http-functions");

function printLower(html) {
  console.log(html.toLowerCase());
}

const request = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(request, printLower);
