//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there
module.exports = {
  db: {
    uri: 'mongodb://michaeltngo:pw@ds139904.mlab.com:39904/cen3031assignment4' //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: ''
  },
  port: 8080
};

