$(document).ready(()=>{
    'use strict'
    $("#introduction-arrow-div").click(()=>{
        $('html,body').animate({scrollTop: $("#aboutMe").offset().top}, 'slow')
    })
    $('body').scrollspy({ target: '#nav-bar'})

    let year = new Date().getFullYear()
    $("footer p").append(year)
    
    let viewport = window.innerWidth
    if(viewport <= 768){
        $("#introduction").removeClass("typewriter-text")
    }
})