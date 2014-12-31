(function() {
  require.config({
    paths: {
      jquery: 'vendor/jquery/dist/jquery',
      underscore: 'vendor/underscore/underscore'
    }
  });

  require(['jquery', 'underscore'], function($, _) {
    // TODO
    _.each(['hello', 'underscore'], function(x) {
      console.log(x);
    });

    $.each(['hello', 'jquery'], function(i, x) {
      console.log(x);
    });
  });
}).call(this);
