$.ajax({
  url: '/book',
  type: 'GET',
  dataType: 'json',
  data: {search: 'harry potter'},
})
.done(function() {
  console.log("success");
})
.fail(function() {
  console.log("error");
})
;
