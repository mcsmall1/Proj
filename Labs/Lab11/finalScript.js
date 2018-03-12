$(function() {
  alert("document_ready");

  $('#frmSearch').submit(function(){
    var searchterms = $("#searchterms").val();
    getResultFromOMDB("searchterms");
    return false;
  });
});

function getResultFromOMDB(searchterms){
  console.log(searchterms);
  var url = "https://www.omdbapi.com/?i=tt3896198&apikey=d5f27ac3" + searchterms;
  $.getJSON(url, function(jsondata){
    addResultsTitles(jsondata);
    console.log(jsondata);
  });
}

function addResultsTitles(jsondata){
  var htmlstring = "";
  for(var i=0; i<10; i++){
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" +title+ "</li>"
  };
  console.log(htmlstring);
  $('#divRes').append(htmlstring);
};
