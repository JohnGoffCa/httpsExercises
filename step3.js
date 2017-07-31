const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {
  const https = require('https');

  let result = "";
  https.get(options, (response) => {
    response.setEncoding('utf8');

    response.on("data", (data) => {
      result += data;
    });

    response.on('end', () => {
      console.log(result);
      console.log("Transmission complete");
    });
  });
}

getAndPrintHTML(requestOptions);
