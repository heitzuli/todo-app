function addTodo() {
    // Dollar sign(jQuery): findstuff in html.
    const thoughts = $('#mind').val();
    // Add thoughts to list as a list item with a checkbox
    $('#todoList').append('<li><input type="checkbox">' + thoughts + '</li>');
    // Empty text field
    $('#mind').val('');
}

