const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.get('/', ( req, res ) => {
  res.json({
    welcome: "Hello There!"
  });
})

app.listen(8080, () => {
  console.log('listening on port 8080');
});
