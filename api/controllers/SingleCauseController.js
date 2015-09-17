/**
 * SingleCauseController
 *
 * @description :: Server-side logic for managing Singlecauses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createcause: function (req, res) {

    var data = req.body;

    console.log('CAUSE REQUEST IS: ' + JSON.stringify(data));

    SingleCause.create({causeImage: './images/home-cause-images/' + data.causeImage, causeName: data.causeName, causeDesc: data.causeDesc, donationGoal: data.donationGoal, lastDay: data.lastDay}).exec(function createCB(err, created){
      res.send('success');
    });


  },

  destroycause: function (req, res) {

    var data = req.body.id;

    console.log('data :' + data)


    SingleCause.destroy({id: data}).exec(function createCB(err, created){
      res.send('success');
    });

  },

  searchImages: function(req, res) {
    var fs = require('fs');
    var fileArray = [];
    fs.readdir('./assets/images/home-cause-images/', function (err, files) {
      if (err)
        throw err;
      for (var index in files) {
        fileArray.push(files[index]);
      }
      return res.send(fileArray);
    });
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

