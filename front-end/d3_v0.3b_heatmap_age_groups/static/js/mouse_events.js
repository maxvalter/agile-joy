
var tmp_colour;

function handle_mouseover(a, geojson_data) {
    let lan_name = geojson_data.properties.LnNamn;
    let lan_kod = geojson_data.properties.LnKod;
    let lan_cases = get_age_data_by_age_group_and_county(lan_name, agespan);
    d3.select("#data_div")
        .html(
              "<div class=\"lan\">" + lan_name + " </div>" +
              "<br/>" +
              "Sjukdomsfall: " + lan_cases +
              "<br/>"
             )
    var this_path = d3.select(this);
    tmp_colour = this_path.attr("fill");
    this_path.attr("fill", "#f00")
}

function handle_mouseout() {
    d3.select(this).attr("fill", tmp_colour)
}

function handle_ageselect() {
    agespan = event.target.value;
    update();
}

function clickable() {
    d3.selectAll("path").on("mouseover", handle_mouseover);
    d3.selectAll("path").on("mouseout", handle_mouseout);
    d3.select("#ageselect").on("change", handle_ageselect);
}
