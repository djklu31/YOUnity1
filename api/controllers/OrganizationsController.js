/**
 * OrganizationsController
 *
 * @description :: Server-side logic for managing organizations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'add-organization': function(req, res) {

    var data = req.body;

    console.log("ASS :" + JSON.stringify(data));

    Organizations.create({logo: './images/organization-logos/' + data.logo, name: data.name, description: data.description}).exec(function(){

    }, function(){

    })

  }



};

