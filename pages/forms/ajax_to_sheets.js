var $form = $('form#gamereq'),
    url = 'https://script.google.com/macros/s/AKfycbz-QIWuFs_jnh9fuW3aUbHMBjpCe-SqTL1OhGVItUCEiMrxsN0/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
