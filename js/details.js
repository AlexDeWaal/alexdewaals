if(localStorage){
     
    $(document).ready(function(){
       $("#playNow").click(function(){
        var movieName = $("#NameTitle").text();
           
        localStorage.setItem("movieName", movieName);
                
       });
        
       $("#Title2").text(localStorage.getItem("movieName"));    
    });
}

$(function() {
    $(document).on("click", "#playNow", function() {
        window.location.href = 'playpage.html';
    });
});