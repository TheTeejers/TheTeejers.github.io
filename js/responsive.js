$( document ).ready(function() {


$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "medium", function() {


});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
});
});

});
