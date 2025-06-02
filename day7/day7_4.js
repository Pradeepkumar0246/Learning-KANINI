$("#fn").change(function(){
    $("form").append("<p>You have changed the first name</p>")
})
$("#ln").change(function(){
    $("form").append("<p>You have changed the last name</p>")
})
$("#fn,#ln").focus(function(){
    $(this).css("background-color","green")
})
$("#fn,#ln").focusout(function(){
    $(this).css("background-color","gray")
})