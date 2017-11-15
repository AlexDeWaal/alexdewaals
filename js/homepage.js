$(function() {
    
    
    $("#searchResults").hide();
    $(".btnClose").hide();
    
    $(document).on("click", ".btnSearch", function() {
        
        $("#searchResults").show();
        $(".btnClose").show();
        
        var input = $(".form-control").val();
        
        $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(input)).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A") {
            $('.PosterS').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.SName').text(name);
        
        var rating = response.imdbRating;
        $('.SImdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.SPlot').text(plot);
        
        var genre = response.Genre;
        $('.SGenre').text("Genre: " + genre);
        
        }); 
    });
    
    $(document).on("click", ".btnClose", function() {
        $("#searchResults").hide();
        $(".btnClose").hide();
    })
    
    $(document).on("click", "#playNow", function() {
        window.location.href = 'details.html';
    })
    
        $(document).on("click", "#playNow2", function() {
        window.location.href = 'details2.html';
    })
    
        $(document).on("click", "#playNow3", function() {
        window.location.href = 'details3.html';
    })
    
        $(document).on("click", "#playNow4", function() {
        window.location.href = 'details4.html';
    })
})