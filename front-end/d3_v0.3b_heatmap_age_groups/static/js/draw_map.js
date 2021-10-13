
let proj;
let geoGenerator = d3.geoPath().projection(proj);

let state = {
    type:       'Mercator',
    scale:      900,
    translateX: 170,
    translateY: 250,
    centerLon:  15,
    centerLat:  63
}

function heat_colour([min,max]){
        return d3.scaleSequential([min,max],d3.interpolateReds);
}

function update() {

    /* [min,max] "agespan" values
       for all counties */
    var minmax = d3.extent(get_age_data_by_age_group(agespan));

    console.log("updating agespan: " + agespan)

    proj = d3.geoMercator()
    geoGenerator.projection(proj)

    proj.scale(state.scale)
        .translate([state.translateX, state.translateY])
        .center([state.centerLon, state.centerLat])

    let u = d3.select('g.map')
        .selectAll('path')
        .data(get_geojson_features())

    u.enter()
       .append('path')
       .attr("fill", "#eee")
       .attr("fill", d => heat_colour(minmax)
            (get_age_data_by_age_group_and_county(d.properties.LnNamn,
                                                  agespan)))
       .attr('d', geoGenerator)

//    add_legend("#legend");
}
