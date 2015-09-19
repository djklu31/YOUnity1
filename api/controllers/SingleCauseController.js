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

    console.log('Organization for Cause: ' + data.organizations);

    SingleCause.create({causeImage: './images/home-cause-images/' + data.causeImage, causeName: data.causeName, causeDesc: data.causeDesc, donationGoal: data.donationGoal, lastDay: data.lastDay, organizations: data.organizations}).exec(function createCB(err, created){

     //for (var i=0; i<data.organizations.length; i++) {
     //
     //  console.log('organization name is: ' + data.organizations[i]);
     //
     //  Organizations.update({name: data.organizations[i]},{causes: [1, 2 , 3]}).exec(function(err, updated) {
     //
     //
     //
     //  });
     //
     // }


    });

    res.send('success');


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
  }
};

