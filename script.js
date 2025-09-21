function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
function loadingAnimation(){
var tl = gsap.timeline()
tl.from("#page1",{
    opacity:0
})
tl.from("#page1",{
    transform:"scalex(0.7) scaley(0.2) translatey(80%)",
    borderRadius:"100px",
    duration:1.5,
    ease: "expo.out"
})
tl.from("nav",{
    opacity:0
})
tl.from("#page1 h1,#page1 p,#page1 div",{
    opacity:0,
    duration:0.5,
    stagger:0.1
})


}
function navanimation(){
    var nav = document.querySelector("nav")


nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()
    
    tl.to(".nav-bottom",{
        height:"25vh"
    })
    tl.to(".navpart-2 h5",{
        display:"initial"
    })
    tl.to(".navpart-2 h5 span",{
        y:0,
          
        stagger:{
            amount:0.5,
            
        }
    })

})
nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    
    tl.to(".navpart-2 h5 span",{
        y:25,
          
        stagger:{
            amount:0.2
        }
    })
    tl.to(".navpart-2 h5",{
        display:"none",
        duration:0.1
    })
    tl.to(".nav-bottom",{
        height:0,
        duration:0.2
    })

})
}



function customcursor(){ 
    
var rightelem = document.querySelectorAll(".right-elem")
rightelem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      gsap.to( elem.childNodes[3],{
        opacity:1,
        scale:1
      })

    })
    elem.addEventListener("mouseleave",function(){
        gsap.to( elem.childNodes[3],{
            opacity:0,
            scale:0
      })    
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x-47,
                y:dets.y - elem.getBoundingClientRect().y-125,

        })
    })

})
}

function movecursor(){
    var sr = document.querySelectorAll(".secright")
sr.forEach(function(elem){
            elem.addEventListener("mouseenter",function(){
            gsap.to( elem.childNodes[5],{
                scale:1
            })
            elem.addEventListener("mouseleave",function(){
                 gsap.to( elem.childNodes[5],{
                     opacity:1,
                     scale:0
             })    
            })
            elem.addEventListener("mousemove",function(dets){
                gsap.to(elem.childNodes[5],{
                 x:dets.x - elem.getBoundingClientRect().x-47,
                 y:dets.y - elem.getBoundingClientRect().y-50,

        })
    })

    })
})

}




function videoani(){
    var page3center = document.querySelector(".page3center")
var video = document.querySelector("#page3 video")

page3center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scalex(1) scaley(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click",function(){
      gsap.to(video,{
        transform:"scalex(0.7) scaley(0)",
        opacity:0,
        borderRadius:"30px"
    })
})
}


function pag5video(){
    var section = document.querySelectorAll(".secright")
    section.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity=1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity=0
        elem.childNodes[3].load()
    })
})
}





locomotiveAnimation();

customcursor();
navanimation();

movecursor();


videoani();

pag5video();






loadingAnimation();

