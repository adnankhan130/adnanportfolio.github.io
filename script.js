$(document).ready(function(){
$(window).scroll(function(){
if(this.scrollY >20){
    $(".navbar").addClass("sticky");
}
else{
    $(".navbar").removeClass("sticky");
}
})


    $('.toggler').click(function(){
    $(this).toggleClass("active");
    $('.menu').toggleClass("active");
    })

var typed = new Typed(".typing",{
    strings: ["Graphic Designer.","Web Developer.","Freelancer.","Virtual Assistant."],
    typeSpeed:50,
    backSpeed:30,
    loop:true
});



})