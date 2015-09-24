;(function() {
  var $ = require('./libs/jquery');
  var button = $(".AudioPlayerModule-button-container button");
  $('html').keydown(function(a){
      if (a.key === 'Enter' || a.which === 13) {
          button.click();
      }
  });
})();
