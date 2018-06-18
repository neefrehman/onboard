
// GET INPUT FROM #EMAIL and #NAME

$('#submit').click(function(){
  var user_email = $('#EMAIL').val()
  var first_name = $('#NAME').val()
})

$("#form").submit(function(){
    window.open('https://groups.google.com/a/ustwo.com/forum/#!managemembers/floor.adv/add', '_blank');
});
