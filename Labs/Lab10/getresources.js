$(function(){
  $('#btnGetReso').click(function()
  {
    dispResc = $('#dispResc');
    console.log("dispResc: "+ dispResc);

    dispResc.text('Loading data from JSON source..')
    console.log("dispResc: "+ dispResc);
  });

  $.ajax({
    type: "GET",
    url: "resources.json",

    success: function(result)
    {
      var output ="<table> <thead> <tr>  <th>Name</th>  <th>Provider</th>  <th>URL</th>  </thead> <tbody>";
      console.log("dispResc: "+ dispResc);

      for (var i in result)
      {
        output+="<tr><td>" + result[i].name + "</td><td>" + result[i].provider + "</td><td>" + result[i].url + "</td></tr>";
        console.log("output: "+ output);
      }
      output+="</tbody></table>";
      console.log("output: "+ output);
      console.log("dispResc: "+ dispResc);

      dispResc.html(output);
      $("table").addClass("table");

      console.log("FINAL - output: "+ output);
      console.log("FINAL - dispResc: "+ dispResc);
    }
  });
});
