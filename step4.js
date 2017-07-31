function getHTML (options, callback) {
  const https = require("https");

  https.get(options, (response) => {
    let result = "";
    response.setEncoding("utf8");
    
    response.on("data", (data) => {
      result += data;
    });

    response.on("end", () => {
      callback(result);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
