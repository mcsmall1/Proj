$(function(){

  $('#btnGetReso').click(function()
  {
    var divResults = $('#divResults');
    console.log("Point ---- 1");

    divResults.text('Loading data from JSON source..')
    console.log("Point ---- 2");
  });

  $.ajax({
    type: "GET",
    url: "resources.json",

    success: function(result)
    {
      console.log(result);
      var output ="<table> <thead> <tr>  <th>Name</th>  <th>Provider</th>  <th>URL</th>  </thead> <tbody>";
      console.log("Point ---- 3");

      for (var i in result)
      {
        output+="<tr><td>" + result[i].name + "</td><td>" + result[i].provider + "</td><td>" + result[i].url + "</td></tr>";
        console.log("Point ---- 4");
      }
      output+="</tbody></table>";
      console.log("Point ---- 5");

      divResults.html("<p>test</p>");
      $("table").addClass("table");
      console.log("Point ---- 6");
    }
  });
});
