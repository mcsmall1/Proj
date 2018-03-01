$(function(){
  $('#btnGetReso').click(function()
  {
    var dispResc = $('#dispResc');

    dispResc.text('Loading data from JSON source..')
  });

  $.ajax({
    type: "GET",
    url: "resources.json",

    success: function(result)
    {
      var output ="<table> <thead> <tr>  <th>Name</th>  <th>Provider</th>  <th>URL</th>  </thead> <tbody>";

      for (var i in result)
      {
        output+="<tr><td>" + result[i].name + "</td><td>" + result[i].provider + "</td><td>" + result[i].url + "</td></tr>";
      }
      output+="</tbody></table>";

      dispResc.html(output);
      $("table").addClass("table");
    }
  });
});
