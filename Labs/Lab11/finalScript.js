$(function() {
  alert("document_ready");

  $('#frmSearch').submit(function(){
    var searchterms = $("#searchterms").val();
    getResultFromOMDB(searchterms);
    console.log(searchterms);
    return false;
  });
});

function getResultFromOMDB(searchterms){
  var url = "https://www.omdbapi.com/?apikey=d5f27ac3&s=" + searchterms;
  $.getJSON(url, function(jsondata){
    addResultsTitles(jsondata);
    console.log(jsondata);
  });
}

function addResultsTitles(jsondata){
  var htmlstring = "";
  console.log(jsondata);
  for(var i=0; i<10; i++){
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" +title+ "</li>"
  };
  console.log(htmlstring);
  $('#divRes').append(htmlstring);
};
