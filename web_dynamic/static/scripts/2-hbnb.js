$('document').ready(function () {
    const dictIds = {};
    $('.amenities input:checkbox').change(function () {
      if ($(this).is(':checked')) {
        dictIds[$(this).attr('data-name')] = $(this).attr('data-id');
      } else {
        delete dictIds[$(this).attr('data-name')];
      }
      let names = '';
      for (const key in dictIds) {
        if (names === '') {
          names = key;
          continue;
        }
        names = names + ', ' + key;
      }
      $('.amenities h4').text(names);
    });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});