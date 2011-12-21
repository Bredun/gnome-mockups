BOXES = {
  boxes: [ {
    label: "Alli's Computer",
    thumbnail: "img/boxes/alli-thumb.png",
    fullscreen: "img/boxes/alli.jpg"
  }, {
    label: "OS Research",
    thumbnail: "img/boxes/research-thumb.png",
    fullscreen: "img/boxes/research.jpg"    
  }],
  os: ['fedora','ubuntu','windows','osx','unknown'],
  addBox: function () { //create new box
  },
  deleteBox: function () { // delete a box
  }
}


$.fn.renderBoxes = function () {
  var $container;
  
  $container = $(this).empty();
  $container.html("FIXME");
}


$(document).ready(function () {
  $("#content").renderBoxes();
});
