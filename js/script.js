window.onload = function() {
  gsap.registerPlugin(ScrollTrigger);

    // 핀 전용
  ScrollTrigger.create({
    trigger: ".section1",
    start: "top top",
    end: "+=900",
    pin: true,
    // markers: true
  });




// 스크롤 내릴 때 .aniBox 안 이미지들은 아래에서 위로 올라오면서 등장
  gsap.utils.toArray(".aniBox img").forEach((el, i) => {
    gsap.to(el, {
      opacity: 1,
      y: -450,
      duration: 2,
      delay: 0,
      ease: "bounce.out",
      scrollTrigger: {
        // markers:true,
        trigger: ".wrap",
        start: "5%", // 화면에 .aniBox가 80% 지점에 보이면 시작
        toggleActions: "play none none none",
      }
    })
  })



  const ani4 = gsap.timeline();

  ani4.from([".section2_wrap #aboutme",".section2_wrap #about"],{
      autoAlpha: 0,
      scale:1,
      duration: 1.5,
      ease: "power1.out"
  });




  ScrollTrigger.create({
      animation: ani4,
      trigger: ".section2",
      start: "top top",
      end: "bottom +=700",
      scrub: 2,
      // markers: true,
      anticipatePin: 3,

});


// 1. section2 전체를 핀
ScrollTrigger.create({
  trigger: ".section2",
  start: "top",
  end: "+=3000", // profill 이미지 다 올라올 때까지 길게 잡음
  pin: true,
  // markers:true
});


  //con 03
  gsap.timeline({
      scrollTrigger:{
            trigger:'.section2',
            start: 'top 100%',
            end: 'bottom 50%',
            scrub:10, //부드럽게 되감기기
            markers: true
          
        }
  })
  .fromTo('.con1 .profill_1',{y:'400%'},{y:'0'},1.0)
  .fromTo('.con1 .profill_2',{y:'400%'},{y:'0'},1.2)
  .fromTo('.con1 .profill_3',{y:'400%'},{y:'0'},1.4)
  .fromTo('.con1 .profill_4',{y:'400%'},{y:'0'},1.8)
  .fromTo('.con1 .profill_5',{y:'400%'},{y:'0'},1.9);



document.querySelectorAll(".text-fill").forEach(el => {
  gsap.to(el, {
    "--fill-width": "100%",
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      end: "top 80%",
      scrub: true,
      // markers: true
    }
  });
});


  //section3

  gsap.timeline({
    scrollTrigger: {
      trigger:'.box',
      start:'top top',
      end: '100% 20%',
      scrub:1,
      // markers:true
    }
  })
    .to('.skill-wrap #c1',{x:'0', y:'600', rotate:'40', ease:'none', duration:7},0)
    .to('.skill-wrap #c2',{x:'20', y:'700', rotate:'-20', ease:'none', duration:6},0.2)
    .to('.skill-wrap #c3',{x:'30', y:'600', rotate:'-40', ease:'none', duration:7},0)
    .to('.skill-wrap #c4',{x:'40', y:'800', rotate:'50', ease:'none', duration:6},1)
    .to('.skill-wrap #c5',{x:'20', y:'600', rotate:'-20', ease:'none', duration:6},0.5)
    .to('.skill-wrap #c6',{x:'50', y:'800', rotate:'-10', ease:'none', duration:7},0)
  

  //circle
      gsap.timeline({
        scrollTrigger:{
          trigger:'footer',
          start:'0% 50%',
          end:'30% 0%',
          scrub:1,
          // markers:true
        }
      })
      .fromTo('.circle', {'width':'0', 'height':'0','duration':'10','ease':'elastic','top':'3%'},{'width':'2500px',
        'height':'2500px','duration':'10','top':'30%'}, 0)

      //02. textBox
      gsap.timeline({
        scrollTrigger:{
          trigger:'footer .email',
          start:'0% 80%',
          end:'100% 80%',
          scrub:1,
          // markers:true
        }
      })
      .fromTo('.email',{'top':'50%','duration':'5', 'esae':'elastic', 'opacity':'0'},{'duration':'5','ease':'none',
        'opacity':'1','top':'40%'},0)

      gsap.to(".footer_c", {
      y: -20,       // 위로 20px 이동
      duration: 1.5,  // 2초 동안
      yoyo: true,   // 다시 돌아오게
      repeat: -1,   // 무한 반복
      ease: "power1.inOut"
      });


    
};

$(document).ready(function() {
  $('.card').on('mouseenter', function() {
    $('.card').removeClass('active');
    $(this).addClass('active');
  });

  $('.card').on('mouseleave', function() {
    $(this).removeClass('active');
  });
});


