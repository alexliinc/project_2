const express = require('express');
const app = express();



/**********
 * SERVER *
 **********/

// listen on port 3000
//app.listen(process.env.PORT || 3000)
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is up');
});
