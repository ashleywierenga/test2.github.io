 require(["esri/config", "esri/Map", "esri/views/MapView", "esri/widgets/Home", "esri/widgets/BasemapToggle"], function(esriConfig, Map, MapView, Home, BasemapToggle) {

    esriConfig.apiKey = "AAPK86dc8bb17ff746fb896111f027f6bd95lT1Yg1Qd5yARpB5E1hLligOjgxL-N3qFHUrN_jVQvMNTybIonHElly2Vdp4ahxC3";

        const map = new Map({
          basemap: "arcgis/topographic" // basemap styles service
        });
    const view = new MapView({
          map: map,
          center: [-118.805, 34.027], // Longitude, latitude
          zoom: 13, // Zoom level
          container: "viewDiv" // Div element
        });
   const homeBtn = new Home({
          view: view
        });

        // Add the home button to the top left corner of the view
        view.ui.add(homeBtn, "top-left");
   
   // 1 - Create the widget
const toggle = new BasemapToggle({
  // 2 - Set properties
  view: view, // view that provides access to the map's 'topo-vector' basemap
  nextBasemap: "hybrid" // allows for toggling to the 'hybrid' basemap
});
   
   
// Add widget to the top right corner of the view
view.ui.add(toggle, "top-right");
   
   
    });