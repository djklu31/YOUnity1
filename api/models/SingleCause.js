/**
* SingleCause.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    causeImage: {
      type:'string'
    },
    causeName: {
      type: 'string'
    },
    currentAmountRaised: {
      type: 'integer'
    },
    causeDesc: {
      type: 'string'
    },
    donationGoal: {
      type: 'integer'
    },
    lastDay: {
      type: 'string'
    },
    donatorCount: {
      type: 'integer'
    },
    organizations: {
      collection: 'organizations',
      via: 'causes'
    }
  }
};

