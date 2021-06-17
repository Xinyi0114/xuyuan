$( document ).ready(function() {

    var x1, x2, y1, y2;

    x1 = $('#about').position().left;
    y1 = $('#about').position().top;
    x2 = $('#img2').position().left;
    y2 = $('#img2').position().top;

    $( "#bt1" ).click(function() {
      window.scrollTo(x1, y1);

      console.log(x1, y1);
    });

    $( "#bt2" ).click(function() {
      window.scrollTo(x2, y2);
    });
});
