/**
* HomeSlider.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    sliderImage: {
      type: 'string',
      required: true
    },
    sliderName: {
      type: 'string',
      required: true
    },
    sliderDesc: {
      type: 'string',
      required: true
    },
    sliderStyling: {
      type: 'string',
      defaultsTo: 'Center'
    },
    fontColor: {
      type: 'string',
      defaultsTo: 'White'
    },
    buttons: {
      collection: 'sliderbuttons',
      via: 'slide'
    }
  }
};

