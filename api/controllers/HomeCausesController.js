/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  createHomeCause: function(req, res) {

    var data = req.body;

    HomeCauses.create({causeImage: '/images/home-cause-images/' + data.causeImage, causeName: data.causeName, causeDesc: data.causeDesc, parentId: data.parentId}).exec(function createCB(err, created){

      if(err) {
        console.log(err);
      }

      return res.send('success');
    });


  },

  destroyHomeCause: function(req, res) {

    var id = req.body.id;

    console.log('REQUEST: ' + JSON.stringify(id));

    HomeCauses.destroy({id: id}).exec(function createCB(err, destroyed) {

    });

    return res.send('SUCCESSFULLY DESTROYED');

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

