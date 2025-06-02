$("#link").click(function (e) {
        e.preventDefault(); 
        $("#logform").hide();           
        $("#regiform").show();    
});
$("#signlink").click(function (e) {
        e.preventDefault(); 
        $("#regiform").hide();    
        $("#logform").show();     
});