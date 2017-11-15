if(localStorage){
    $(document).ready(function(){
        $(".optionFirst").hide();
        $(".optionTwo").hide();
        $(".optionThree").hide();
        $(".optionFour").hide();
        
        $(".btnFirst").click(function(){
           var ClickedFirst = "True"; 
           
           AddFirst = $('.1Name').text();
           
           localStorage.setItem("AddFirst", AddFirst);
           localStorage.setItem("ClickedFirst", ClickedFirst);
           
           alert(AddFirst + " has been added to Watch Later");
           
           console.log(AddFirst);
       }); 
        
        $(".btnTwo").click(function(){
           var ClickedTwo = "True"; 
           
           AddTwo = $('.2Name').text();
           
           localStorage.setItem("AddTwo", AddTwo);
           localStorage.setItem("ClickedTwo", ClickedTwo);
           
           alert(AddTwo + " has been added to Watch Later");
           
           console.log(AddTwo);
       });
        
        $(".btnThree").click(function(){
           var ClickedThree = "True"; 
           
           AddThree = $('.3Name').text();
           
           localStorage.setItem("AddThree", AddThree);
           localStorage.setItem("ClickedThree", ClickedThree);
           
           alert(AddThree + " has been added to Watch Later");
           
           console.log(AddThree);
       });
        
        $(".btnFour").click(function(){
           var ClickedFour = "True"; 
           
           AddFour = $('.4Name').text();
           
           localStorage.setItem("AddFour", AddFour);
           localStorage.setItem("ClickedFour", ClickedFour);
           
           alert(AddFour + " has been added to Watch Later");
           
           console.log(AddFour);
       });
    });
}


$(function () {
    $("#btn_login").on("click", function () {
        window.location.href = 'pages/homepage.html';
    });
    
    	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    
    

});

var pxlCount = 0;
$(window).on('scroll', function () {
    pxlCount = $(document).scrollTop()/50;
  	$('p.pxlCount > span').text(pxlCount);
    $("#bgImage").css({"-webkit-filter": "blur("+pxlCount+"px)","-moz-filter": "blur("+pxlCount+"px)","filter": "blur("+pxlCount+"px)" }); 
    
});
