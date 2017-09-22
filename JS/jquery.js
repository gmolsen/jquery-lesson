	// JS is loaded & message is logged as soon as HTML is loaded
$().ready(function() {

var InputTextIsRed = true;

	console.log("jQuery ready")

	//Message is printed to console when button is clicked
 $("button").click(function() {
 	console.log("I am an anonymous function.");
//Message is printed to input field when button clicks
// $("#buttonOut").val("Button click works");
	
	//stores whatever is typed into first input field inside
	//variable "msg"	
 	var msg = $("#buttonOut").val();

 	$("#valueIn").val("Greg O: " + msg);

 	$("#valueIn").css("color", "red"); 

 	var msg = $("#valueIn").val();

 	//Input text changes from red to green upon each button click
 	if(InputTextIsRed) {
	$("#valueIn").css("color", "red");
} else {
	$("#valueIn").css("color", "green");
}

InputTextIsRed = !InputTextIsRed;

$("ul").append("<li>" + msg + "</li>")
 }); 

});