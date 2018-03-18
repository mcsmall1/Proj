$(function(){
  var map = L.map('mapid').setView([0, 0],1);

  var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {attribution:'Tiles &copy; Esri &mdash; DeLorme, NAVTEQ', maxZoom: 16 });

  Esri_WorldGrayCanvas.addTo(map);
});
