$(document).ready(()=>{
    $(document).click(()=>{
        console.log(document.activeElement)
    })
    $("#homeNavButton").click(() => {
        $('html,body').animate({scrollTop: $("#home").offset().top}, 'slow')
        setActiveNavLink("homeNavButton")
    })
    $("#aboutMeNavButton").click(()=>{
        $('html,body').animate({scrollTop: $("#aboutMe").offset().top}, 'slow')
        setActiveNavLink("aboutMeNavButton")
    })
    $("#projectsNavButton").click(()=>{
        $('html,body').animate({scrollTop: $("#projects").offset().top}, 'slow')
        setActiveNavLink("projectsNavButton")
    })
    $(".arrowShowAboutMe").click(()=>{
        $("#aboutMeNavButton").click()
    })
})

const setActiveNavLink = (buttonPressed) => {
    switch(buttonPressed){
        case "homeNavButton":
            $("#homeNavButton").addClass("active")
            $("#aboutMeNavButton").removeClass("active")
            $("#projectsNavButton").removeClass("active")
            break;
        case "aboutMeNavButton":
            $("#homeNavButton").removeClass("active")
            $("#aboutMeNavButton").addClass("active")
            $("#projectsNavButton").removeClass("active")
            break;
        case "projectsNavButton":
            $("#homeNavButton").removeClass("active")
            $("#aboutMeNavButton").removeClass("active")
            $("#projectsNavButton").addClass("active")
            break;
        default:
            return;
    }
}