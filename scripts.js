$(document).ready(function() {
  console.log('sanity check');

  function updateProgress() {
    var completedCount = $('.completed').length;
    var totalCount = $('.list-group-item').length;
    var todoProgress = (completedCount / totalCount) * 100;

    $('progress').attr('value', todoProgress);    
  }

  function strikeThrough(el) {
    el.toggleClass('striked-through');
    
    if (el.hasClass('completed')) {
      el.removeClass('completed')
      $('#todos').append(el);
      updateProgress();
    }
  }

  updateProgress();

  $('#remove-completed-todos').click(function() {
    $('#completed-todos').append($('.striked-through').addClass('completed'));
    updateProgress();
  })

  $('.list-group-item').on('click', function() {
    strikeThrough($(this));
  });

  $('#new-todo-form').submit(function (e) {
    e.preventDefault();

    // Detect if todoContent is empty
    if ($('#todo-content').val().trim().length > 0) {
      var todoContent = $('#todo-content').val();
      var newTodo = '<li class="list-group-item">' + todoContent + '</li>';
      $('#todos').append(newTodo);
      $('#todo-content').val('');

      console.log($('#todos').children().last())
      // click on list-item 
      $('#todos').children().last().on('click', function() {
        strikeThrough($(this));
      });
      updateProgress();
    } 
  });

});


// keep track of individual todos with id
  // counter
  // datetime
  // 

      // if (el.css('text-decoration') == 'line-through'){
    //   el.css('text-decoration', ' ');
    // } else {
    //   el.css('text-decoration', 'line-through');
    // }

        // $('#todos').append(el);
    // if (el.hasClass('striked-through')) {
    //   // move to bottom
    //   el.parent().append(el);
    // } else {
    //   // move to top
    //   el.parent().prepend(el);
    // }