/*
const bx = document.querySelector('.bx');
const menu_mobile = document.querySelector('.menu-mobile');
const link_mobile = document.querySelectorAll('.link-menu-mobile');

console.log(link_mobile);

link_mobile.forEach((item) => {
    item.addEventListener('click', () => {
        menu_mobile.classList.add('showmenu');
        console.log(menu_mobile);
        
    })
})

bx.addEventListener('click', () =>{
    bx.classList.toggle('activebx');

    menu_mobile.classList.toggle('showmenu');
    console.log(menu_mobile);
})
*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.querySelector('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) nav.classList.add('active-header');
    else nav.classList.remove('active-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== ACCORDION ====================*/
document.querySelectorAll('.accordion-button').forEach(button => {

    button.addEventListener('click', () => {
        //button.classList.remove('accordion-button-active');

        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion-button-active');

        if (button.classList.contains('accordion-button-active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });

});


// Wrap every letter in a span

var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


/*--=========== GSAP SCROLLTRIGGER ============- */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    /*--=========== TIMELINE LOADING E HERO ============- */
    var tl1 = gsap.timeline();

    tl1
        .to('.screen-loading', {
            duration: 2,
            opacity: 0,
            delay: 5,
            //filter: 'blur(10px)',
            //y: "-10%",
            ease: "power4.out",
        })
        .from(".box-hero span", {
            duration: 2,
            opacity: 0,
            y: 300,
            stagger: {
                each: 0.1
            },
            ease: "back.out(1.7)",
        }, '-=1.5')
        .from(".box-hero div", {
            duration: 3,
            opacity: 0,
            //y: 200,
            stagger: {
                each: 0.1
            },
            ease: "back.out(1.7)",
        }, '-=1.5')


    /*--================================- */
    /*--=========== LOADING AO SCROLL ============- */
    /*--================================- */
    gsap.from(".section-01 div", {
        y: 150,
        opacity: 0,
        ease: "power4.out",
        stagger: {
            each: 0.2
        },
        duration: 3,
        scrollTrigger: {
            trigger: '.section-01',
            start: 'top 40%',
            end: 'top 10%',
            //markers: true,
        }
    });

    gsap.from(".section-02 div", {
        y: 150,
        opacity: 0,
        ease: "power4.out",
        stagger: {
            each: 0.2
        },
        duration: 3,
        scrollTrigger: {
            trigger: '.section-02',
            start: 'top 40%',
            end: 'top 10%',
            //markers: true,
        }
    });

    gsap.from(".section-03 div", {
        y: 150,
        opacity: 0,
        ease: "power4.out",
        stagger: {
            each: 0.2
        },
        duration: 3,
        scrollTrigger: {
            trigger: '.section-03',
            start: 'top 40%',
            end: 'top 10%',
            //markers: true,
        }
    });

    gsap.from(".section-04 div", {
        y: 150,
        opacity: 0,
        ease: "power4.out",
        stagger: {
            each: 0.2
        },
        duration: 3,
        scrollTrigger: {
            trigger: '.section-04',
            start: 'top 40%',
            end: 'top 10%',
            //markers: true,
        }
    });

    gsap.from(".section-05 div", {
        y: 150,
        opacity: 0,
        ease: "power4.out",
        stagger: {
            each: 0.2
        },
        duration: 3,
        scrollTrigger: {
            trigger: '.section-05',
            start: 'top 40%',
            end: 'top 10%',
            //markers: true,
        }
    });



});

/*
ScrollTrigger.addEventListener("scrollStart", () => {
  ScrollTrigger.refresh();
});
*/