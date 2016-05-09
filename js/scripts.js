// My Scripts

$(function() {
  $.simpleWeather({
    location: 'Spokane, WA',
    unit: 'f',
    success: function(weather) {
     $('.city').text(weather.city);
        $('.temp').text(weather.temp);
        $('.cond-code').text(weather.code);
        //console.log(weather);
      }

      html += '<p>weather.description: '+weather.description+'</p>';

      $("#weather").html(html);
    },
    error: function(error) {
      console.log('No Weather Error');
    }
  });
});