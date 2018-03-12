$(function() {
  alert("document_ready");

  $('#frmSearch').submit(function(){
    var searchterms = $("#searchterms").val();
    getResFromOMDB(searchterms);
    console.log(searchterms);
    return false;
  });
});

function getResFromOMDB(searchterms){
  var url = "https://www.omdbapi.com/?apikey=d5f27ac3&s=" + searchterms;
  $.getJSON(url, function(jsondata){
    addRes(jsondata);
    console.log(jsondata);
  });
}

function addRes(jsondata){
  var htmlstring = "";
  for(var i=0; i<10; i++){
    var title = jsondata.Search[i].Title;
    var poster = jsondata.Search[i].Poster;
    htmlstring += "<li>" +title+ +poster+ "</li>"
  };
  console.log(htmlstring);
  $('#divRes').append(htmlstring);
};
