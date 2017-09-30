$().ready(function() {

var Students = [
	{ FirstName: "Greg", LastName: "Olsen", SAT: "1200", GPA: "3.2" },
	{ FirstName: "Bob", LastName: "Evans", SAT: "1200", GPA: "3.2" },
	{ FirstName: "Sue Ann", LastName: "Prewitt", SAT: "1200", GPA: "3.2" },
	{ FirstName: "Eric", LastName: "Smith", SAT: "1200", GPA: "3.2" },
	{ FirstName: "Eric", LastName: "Bambach", SAT: "1200", GPA: "3.2" },
]
$("#add").click(function() {
 	var firstName = $("#firstName").val();
 	var lastName = $("#lastName").val();
 	var sat = $("#sat").val();
 	var gpa = $("#gpa").val();
 	var student = { FirstName: firstName, LastName: lastName, SAT: sat, GPA: gpa };
 	Students.push(student);
 	//$("button#refresh").click();
 	$("input").val(''); //clears input s
});

$("#refresh").click(function() {
 	var tBody = $("tbody");
 	tBody.empty();
 	for (var students of Students) {
	$("#students").append("<tr>" + "<td>" + students.FirstName + " " + students.LastName + "</td>" + "<td>" + students.SAT + "</td>" + "<td>" + students.GPA + "</td>" + "</tr>")
	};
 });
});