$(function(){
  //make map
  var map = L.map('mapid').setView([0, 0],1);
  //create gray base layer
  var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {attribution:'Tiles &copy; Esri &mdash; DeLorme, NAVTEQ', maxZoom: 16 });
  //add to map
  Esri_WorldGrayCanvas.addTo(map)
  //when the button on is clicked
  $('#Quake').click(function() {
    console.log("getting quakes");
    $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", function(result) {
      console.log(result)
      result.features.forEach(function(quake){
        //get coords
        var lng = quake.geometry.coordinates[0];
        var lat = quake.geometry.coordinates[1];
        //create dot
        var circle = L.circle([lat, lng], mag * 10000, {
          color: 'red',
          opacity: 0,
          fillColor: 'red',
          fillOpacity: 0.8
        })
        //add to map
        circle.addTo(map);
      });
    });
  });
});
