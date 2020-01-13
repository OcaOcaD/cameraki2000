var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyC2tpQwMlure_l7zUAJECOWXsMQNB3Rs88',
  'headers': {
    'Content-Type': 'text/plain'
  },
  body: "{\r\n  \"requests\":[\r\n    {\r\n      \"image\":{\r\n        \"source\":{\r\n          \"imageUri\":\r\n            \"https://los40es00.epimg.net/los40/imagenes/2019/12/24/musica/1577177884_366989_1577178113_noticia_normal.jpg\"\r\n        }\r\n      },\r\n      \"features\":[\r\n        {\r\n          \"type\":\"FACE_DETECTION\",\r\n          \"maxResults\":10\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}"

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
