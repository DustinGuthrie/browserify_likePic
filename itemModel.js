// Item Model

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/Dustin',
  idAttribute: '_id',
  defaults: {
    photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3w8fg7LF70qKbuenUajbXftLf7EYPdyMmOXLgajaZrQW6xa7gIg',
    title: "Really cool Default title"
  },
  initialize: function () {



  }
});
