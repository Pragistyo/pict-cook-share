const express = require('express')
const router = express.Router()
var vision = require('@google-cloud/vision');

var visionClient = vision({
  projectId: 'rosy-phalanx-178403',
  keyFilename: 'My First Project-60f7c3b92f53.json'
});

const visionHelper = (req, res, next) => {
  var gambar = req.body.gambar
  
  var imageUri = gambar;
  var source = {
      imageUri : imageUri
  };
  var image = {
      source : source
  };
  var type = vision.v1.types.Feature.Type.WEB_DETECTION; //ganti textnya 
  var featuresElement = {
      type : type
  };
  var features = [featuresElement];
  var requestsElement = {
      image : image,
      features : features
  };
  req.vision = [requestsElement];
  next()
}

router.post('/', visionHelper, (req, res) => {
  visionClient.batchAnnotateImages({requests: req.vision})
  .then(function(responses) {
      var response = responses[0];
      console.log(response);
      // doThingsWith(response)
      res.send(response.responses[0].webDetection.webEntities[0])
  })
  .catch(function(err) {
      console.error(err);
  });
})


module.exports = router