var getHTML = require("../http-functions");

const leetSpeak = {
  a : '4',
  e : '3',
  l : '1',
  o : '0',
  s : '5',
  t : '7',
  'ck' : 'x',
  'er' : '0r',
  'you' : 'j00',
}

function print1337(html) {
  html = html.replace(/ck/g, leetSpeak.ck)
  html = html.replace(/er/g, leetSpeak.er)
  html = html.replace(/you/g, leetSpeak.you)
  for (var leet in leetSpeak) {
    if (leetSpeak.hasOwnProperty(leet)) {
      html = replace(html, leet, leetSpeak[leet])
    }
  }
  console.log(html);
}

function replace(string, letter, newVal) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter)
      newString += newVal;
    else 
      newString += string[i];
  }
  return newString;
}

const request = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML(request, print1337);
