window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);

  // 프로젝트 카드 flip (PC/모바일 공통)
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // 반응형 애니메이션
  ScrollTrigger.matchMedia({

    // ================= PC 전용 =================
    "(min-width: 769px)": function () {

      // section1 aniBox (튀어오르는 효과)
      gsap.utils.toArray(".aniBox img").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: -450,
          duration: 2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: ".wrap",
            start: "5%",
            toggleActions: "play none none none",
          }
        });
      });

      // section3 원형 키워드 (떨어지는 효과)
      gsap.timeline({
        scrollTrigger: {
          trigger: '.box',
          start: 'top top',
          end: '100% 20%',
          scrub: 2,
        }
      })
        .to('#c1', { x: '0', y: '900', rotate: '40', ease: 'none', duration: 7 }, 0)
        .to('#c2', { x: '20', y: '700', rotate: '-20', ease: 'none', duration: 6 }, 0.2)
        .to('#c3', { x: '30', y: '700', rotate: '-40', ease: 'none', duration: 7 }, 0)
        .to('#c4', { x: '40', y: '800', rotate: '50', ease: 'none', duration: 6 }, 1)
        .to('#c5', { x: '20', y: '600', rotate: '-20', ease: 'none', duration: 6 }, 0.5)
        .to('#c6', { x: '50', y: '800', rotate: '-10', ease: 'none', duration: 7 }, 0);
    },

    // ================= 모바일 전용 =================
    "(max-width: 768px)": function () {

      // section1 aniBox (fade-in)
      gsap.utils.toArray(".aniBox img").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            }
          }
        );
      });

      // section3 원형 키워드 (scale + fade-in)
      gsap.utils.toArray(".skill-wrap span").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );
      });
    }
  });
};