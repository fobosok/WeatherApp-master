$(document).ready(function() {
    $('.short').hide();
    let date = new Date(2019, 2, 15);
    var url = 'http://api.apixu.com/v1/forecast.json?key=368ea4a1d6f74a70974163011191402&q=Kryvyy_Rih&days=7';
    $.getJSON(url, function(data) {
        var data = JSON.stringify(data);
        var json = JSON.parse(data);

        var country = json.location.country;
        var city = json.location.name;
        var state = json.location.region;

        var tempCelcius = json.current.temp_c;
        var tempFahrenheit = json.current.temp_f;
        var lastUpdated = json.current.last_updated.replace('-', ' ');

        var wind = json.current.wind_kph;
        var humidity = json.current.humidity;
        var time = json.location.localtime.split(' ')[1];
        var cloud = json.current.cloud;
        tomorrow = json.forecast.forecastday[ 2 ].day;
        alert(tomorrow.mintemp_c);

        $('#weather').html(city+', '+state+', '+country);

        $('#info1').html(time);
        $('#info2').html('Wind '+wind+' kph');
        $('#info3').html(tempCelcius+'&#8451');

        if(cloud <= 30) {
            $('#info5').html('Clear Sky');
        } else {
            $('#info5').html('Cloudly Sky');
        }
        $('#info6').html('Humidity '+humidity+'%');
    });
});