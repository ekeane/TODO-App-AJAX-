$(function(){
  $("form").submit(function(event){    //event listener 
    event.preventDefault();   //use prevent default to prevent originial function

   var action = $(this).attr('action');
   var method = $(this).attr('method');
   var description = $(this).find('#todo_description').val();
   var priority = $(this).find('#todo_priority').val();
   var data = $(this).serializeArray();


    $.ajax({
      method: method,
      url: action,
      data: data,
      dataType: 'script'
      success: function(data){
           $(data).remove(); 
      }

    });
    
  });
  return false;
});