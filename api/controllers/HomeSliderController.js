/**
 * HomeSliderController
 *
 * @description :: Server-side logic for managing Homesliders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  createHomeSlide: function(req, res) {

    var data = req.body;

    console.log('REQUEST' + JSON.stringify(data));


    HomeSlider.create({sliderImage: './images/home-slider-images/' + data.sliderImage, sliderName: data.sliderName, sliderDesc: data.sliderDesc, sliderStyling: data.sliderStyling, fontColor: data.sliderFontColor}).exec(function createCB(err, created){

      if(err) {
        console.log(err);
      }


      for (var i=0; i<data.buttonText.length; i++) {

        SliderButtons.create({buttonText: data.buttonText[i], buttonColor: data.buttonColor[i], slide: created.id}).exec(function createCB(err, created){

          if(err) {
            console.log(err);
          }


        });

      }

    });

    //for (var i=0; i<data.buttonText.length; i++) {
    //
    //  SliderButtons.create({buttonText: data.buttonText[i], buttonColor: data.buttonColor[i], slide: data.id}).exec(function createCB(err, created){
    //
    //    if(err) {
    //      console.log(err);
    //    }
    //
    //
    //  });
    //
    //}

    return res.send('success');

  },

  destroyHomeSlide: function(req, res) {

    var id = req.body.id;

    console.log('REQUEST: ' + JSON.stringify(id));

    HomeSlider.destroy({id: id}).exec(function createCB(err, destroyed) {

    });

    return res.send('success');

  },

  searchImages: function(req, res) {
    var fs = require('fs');
    var fileArray = [];
    fs.readdir('./assets/images/home-slider-images/', function (err, files) {
      if (err)
        throw err;
      for (var index in files) {
        fileArray.push(files[index]);
      }
      return res.send(fileArray);
    });
  }

};

