
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.cont'),
//   smooth: true,


//   // fixedClass: 'is-fixed',
// });

gsap.to('.star',{
  rotate:360,
  duration:0.5,
  scrollTrigger:{
    trigger:'.bold',
    scroller:'body',
    start:'top 100%',
    end:'top -100%',
    scrub:true,
  }
})

let mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {
  // This code will run only on screens wider than 768px
  gsap.from('.lefty', {
    x: 300,
    gap: 0,
    y: 200,
    rotate: -30,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.slack',
      scroller: 'body',
      start: 'top 50%',
      end: 'top -100%',
      scrub: 1.5,
    }
  });
  gsap.from('.righty', {
    x: -300,
    gap: 0,
    y: 200,
    rotate: 30,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.slack',
      scroller: 'body',
      start: 'top 50%',
      end: 'top -100%',
      scrub: 1.5,
    }
  });
  gsap.from('.center', {
    // x: -100,
    gap: 0,
    y: 200,
    margin:0,
    rotate: '0deg',
    duration: 0.5,
    scrollTrigger: {
      trigger: '.slack',
      scroller: 'body',
      start: 'top 50%',
      end: 'top -100%',
      scrub: 1.5,
    }
  });
  
});

mm.add("(max-width: 768px)", () => {
  // This code will run only on screens 768px or narrower
  gsap.set('.lefty', {clearProps: "all"}); // Reset the element
});



gsap.registerPlugin(ScrollTrigger);

const columns = document.querySelectorAll('.scroll-column');

columns.forEach((column, index) => {
  const isEven = index % 2 === 0;
  
  gsap.fromTo(column, 
    {
      y: isEven ? '0%' : '-50%' // Start position
    },
    {
      y: isEven ? '-50%' : '0%', // End position
      ease: "none",
      duration:1,
      scrollTrigger: {
        trigger: ".move",
        start: "top bottom",
        end: "bottom top",
        scrub: 3,
      }
    }
  );
});



let arrow = document.querySelector('#arrow')
let coffee = document.querySelector('.coffee')
let chat = document.querySelector('.chat')

chat.addEventListener('mouseenter',function(){
  coffee.style.zIndex=10
  arrow.style.opacity=0
  chat.style.backgroundColor='#31F7C8'
  chat.style.width='87vw'
})
chat.addEventListener('mouseleave',function(){
  coffee.style.zIndex=-1
  arrow.style.opacity=1
  chat.style.backgroundColor='#F6FA5E'
  chat.style.width='85vw'
})