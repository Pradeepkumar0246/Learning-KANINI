$(document).ready(function() {
    let rows = ["A","B","C","D","E","F","G","H","I","J"];
    let columns = 10;
    rows.forEach(row => {
        let rowDiv = $("<div>").append($("<strong>").text(row + ": "));
        for (let i = 1; i <= columns; i++) {
            let seat = $("<span>").attr("data-seat", row + i).text(i);
            seat.css({
                "width": "40px",
                "height": "40px",
                "border": "1px solid #000",
                "display": "inline-block",
                "margin": "5px",
                "text-align": "center",
                "line-height": "40px",
                "font-weight": "bold",
                "cursor": "pointer"
            });
            rowDiv.append(seat);
        }
        $("#seats").append(rowDiv);
    });
    $("#bookTicket").click(function() {
        let seatCode = $("#seatCode").val();
        let numTickets = parseInt($("#numTickets").val());
        let seatNumber = parseInt($("#seatNumber").val());
        let totalSeats = 10;
        let totalCost = numTickets * 120;
        $("span").css("background-color", "");
        if ((seatNumber + numTickets - 1) <= totalSeats) {
            for (let i = 0; i < numTickets; i++) {
                $(`[data-seat='${seatCode}${seatNumber + i}']`).css({
                    "background-color": "blue",
                    "color": "white"
                });
            }
            $("#costDisplay").text(`You need to pay Rs.${totalCost}`);
        } else {
            let remainingSeats = totalSeats - seatNumber + 1;
            for (let i = 0; i < remainingSeats; i++) {
                $(`[data-seat='${seatCode}${seatNumber + i}']`).css({
                    "background-color": "orange",
                    "color": "black"
                });
            }
            $("#costDisplay").text(`Unfortunately, only ${remainingSeats} ticket(s) remain in ${seatCode}, starting at seat number ${seatNumber}`);
        }
    });
});