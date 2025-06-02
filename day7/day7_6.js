function handleColorClick(event) {
    const color = $(this).val();
    $(".clrpanel").css({
        "background-color": color,
        "color": "white"
    }).text(color);
    const logMessage = `Button clicked:${color}`;
    $(".eventlog").append(`<p>${logMessage}</p>`);
}
$("body").css({
    "display": "flex",
    "flex-direction": "column",
    "align-items": "center",
    "font-family": "Arial, sans-serif"
});
$(".head").css("text-align", "center");
$(".btn").css({
    "display": "flex",
    "gap": "10px",
    "justify-content": "center",
    "margin": "20px 0"
});
$(".btn button").css({
    "width": "60px",
    "height": "30px",
    "font-weight": "bold"
});
$(".clrpanel").css({
    "width": "400px",
    "height": "200px",
    "border": "2px solid black",
    "margin": "20px auto",
    "display": "flex",
    "align-items": "center",
    "justify-content": "center",
    "font-size": "20px"
});
$(".eventlog").css({
    "text-align": "center",
    "margin-top": "20px",
    "font-weight": "bold"
});
$(".btn button").on("click", handleColorClick);
