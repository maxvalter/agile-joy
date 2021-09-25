
./static/js/leaflet
Leaflet library https://leafletjs.com/

./static/js/react React library https://reactjs.org
Not used, instead using d3.

./resources/leaflet.zip
Leaflet 1.7.1

./resources/get_Folkhalsomyndigheten_Covid19_latest.sh
Gets the latest data from https://github.com/codler/sweden-coronavirus and
converts it to a CSV file.

./static/data/lan.geojson
from https://github.com/perliedman/svenska-landskap

The map ./static/data/lan_3.0.geojson is converted using qgis, layer import,
then export layer as GeoJSON with option RFC7946 enabled. The original file
used was ./resources/tab_svenska_210505.zip owned by Lantmäteriet.

