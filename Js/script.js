if (jQuery) {
    alert("jquery is loaded");
} else {
    alert("Not loaded");
}
$('.navbar-toggle').on("click", function(){
    $('#pushContent').slideToggle();
});
