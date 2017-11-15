$(document).ready(function() {
    var selection1 = localStorage.getItem("AddFirst");
    var selection2 = localStorage.getItem("AddTwo");
    var selection3 = localStorage.getItem("AddThree");
    var selection4 = localStorage.getItem("AddFour");

    if(localStorage){
        $(document).ready(function(){
        if (localStorage.getItem("ClickedFirst") == "True"){
            
            console.log("btnFirst Pressed");
        
            $(".optionFirst").show();
                        
            $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(selection1)).then(function(response) {
            var image = response.Poster;
        
            if (image !== "N/A"){
                $('.image5').css('background-image', 'url(' + image + ')');
            };
        
            var name = response.Title;
            $('.title5').text(name);
        
            var rating = response.imdbRating;
            $('.imdb5').text("IMDb Rating: " + rating);
        
            var genre = response.Genre;
            $('.genre5').text("Genre: " + genre);
        
            var plot = response.Plot;
            $('.synopsis5').text(plot);
        
            });
        }; 
        
        if (localStorage.getItem("ClickedTwo") == "True"){
            
            console.log("btnTwo Pressed");
        
            $(".optionTwo").show();
                        
            $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(selection2)).then(function(response) {
            var image = response.Poster;
        
            if (image !== "N/A"){
                $('.image6').css('background-image', 'url(' + image + ')');
            };
        
            var name = response.Title;
            $('.title6').text(name);
        
            var rating = response.imdbRating;
            $('.imdb6').text("IMDb Rating: " + rating);
        
            var genre = response.Genre;
            $('.genre6').text("Genre: " + genre);
        
            var plot = response.Plot;
            $('.synopsis6').text(plot);
        
            });
        }; 
        
        if (localStorage.getItem("ClickedThree") == "True"){
            
            console.log("btnThree Pressed");
        
            $(".optionThree").show();
                        
            $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(selection3)).then(function(response) {
            var image = response.Poster;
        
            if (image !== "N/A"){
                $('.image7').css('background-image', 'url(' + image + ')');
            };
        
            var name = response.Title;
            $('.title7').text(name);
        
            var rating = response.imdbRating;
            $('.imdb7').text("IMDb Rating: " + rating);
        
            var genre = response.Genre;
            $('.genre7').text("Genre: " + genre);
        
            var plot = response.Plot;
            $('.synopsis7').text(plot);
        
            });
        }; 
        
        if (localStorage.getItem("ClickedFour") == "True"){
            
            console.log("btnFour Pressed");
        
            $(".optionFour").show();
                        
            $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(selection4)).then(function(response) {
            var image = response.Poster;
        
            if (image !== "N/A"){
                $('.image8').css('background-image', 'url(' + image + ')');
            };
        
            var name = response.Title;
            $('.title8').text(name);
        
            var rating = response.imdbRating;
            $('.imdb8').text("IMDb Rating: " + rating);
        
            var genre = response.Genre;
            $('.genre8').text("Genre: " + genre);
        
            var plot = response.Plot;
            $('.synopsis8').text(plot);
        
            });
        }; 
        
        
    });
    }

});

function watchlist() {
    
    ////////////// Show Info //////////////    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=Supergirl').then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.image1').css('background-image', 'url(' + image + ')');
        };
        
        if (image !== "N/A"){
            $('.one').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.title1').text(name);
        
        var rating = response.imdbRating;
        $('.imdb1').text("IMDb Rating: " + rating);
        
        var genre = response.Genre;
        $('.genre1').text("Genre: " + genre);
        
        var plot = response.Plot;
        $('.synopsis1').text(plot);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=Brooklyn%20Nine%20Nine').then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.image2').css('background-image', 'url(' + image + ')');
        };
        
        if (image !== "N/A"){
            $('.two').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.title2').text(name);
        
        var rating = response.imdbRating;
        $('.imdb2').text("IMDb Rating: " + rating);
        
        var genre = response.Genre;
        $('.genre2').text("Genre: " + genre);
        
        var plot = response.Plot;
        $('.synopsis2').text(plot);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=American%20Horror%20Story').then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.image3').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.title3').text(name);
        
        var rating = response.imdbRating;
        $('.imdb3').text("IMDb Rating: " + rating);
        
        var genre = response.Genre;
        $('.genre3').text("Genre: " + genre);
        
        var plot = response.Plot;
        $('.synopsis3').text(plot);
        
    });
    
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=Dexter').then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.image4').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.title4').text(name);
        
        var rating = response.imdbRating;
        $('.imdb4').text("IMDb Rating: " + rating);
        
        var genre = response.Genre;
        $('.genre4').text("Genre: " + genre);
        
        var plot = response.Plot;
        $('.synopsis4').text(plot);
        
    });
    
    ////////////// Delete //////////////
    
    $(document).on("click", ".delete", function () {
        $(this).parent().remove();
        if (localStorage.getItem("ClickedFirst") == "True"){
         localStorage.setItem("ClickedFirst", "False");   
        };
        if (localStorage.getItem("ClickedTwo") == "True"){
         localStorage.setItem("ClickedTwo", "False");   
        };
        if (localStorage.getItem("ClickedThree") == "True"){
         localStorage.setItem("ClickedThree", "False");   
        };
        if (localStorage.getItem("ClickedFour") == "True"){
         localStorage.setItem("ClickedFour", "False");   
        };
    });
    
    ////////////// YouTube iFrame //////////////
    var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'bHQqvYy5KYo',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }
    
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
}

watchlist();