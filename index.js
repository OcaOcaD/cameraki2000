let request = require('request');
/*** Amazon lambda function */
// exports.handler = async (event) => {
    // exports.handler = async (event) => {   
    // };
// };
/*** Tomar captura con meraki */



/*** Variables importantes */
let screenShot =  "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
// let screenShot =  "https://spn10.meraki.com/stream/jpeg/snapshot/e505bfc70dbfc606VHMTkxYzBhZWM2ZWMxNzFjZmExNTdiYTE0NzkzMDVkMWY0ZTIwNWE2OWE1NjQzMzlhNjcyOTkyZTMwNmUyOTQ1Ncz9yhRmCnmCwtgSHainelw9mprTI2MM96P9hYxmkgFggwcm-HkeTTjj-FsjOOLZLYUygKrhsbcPuwgAEGnBs0oKKsbF1QmoYRZClgQ2blf3EmfxrbXITJACYuKsyrwl6Gwd8PB6Y0-ABcFaXFOo_6fGmkBTPt8KoxOxVD-M_DGUvwtJWkVlTK2zEjupEQWxqsFo1ExMdwIyR2qGTUNPmts"
let googleVisionAPI =  "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyC2tpQwMlure_l7zUAJECOWXsMQNB3Rs88"
/*** Enviar imgaen a gvision */
var options = {
    'method': 'POST',
    'url': googleVisionAPI,
    'headers': {
      'Content-Type': 'text/plain'
    },
    body: JSON.stringify( {
        "requests":[{
            "image":{
                "source":{
                    "imageUri":screenShot
                }},
                "features":[{
                    "type":"FACE_DETECTION",
                    "maxResults":10
                }]
            }]
        })
  
  };
let tags = ""
request(options, function (error, response) { 
    if (error) throw new Error(error);
    let jsResponse = JSON.parse(response.body)
    console.log(response.body)
    // for (const item of jsResponse["responses"]) {
    //     for (const label of item.labelAnnotations) {
    //         console.log(label.description)
    //         tags += label.description
    //     }
    // }
});
/*** Preparar mensaje de respuesta con los datos de gvision */
/*** Enviar mensaje a webex desde el bot */
var options = {
    'method': 'POST',
    'url': 'https://api.ciscospark.com/v1/messages',
    'headers': {
    'Authorization': 'Bearer NWQ5MWFhZjctY2IxNi00Y2ExLWFmMWQtNDVhZWZjM2U4NDE4MzM5ZTUzMDYtZDdl_PF84_2e9eb3b4-de94-49aa-9ce7-f7ceb3f5b529',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "roomId":"Y2lzY29zcGFyazovL3VzL1JPT00vZGUzOWU4ZjAtMzU3ZS0xMWVhLWI5YWYtYTU0YmU3NTY2N2Iy",
        "files":[screenShot],
        "text": "Algo de descripción"
    })
};
request(options, function (error, response) { 
    if (error) throw new Error(error);
    console.log(response.body);
});

  