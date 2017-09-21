// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Instantiates a client
const vision = Vision();

// The path to the local image file, e.g. "/path/to/image.png"
const fileName = '../../551a3893-c63e-4adb-aa2b-cae0bc673e23.jpg';

vision.faceDetection({ source: { filename: fileName } })
  .then((results) => {
    const faces = results[0].faceAnnotations;

    console.log('Faces:');
    faces.forEach((face, i) => {
      console.log(`  Face #${i + 1}:`);
      console.log(`    Joy: ${face.joyLikelihood}`);
      console.log(`    Anger: ${face.angerLikelihood}`);
      console.log(`    Sorrow: ${face.sorrowLikelihood}`);
      console.log(`    Surprise: ${face.surpriseLikelihood}`);
    });
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });