$(document).ready(function(){

  $('button').on('click', function() {

    $('.science').css('display', 'inline');
    var search = $('#search').val();
    searchReddit(search);

  });

  function searchReddit(subreddit) {

    $.get('http://www.reddit.com/r/science.json').done(function(response) {

      console.log(response.data.children[0].data);

      for(var i = 0; i < 10; i++) {

        var username = response.data.children[i].data.title;
        var thumbnail = response.data.children[i].data.thumbnail;
        var author = response.data.children[i].data.author;


        $('.container').append('<div><p>' + author + '</p><p>' + username + '<p>' + '</p></p><img src=' + thumbnail + '><p>' +'</div>').css('text-align', 'center').css('margin', '10px').css('display', 'run-in').css('background-color', 'lightblue');


      }

    });

  }


});
