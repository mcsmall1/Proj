$(function(){
  var map = L.map('mapid').setView([0, 0],1);

  var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16
    attribution:'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
  });

  Esri_WorldGrayCanvas.addTo(map);
});
