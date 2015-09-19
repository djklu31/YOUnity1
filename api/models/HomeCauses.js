/**
* Home.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    causeImage: {
      type: 'string',
      required: true
    },
    causeName: {
      type: 'string',
      required: true
    },
    causeDesc: {
      type: 'string',
      required: true
    },
    parentId: {
      type: 'integer'
    }
  }
};

