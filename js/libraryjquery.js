$(function(){
    
     console.log("hello");
 
////////////////////////// GENRE //////////////////////////

$("#dropdown-menu").on("change", function(event) {
    
    event.preventDefault();
    
    if($("#dropdown-menu").val() === "ALL") {
        $(".movie-card").show();
        
        } else if ($("#dropdown-menu").val() === "ACT") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("genre") === "action") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu").val() === "ADV") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("genre") === "adventure") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu").val() === "COM") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("genre") === "comedy") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu").val() === "DRA") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("genre") === "drama") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu").val() === "FAN") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("genre") === "fantasy") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu").val() === "THR") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("genre") === "thriller") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu").val() === "HOR") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("genre") === "horror") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu").val() === "SCI") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("genre") === "scifi") {
                $(this).show();
            }
        });
        
    }
    
});

////////////////////////// IMDB FILTER //////////////////////////
    
    $("#dropdown-menu-two").on("change", function(event) {
    
    event.preventDefault();
    
    if($("#dropdown-menu-two").val() === "ALL") {
        $(".movie-card").show();
        
        } else if ($("#dropdown-menu-two").val() === "AGT") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("imdb") === "eight") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu-two").val() === "THREE") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("imdb") === "three") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu-two").val() === "TWO") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("imdb") === "two") {
                $(this).show();
            }
        });
        
    }   
});
    
////////////////////////// STARS FILTER //////////////////////////

    $("#dropdown-menu-three").on("change", function(event) {
    
    event.preventDefault();
    
    if ($("#dropdown-menu-three").val() === "ALL") {
        $(".movie-card").show();
        
        } else if ($("#dropdown-menu-three").val() === "FIVEST") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("stars") === "five") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu-three").val() === "FOURST") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("stars") === "four") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu-three").val() === "THREEST") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("stars") === "three") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu-three").val() === "TWOST") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("stars") === "two") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu-three").val() === "ONEST") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("stars") === "one") {
                $(this).show();
            }
        });
        
    }
});
    
////////////////////////// YEAR FILTER //////////////////////////

$("#dropdown-menu-four").on("change", function(event) {
    
    event.preventDefault();
    
    if($("#dropdown-menu-four").val() === "ALL") {
        $(".movie-card").show();
        
        } else if ($("#dropdown-menu-four").val() === "TWOTEN") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("year") === "ten") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu-four").val() === "TWOTHOUS") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("year") === "two") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu-four").val() === "NINETIES") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("year") === "nine") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu-four").val() === "EIGHTIES") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("year") === "eight") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu-four").val() === "SEVENTIES") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("year") === "seven") {
                $(this).show();
            }
        });
        
    } else if ($("#dropdown-menu-four").val() === "BEFORE") {
        $(".movie-card").hide();
        $(".movie-card").each(function() {
            if($(this).data("year") === "before") {
                $(this).show();
            }
        });
        
    }  
});
    



});