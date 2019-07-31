$(document).ready(function() {
 
    //type shopping list item, submit and add to list
   
    $('#js-shopping-list-form').on('submit', function(event){
        let shoppingListItem = $('#shopping-list-entry').val();
        $('.shopping-list').append(`<li><span class="shopping-item">${shoppingListItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div></li>`);
        $('#shopping-list-entry').val('');
        event.preventDefault();
    });
   
   
   
    //click the check button and add/remove "checked" class
   
    $('.shopping-list').on('click', '.shopping-item-toggle', function()
    {
        $(this).closest('li')
        .find('.shopping-item')
        .toggleClass('shopping-item__checked');
    });
   
   
   
    //when clicked, "delete" button removes selected item from list
   
    $('.shopping-list').on('click', '.shopping-item-delete', function()
    {
        $(this).closest('li')
        .remove();
    });
   
   
    });
 