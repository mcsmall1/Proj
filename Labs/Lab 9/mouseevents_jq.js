// JavaScript Document

$(function(){

	$("#button1").mouseenter(
	function()
	{
		$("#button1").html("<p>Thank You</p>")
	});


	$("#button1").mouseleave(
		function()
		{
		$("#button1").html("<p>Mouse Over Here!</p>")
	});


	$("#button2").mouseup(
		function()
		{
		$("#button2").css("background", "lightblue")
	});


	$("#button2").mousedown(
		function()
		{
		$("#button2").css("background", "lightgreen");
	});

});
