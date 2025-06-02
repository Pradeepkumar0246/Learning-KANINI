$(document).ready(function(){
    let patientList = [];  
    $("#getData").click(function(){
        $.get("https://webapps.tekstac.com:8443/WebProjects/PatientService/viewPatientListJSON", function(data){
            patientList = data;
            console.log("Fetched data:", data); 
            $("#statusMsg").text("Data fetched successfully!").css("color", "green");
        });
    });
    $("#search").click(function(){
        let patientid = Number($("#patientid").val().trim());
        let contactnumber = $("#contactnumber").val().trim();
        const results = patientList.filter(p => 
            p.patientId === patientid && 
            p.contactNumber === contactnumber
        );
        if (results.length === 0) {
            $("#result").text("Patient record missing");
            return;
        }
        const x = results[0].patientName;
        const y = results[0].doctorName;
        $("#result").text("Hi " + x + ", your appointment with Dr. " + y + " is confirmed");
    });
});
