// Cafe menu items. Note that the id property of each item must correspond exactly
// to the index of the item in the items array.
var items = [{id:0,item:'youth',price:'$5.50',members:'member'},{id:1,item:'youth',price:'$6.50',members:'nonmember'},
{id:2,item:'adult',price:'7.50',members:'member'},{id:3,item:'adult',price:'$9.50',members:'nonmember'}];

// Order array - initially empty
var purchase = [];

// Event handler for order button
function admission(age,member) {
  // Each of the order buttons has the index of the associated
  // object hidden in its data-id attribute. Read that attribute
  // from the button and use it as an index into the items array.
  purchase.push(items[$(this).attr('data-id')]);

}





  // Add new rows for the items in the list
  length = items.length;
  for(n = 0;n < length;n++) {
    newRow = $('<tr>').html('<td class="align-middle">'+items[n].item+'</td><td class="align-middle">'+items[n].price+'</td>');
    purchaseButton = $('<button>');
    purchaseButton.text('Purchase').attr('data-id',items[n].id);
    purchaseButton.click(purchaseItem);
    purchaseButton.addClass('btn btn-secondary align-middle');
    button_td = $('<td>');
    button_td.append(purchaseButton);
    newRow.append(button_td);
    $('#menu').append(newRow);
  }
}


// Fills the order table with items from the purchase array
function displaypurchase() {
  var table, newRow, button_td;
  var n, length;

  // Remove any existing entries from the table
  $('#items tr').remove();

  // Add new rows for the items in the order list
  length = order.length;
  for(n = 0;n < length;n++) {
    newRow = $('<tr>').html('<td class="align-middle">'+order[n].item+'</td><td class="align-middle">'+order[n].cost+'</td>');
    removeButton = $('<button>');
    removeButton.text('Remove').attr('data-index',n);
    removeButton.click(removeItem);
    removeButton.addClass('btn btn-secondary align-middle');
    button_td = $('<td>');
    button_td.append(removeButton);
    newRow.append(button_td);
    $('#items').append(newRow);
  }
}

// An example of a filter function designed to filter a list of objects
function filterList(list,meal) {
  var result, n, length;

  result = []; // Make a new, empty list
  length = list.length;
  for(n = 0;n < length;n++) {
    // Search the original list for items that have the desired meal property
    if(list[n].meal == meal)
      result.push(list[n]); // Add items that match to the new list
  }

  return result;
}

// Helper function to handle displaying a different meal
function displayMeal(meal) {
  var newList;

  newList = filterList(items,meal);
  displayItems(newList);
}

// Event handler for the view order button
function showOrder() {
  $('div#view').slideUp();
  $('div#order').show();

  displayOrders();
}

// Event handler for the place order button
function showConfirm() {
  $('div#order').slideUp();
  $('div#confirm').show();
}

// Event handler for the back to menu button
function showMenu() {
  $('div#order').hide();
  $('div#view').slideDown();
}

function setUp() {
  // Set up event handlers for the meal buttons by using
  // a set of anonymous functions.
  $('button#breakfast').click(function(){displayMeal('B');});
  $('button#lunch').click(function(){displayMeal('L');});
  $('button#dinner').click(function(){displayMeal('D');});
  // Set up event handlers for the other buttons
  $('button#viewOrder').click(showOrder);
  $('button#viewOrder').hide();
  $('button#place').click(showConfirm);
  $('button#back').click(showMenu);
  // Show the lunch menu as the default
  displayMeal('L');
  // Hide the order and confirm divs
  $('div#order').hide();
  $('div#confirm').hide();
}

$(document).ready(setUp);
