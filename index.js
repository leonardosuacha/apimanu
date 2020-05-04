'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 80;

//conect DB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://leo:w3ar3w17h600d@ds117858.mlab.com:17858/tarea')
    .then(() => {
      console.log('Conexión exitosa.');

      app.listen(port, () => {
        console.log('Server corriendo en http://localhost:3800');
      });

    })
    .catch(err => console.log(err));

/*    mongoose.connect('mongodb://localhost:27017/mean_social', { useMongoClient: true })
        .then(() => {
          console.log('Conexión exitosa.');

          app.listen(port, () => {
            console.log('Server corriendo en http://localhost:3800');
          });

        })
        .catch(err => console.log(err));
*/
