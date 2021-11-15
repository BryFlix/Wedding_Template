$(window).on("load",function(){
    $(".preloader").fadeOut(600);

    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    
    function slideshow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideshow,5000);
    }
    slideshow();
})

$(document).ready(function(){

    $(".barbtn").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    })

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    })

    $.scrollIt({
        topOffset: -50
    });

    peopleFilter($(".filterbtn.active").attr("data-target"))
    $(".filterbtn").click(function(){
        if(!$(this).hasClass("active")){
        peopleFilter($(this).attr("data-target"))
        }
    })
    function peopleFilter(target){
    $(".filterbtn").removeClass("active");
    $(".filterbtn[data-target='"+target+"']").addClass("active");
    $(".peopleitem").hide();
    $(".peopleitem[data-category='"+target+"']").fadeIn();
    }

    const wHeight = $(window).height();
    $(".gallerypopup .gpimg").css("max-height", wHeight + "px");

    let itemIndex = 0;
    const totalGalleryItems = $(".galleryitem").length;
    
    $(".galleryitem").click(function() {
        itemIndex = $(this).index();
        $(".gallerypopup").addClass("open");
        $(".gallerypopup .gpimg").hide();
        gpSlideShow();
    })
    $(".gpcontrols .next").click(function(){
        if(itemIndex == totalGalleryItems-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".gallerypopup .gpimg").fadeOut(function(){
            gpSlideShow();
        })
    })

    $(".gpcontrols .prev").click(function(){
        if(itemIndex === 0){
            itemIndex = totalGalleryItems-1;
        }
        else{
            itemIndex--;
        }
        $(".gallerypopup .gpimg").fadeOut(function(){
            gpSlideShow();
        })
    })

    function gpSlideShow(){
        const imgSrc = $(".galleryitem").eq(itemIndex).find("img").attr("data-large");
        $(".gallerypopup .gpimg").fadeIn().attr("src", imgSrc);
        $(".gpcounter").text((itemIndex+1) +"/"+ totalGalleryItems);
    }

    $(".gpclose").click(function(){
        $(".gallerypopup").removeClass("open");
    })

    $(".gallerypopup").click(function(event){
        if($(event.target).hasClass("open")){
            $(".gallerypopup").removeClass("open");
        }
    })
})