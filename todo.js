function addTodo() {
    // Dollar sign(jQuery): findstuff in html.
    const thoughts = $('#mind').val();
    $('#todoList').append('<li>' + thoughts + '</li>');
}

