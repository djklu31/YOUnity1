/**
* Organizations.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    logo: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    link: {
      type: 'string'
    },
    causes: {
      collection: 'singlecause',
      via: 'organizations'
    }

  }
};

