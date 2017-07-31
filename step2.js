function getAndPrintHTML () {
  const https = require('https');

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  let result = "";
  https.get(requestOptions, (response) => {
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

getAndPrintHTML();
