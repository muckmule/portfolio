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
			y: () => window.innerWidth < 1024 ? "-34vw" : -450,
			duration: 2,
			ease: "bounce.out",
			scrollTrigger: {
				trigger: ".wrap",
				start: "5%",
				toggleActions: "play none none none",
			}
		})
	})

	const ani4 = gsap.timeline();

	ani4.from([".section2_wrap #aboutme", ".section2_wrap #about"], {
		autoAlpha: 0,
		scale: 1,
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
	gsap.to(".aboutme", {
			y: 10, // 위로 20px 이동
			duration: 1.5, // 2초 동안
			yoyo: true, // 다시 돌아오게
			repeat: -1, // 무한 반복
			ease: "power1.inOut"})


	// section2 전체 pin
// 순차 애니메이션 + pin 통합
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top 0%",       // section2 상단이 화면 상단에 닿으면 시작
    end: "+=3000", // 순차 애니메이션 끝 + 300~500px 여유
    scrub: 3,              // 내려갈 때/올라갈 때 자연스럽게 되감김
    pin: true,             // Timeline 구간 동안 section2 pin 유지
    // markers: true
  }
});

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

// 순차 애니메이션
tl.fromTo('.textBox', { y: '300%' }, { y: '0' }, "<0.5")
	.fromTo('.con1 .profill_1', { y: '300%' }, { y: '0' })
  .fromTo('.con1 .profill_2', { y: '300%' }, { y: '0' }, "<0.3")
  .fromTo('.con1 .profill_3', { y: '300%' }, { y: '0' }, "<0.3")
  .fromTo('.con1 .profill_4', { y: '300%' }, { y: '0' }, "<0.3")
  .to({}, { duration: 3 });

	let mm = gsap.matchMedia();

  // PC 버전
	mm.add("(min-width: 1025px)", () => {
	  //section3
		gsap.timeline({
				scrollTrigger: {
					trigger: '.box',
					start: 'top top',
					end: '100% 20%',
					scrub: 2,
				}
			})
			.to('.skill-wrap #c1', {
				x: '0',
				y: '900',
				rotate: '40',
				ease: 'none',
				duration: 7
			}, 0)
			.to('.skill-wrap #c2', {
				x: '20',
				y: '700',
				rotate: '-20',
				ease: 'none',
				duration: 6
			}, 0.2)
			.to('.skill-wrap #c3', {
				x: '30',
				y: '700',
				rotate: '-40',
				ease: 'none',
				duration: 7
			}, 0)
			.to('.skill-wrap #c4', {
				x: '40',
				y: '800',
				rotate: '50',
				ease: 'none',
				duration: 6
			}, 1)
			.to('.skill-wrap #c5', {
				x: '20',
				y: '600',
				rotate: '-20',
				ease: 'none',
				duration: 6
			}, 0.5)
			.to('.skill-wrap #c6', {
				x: '0',
				y: '800',
				rotate: '-10',
				ease: 'none',
				duration: 7
			}, 0)
			gsap.to(".project", {
			y: -10, // 위로 20px 이동
			duration: 1.5, // 2초 동안
			yoyo: true, // 다시 돌아오게
			repeat: -1, // 무한 반복
			ease: "power1.inOut"
		});


		//circle
		gsap.timeline({
				scrollTrigger: {
					trigger: 'footer',
					start: '0% 50%',
					end: '30% 0%',
					scrub: 1,
					// markers:true
				}
			})
			.fromTo('.circle', {
				'width': '0',
				'height': '0',
				'duration': '10',
				'ease': 'elastic',
				'top': '3%'
			}, {
				'width': '145vw',
				'height': '145vw',
				'duration': '10',
				'top': '30%'
			}, 0)

		//02. textBox
		gsap.timeline({
				scrollTrigger: {
					trigger: 'footer .email',
					start: '0% 80%',
					end: '100% 80%',
					scrub: 1,
					// markers:true
				}
			})
			.fromTo('.email', {
				'top': '50%',
				'duration': '5',
				'esae': 'elastic',
				'opacity': '0'
			}, {
				'duration': '5',
				'ease': 'none',
				'opacity': '1',
				'top': '40%'
			}, 0)

		gsap.to(".footer_c", {
			y: -20, // 위로 20px 이동
			duration: 1.5, // 2초 동안
			yoyo: true, // 다시 돌아오게
			repeat: -1, // 무한 반복
			ease: "power1.inOut"
		});

	});


  // 모바일 버전
	mm.add("(max-width: 1024px)", () => {
		gsap.timeline({
				scrollTrigger: {
					trigger: '.box',
					start: 'top top',
					end: '100% 20%',
					scrub: 2,
				}
			})
			.to('.skill-wrap #c1', {
				x: '0',
				y: '700',
				rotate: '40',
				ease: 'none',
				duration: 7
			}, 0)
			.to('.skill-wrap #c2', {
				x: '0',
				y: '500',
				rotate: '-20',
				ease: 'none',
				duration: 6
			}, 0.2)
			.to('.skill-wrap #c3', {
				x: '0',
				y: '430',
				rotate: '-40',
				ease: 'none',
				duration: 7
			}, 0)
			.to('.skill-wrap #c4', {
				x: '0',
				y: '600',
				rotate: '50',
				ease: 'none',
				duration: 6
			}, 1)
			.to('.skill-wrap #c5', {
				x: '0',
				y: '510',
				rotate: '-20',
				ease: 'none',
				duration: 6
			}, 0.5)
			.to('.skill-wrap #c6', {
				x: '0',
				y: '660',
				rotate: '-10',
				ease: 'none',
				duration: 7
			}, 0)

		//circle
		gsap.timeline({
				scrollTrigger: {
					trigger: 'footer',
					start: '0% 50%',
					end: '30% 0%',
					scrub: 1,
					// markers:true
				}
			})
			.fromTo('.circle', {
				'width': '0',
				'height': '0',
				'duration': '6',
				'ease': 'elastic',
				'top': '3%'
			}, {
				'width': '300vw',
				'height': '300vw',
				'duration': '6',
				'top': '38%'
			}, 0)

		//02. textBox
		gsap.timeline({
				scrollTrigger: {
					trigger: 'footer .email',
					start: '0% 80%',
					end: '100% 100%',
					scrub: 1,
					// markers:true
				}
			})
			.fromTo('.email', {
				'top': '50%',
				'duration': '5',
				'esae': 'elastic',
				'opacity': '0'
			}, {
				'duration': '5',
				'ease': 'none',
				'opacity': '1',
				'top': '40%'
			}, 0)

		gsap.to(".footer_c", {
			y: -20, // 위로 20px 이동
			duration: 1.5, // 2초 동안
			yoyo: true, // 다시 돌아오게
			repeat: -1, // 무한 반복
			ease: "power1.inOut"
		});

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

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
