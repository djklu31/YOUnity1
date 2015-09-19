/**
 * OrganizationsController
 *
 * @description :: Server-side logic for managing organizations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'add-organization': function(req, res) {

    var data = req.body;

    Organizations.create({logo: './images/organization-logos/' + data.logo, name: data.name, description: data.description}).exec(function(){

    }, function() {

    })

  },
  'destroy-organization': function(req, res) {

    var id = req.body.id;

    Organizations.destroy({id: id}).exec(function() {
      return res.send('success');
    }, function() {

    })

  },
  searchLogos: function(req, res) {
    var fs = require('fs');
    var fileArray = [];
    fs.readdir('./assets/images/organization-logos/', function (err, files) {
      if (err)
        throw err;
      for (var index in files) {
        fileArray.push(files[index]);
      }
      return res.send(fileArray);
    });
  }



};

