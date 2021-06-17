$( document ).ready(function() {
    // var chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
    var x1, x2, y1, y2;

    x1 = $('#about').position().left;
    y1 = $('#about').position().top;
    x2 = $('#img2').position().left;
    y2 = $('#img2').position().top;

    $( "#bt1" ).click(function() {
      if((navigator.userAgent.indexOf("Firefox") != -1)
          || (navigator.userAgent.indexOf("Chrome") != -1)){
          window.scrollTo(x1, y1);
      }else{
      $("html, body").animate({
        scrollTop: y1
      }, {duration: 500, queue: false});

      $("html, body").animate({
        scrollLeft: x1
      }, {duration: 500, queue: false});
    }
    });

    $( "#bt2" ).click(function() {
      if((navigator.userAgent.indexOf("Firefox") != -1)
          || (navigator.userAgent.indexOf("Chrome") != -1)){
          window.scrollTo(x2, y2);
      }else{
      $("html, body").animate({
        scrollTop: y2
      }, {duration: 500, queue: false});

      $("html, body").animate({
        scrollLeft: x2
      }, {duration: 500, queue: false});
    }
    });
});
