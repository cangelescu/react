// Select user data container
var userContainer = jQuery("#user-data-container");
// Make ajax request for getting user data
jQuery.ajax({
    url:'http://localhost:3001/users'
}).then(function(serverResponse) {
    userContainer.empty();
    for (var key in serverResponse) {
        // get current iteration item
        var responseItem = serverResponse[key];
        // construct jQuery template for user row
        var template = jQuery('<tr><th scope="row" class="table-id"></th><td class="table-fname"></td><td class="table-lname"></td><td class="table-username"></td></tr>')
        // populate user tenokate with user data
        template.find('.table-id').html(responseItem.id);
        template.find('.table-fname').html(responseItem.fname);
        template.find('.table-lname').html(responseItem.lname);
        template.find('.table-username').html(responseItem.username);

        // append template to user data continer
        userContainer.append(template);
    }