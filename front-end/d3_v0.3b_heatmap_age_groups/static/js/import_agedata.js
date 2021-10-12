
var age_data;
var agespan = '20-24 år';

let import_agedata =
    d3.dsv(';', 'data/agedata.csv')
    .then(d => age_data = d);

function get_age_data_by_age_group(age_group){
    let age_data_by_age_group = [];
    for (const i in age_data){
        for(const j in age_data[i]){
            if(j==age_group)
                // convert from String to Number and push to the array
                age_data_by_age_group.push(parseInt(age_data[i][j]));
        }
    }
    return age_data_by_age_group;
}

function get_age_data_by_age_group_and_county(county, age_group){
    var curr_county;      
    var age_data_by_age_group_and_county = null;
    for (const i in age_data){                                               
        for(const j in age_data[i]){
            if(j=="län")
                curr_county = age_data[i][j];
            if(j==age_group && county == curr_county)
                age_data_by_age_group_and_county = parseInt(age_data[i][j]);
        }
    } 
    return age_data_by_age_group_and_county;
}
