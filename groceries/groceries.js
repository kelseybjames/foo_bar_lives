// Your Code Here!

$(document).ready(function() {
  $('#submit-button').click( function(event) {
    event.preventDefault();
    var groceryItem = $('.grocery-addition').val();

    if (groceryItem.length !== 0) {
      $('.grocery-list').append("<div class='grocery-item'>" + groceryItem + "</div>");
    };
  });

});