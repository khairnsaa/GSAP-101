gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    defaults:{
        duration: 0.7,
        ease: Power1.easeOut
    }
})


tl
    .from("header h2", {y: -10, opacity: 0}, 1)
    .from("nav p", {x: "-100", stagger:'0.5', duration: 0.3 },1)
    .from('.hero h1', {y: 100, duration: 0.7}, 1)
    .fromTo('.hero h1', {scale: 1}, {scale: 1.5, duration: 0.3})
    

gsap.from('.first-image', {
    scrollTrigger:{
        trigger: '.first-image',
        markers: true,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        toggleActions: "restart pause reverse reset"
    }, 
    x: -200, y: 100, opacity: 0});
gsap.from('article h2', {
    scrollTrigger: {
        trigger: 'article h2',
        toggleActions: "restart pause reverse reset"
    }, y: 100, opacity: 0, delay: 0.5})  



// gsap.fromTo('a', {x: "-100", opacity: "0"}, {x: "0", opacity: '1'})

// ****** SCROLL TRIGGER ******

// toggleActions: "(play|pause|resume|restart|reverse|reset|complete|none)"
//  first position: when you scroll for the first time
//  secong position: when it goes forward pass the endpoint
//  third position: when entered from the bottom of thing you want to animate
//  final position: when we scroll all the way back past the start (usually pause or reset)
    // it not only ensures that viewers will see the animatoin but improve the performance by not animating things off screen


