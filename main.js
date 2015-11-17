var $ = require('jquery');
var ItemModel = require('./itemModel');
var ItemCollection = require('./ItemCollection');
var _ = require('underscore');


$(document).ready(function(){
  picPage.init();
});

  // itemCollection = new ItemCollection();
  // console.log("before fetch: ", itemCollection);
  // var myModel = new ItemModel({title: "this is a cool task"});  //
  // myModel.save();
  // itemCollection.fetch().then(function (collectionData) {
  //   console.log(itemCollection);
  //
  // });

var picPage = {
//   title: "another title2",
//   photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTRujAwKAbRNMx664O0Hij9JW_aadXWy-EauX3pYH3SedYikDmV"
//   title: ""
//   photo:
// };
// var item = new ItemModel(newPicPost);
// item.save();
// $('section').html('<h1>' + item.get('title') + '</h1>')
// $('section').html('<img src=' + item.get('photo') + '>')

init: function (){
  picPage.initEvents();
  picPage.loadExisting();
},
initEvents: function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    var newPicPost = {
      title: $('#title').val(),
      photo: $('#photo').val(),
      // likes: $('')
    };
    var post = new ItemModel(newPicPost);
    post.save();
    console.log(newPicPost);
    picPage.loadPics(newPicPost);
  });

  // $('.button').on('click','.delete',function (event) {
  //   console.log("this is happening - delete pic");
  // event.preventDefault();

  //         var $deleteBtn = $(this);
  //         var picID = $deleteBtn.closest('article').data('index');
  //         chatPage.deleteChat(chatID,$deleteBtn);
  // });

  // $('.button').on('click','.like',function (event) {
  //   console.log("this is happening - liked a pic");
  //   event.preventDefault();
  //
  //
  // });

},

loadPics: function(data) {
  var picsHTML = "";
  // _.each(post(), function (currVal, idx, arr){
    var picsTemplate = _.template($('#picsTmpl').html());
    picsHTML += picsTemplate(data);
  // });
$('.swap').prepend(picsHTML);
},

loadExisting: function () {
  var itemCollection = new ItemCollection();
  itemCollection.fetch().then(function (collectionData) {
    var oldPicsHTML = "";
    var oldPicsTemplate = _.template($('#picsTmpl').html());
    _.each(collectionData, function(currVal, idx, arr) {
        oldPicsHTML += oldPicsTemplate(currVal);
    });
    $('.swap').prepend(oldPicsHTML);

  });
},


};
