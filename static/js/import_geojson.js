
var geojson;

/* Gets map data, after that imports age data, after that updating the view,
   after that connects mouse events */
d3.json('data/lan_7.0.geojson')
    .then(d => geojson = d)
    .then(import_agedata)
    .then(update)
    .then(clickable);

function get_geojson_features(){
    return geojson.features;
}
