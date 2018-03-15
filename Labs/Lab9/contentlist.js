$(function(){
	// 'main' function called when page is loaded and ready

	// complete the following using jQuery

	// 1. find the addcontent button in task-two.html
	// 2. add an event listener for 'click' events
	// 3. assign the addContent() function to the click event
	$("#btnAddContent").click(function(){addContent()});
});

function test(){
	var test = "test text"
	console.log("test: "+ test);
}

function addContent() {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	// build the html string for a <ul> list
	var items_html = "<ul>";
	for (var i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
		console.log("items_html: "+ items_html);
	};
	items_html += "</ul>";

	// using jQuery
	// 1. find the content div
	// 2. modify its html attribute by adding items_html
	console.log(items_html);
	$("#divContent").html(items_html);

}
