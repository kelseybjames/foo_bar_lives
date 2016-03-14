// Your Code Here!

$(document).ready(function() {
  $('#submit-button').click( function(event) {
    event.preventDefault();
    var groceryItem = $('.grocery-addition').val();

    if (groceryItem.length !== 0) {
      $('.grocery-list').append("<div class='grocery-item'>" + groceryItem + " <input type='submit' class='delete' value='Delete'></div>");
    };
  });
});

$(document).ready(function() {
  $('.delete').click( function(event) {
    event.preventDefault();
    $(this).parent('.grocery-item').remove();
  });
});