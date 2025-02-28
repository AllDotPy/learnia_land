// const wrapper = document.querySelector(".wrapper");
const scroll_xs = gsap.utils.toArray(".review");
// const texts = gsap.utils.toArray(".anim");
// const mask = document.querySelector(".mask");
const splitTypes = document.querySelectorAll('.text-anim')
const feactures = document.querySelectorAll('.feacture')

gsap.registerPlugin(ScrollTrigger,MotionPathPlugin)

// VERTICAL SCROLL ANIMATION ON FEACTURE SESCTION
feactures.forEach((feature) => {
    const sc_imgs = feature.querySelectorAll('.scrolling-image');

    gsap.to(sc_imgs, {
        // yPercent: -100 * (sc_imgs.length - 1) - 25, // Défilement vers le haut
        y: () => `-${(400 + 96) * (sc_imgs.length - 1)}px`, // sc_imgs[0].height
        ease: "none",
        scrollTrigger: {
            trigger: feature,
            start: "top top",
            pin: true,
            end: "+=500",
            scrub: true,
            snap: 1 / (sc_imgs.length - 1),
            markers: false
        }
    });

    // TIMELINE ANIMATION
    // const timeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: feature,
    //         start: "top top",
    //         pin: true,
    //         end: "+=300",
    //         scrub: true,
    //         markers: false,
    //         onUpdate: self => {
    //             if (self.progress === 0 || self.progress === 1) {
    //                 enableScroll();
    //             }
    //         }
    //     }
    // });

    // sc_imgs.forEach((sc_img, index) => {
    //     timeline
    //         .to(sc_img, {
    //             yPercent: -100 * (index),
    //             // ease: "power1.inOut",
    //             opacity: 1,
    //             duration: .5,
    //             scrub:false,
    //             // onStart: () => {
    //             //     // if (index !== 0) disableScroll();
    //             // },
    //             onComplete: () => {
    //                 // setTimeout(enableScroll, 2000);
    //                 enableScroll()
    //             }
    //         }, index * 1) // Applique un offset pour chaque image
    //         .to({}, {
    //             duration: 2,
    //             // onStart: () => {
    //             //     if (index !== 0) disableScroll();
    //             // },
    //             // onComplete: () => {
    //             //     setTimeout(enableScroll, 2000);
    //             // }
    //         }) // PAUSE DE 2s
    //         .to(sc_img, {
    //             ease: "none",
    //             opacity: 1,
    //             duration: 1
    //         }, (index + 1) * 1 - 0.5); // Applique un offset pour chaque image
    // });
});

// HORIZONTAL SCROLL ANIMATION ON SECTIONS
let scrollTween = gsap.to(scroll_xs, {
    // xPercent: -100 * (scroll_xs.length - 1) + 50,
    x: () => `-${(scroll_xs[0].offsetWidth + 0) * (scroll_xs.length - 2)}px`,
    ease: "none",
    scrollTrigger: {
        trigger: "#reviews",
        pin: true,
        scrub: true,
        start:'top 80',
        end: "+=3000",
        snap: 1 / (scroll_xs.length - 1),
        markers: false,
    }
});


// console.log(scroll_xs.length)

//Progress bar animation

// gsap.to(mask, {
//     width: "100%",
//     scrollTrigger: {
//         trigger: ".feactures",
//         start: "top left",
//         scrub: 1
//     }
// });

// whizz around the sections
// scroll_xs.forEach((section) => {
//     // grab the scoped text
//     let text = section.querySelectorAll(".anim");

//     // bump out if there's no items to animate
//     if (text.length === 0) return

//     // do a little stagger
//     gsap.from(text, {
//         y: 130,
//         opacity: 0,
//         duration: 4,
//         ease: "elastic",
//         stagger: 0.1,
//         scrollTrigger: {
//             trigger: section,
//             containerAnimation: scrollTween,
//             start: "left center",
//             markers: true
//         }
//     });
// });

// OPACITY ANIMATIONON SCROLL
gsap.utils.toArray('.reveal').forEach((element) => {
    // console.log(element)
    gsap.from(element, {
        opacity: 0,         // Commence avec une opacité de 0
        duration: 1,        // Durée de l'animation
        scrollTrigger: {
            trigger: element, // L'élément qui déclenche l'animation
            start: 'top 80%', // Débute l'animation quand le haut de l'élément atteint 80% du viewport
            end: 'top 30%',   // Fin de l'animation
            scrub: true       // Synchronise l'opacité avec le défilement
        }
    });
});

// DRAW PATH
// gsap.fromTo("#path",
//     { drawSVG: "0%" }, // Commence le chemin invisible
//     {
//       drawSVG: "100%", // Dessine le chemin
//       duration: 2,
//       ease: "power1.inOut"
//     }
// );

// function beeAnimation(){
//     gsap.set("#motionSVG", { scale: 0.85, autoAlpha: 1 });
//     gsap.set("#bee", {transformOrigin: "50% 50%", scaleX: -1});
//     let getProp = gsap.getProperty("#motionSVG"),
//         flippedX = false,
//         flippedY = false;

//         gsap.to("#motionSVG", {
//         scrollTrigger: {
//             trigger: "#motionPath",
//             start: "top top",
//             end: 'bottom center',
//             scrub: 1,
//             markers: false,
//             onUpdate: self => {
//             let rotation = getProp("rotation"),
//                 flipY = Math.abs(rotation) > 90,
//                 flipX = self.direction === 1;
//             if (flipY !== flippedY || flipX !== flippedX) {
//                 gsap.to("#bee", {scaleY: flipY ? -1 : 1, scaleX: flipX ? -1 : 1, duration: 0.25});
//                 flippedY = flipY;
//                 flippedX = flipX;
//             }
//             }
//         },
//         // duration: 10,
//         ease: pathEase("#motionPath", {smooth: true}), // <-- MAGIC!
//         immediateRender: true,
//         motionPath: {
//             path: "#motionPath",
//             align: "#motionPath",
//             alignOrigin: [0.5, 0.5],
//             autoRotate: true
//         }
//     });

// /*
// Helper function that returns an ease that bends time to ensure the target moves on the y axis in a relatively steady fashion in relation to the viewport (assuming the progress of the tween is linked linearly to the scroll position). Requires MotionPathPlugin of course.
// You can optionally pass in a config option with any of these properties:
//   - smooth: if true, the target can drift slightly in order to smooth out the movement. This is especially useful if the path curves backwards at times. It prevents super-fast motions at that point. You can define it as a number (defaults to 7) indicating how much to smooth it.
//   - precision: number (defaults to 1) controlling the sampling size along the path. The higher the precision, the more accurate but the more processing.
//   - axis: "y" or "x" ("y" by default)
// */
// function pathEase(path, config={}) {
//   let axis = config.axis || "y",
//       precision = config.precision || 1,
//       rawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0]), Math.round(precision * 12)),
// 			useX = axis === "x",
// 			start = rawPath[0][useX ? 0 : 1],
// 			end = rawPath[rawPath.length - 1][rawPath[rawPath.length-1].length - (useX ? 2 : 1)],
// 			range = end - start,
// 			l = Math.round(precision * 200),
// 			inc = 1 / l,
// 			positions = [0],
// 			a = [0],
// 			minIndex = 0,
//       smooth = [0],
//       minChange = (1 / l) * 0.6,
//       smoothRange = config.smooth === true ? 7 : Math.round(config.smooth) || 0,
//       fullSmoothRange = smoothRange * 2,
// 			getClosest = p => {
// 				while (positions[minIndex] <= p && minIndex++ < l) { }
// 				a.push(a.length && ((p - positions[minIndex-1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc));
//         smoothRange && a.length > smoothRange && (a[a.length - 1] - a[a.length - 2] < minChange) && smooth.push(a.length - smoothRange);
// 			},
// 			i = 1;
//   for (; i < l; i++) {
//     positions[i] = (MotionPathPlugin.getPositionOnPath(rawPath, i / l)[axis] - start) / range;
//   }
//   positions[l] = 1;
//   for (i = 0; i < l; i++) {
//     getClosest(i / l);
//   }
//   a.push(1); // must end at 1.
//   if (smoothRange) { // smooth at the necessary indexes where a small difference was sensed. Make it a linear change over the course of the fullSmoothRange
//     smooth.push(l-fullSmoothRange+1);
//     smooth.forEach(i => {
//       let start = a[i],
//           j = Math.min(i + fullSmoothRange, l),
//           inc = (a[j] - start) / (j - i),
//           c = 1;
//       i++;
//       for (; i < j; i++) {
//         a[i] = start + inc * c++;
//       }
//     });
//   }
//   l = a.length - 1;
//   return p => {
//     let i = p * l,
//         s = a[i | 0];
//     return i ? s + (a[Math.ceil(i)] - s) * (i % 1) : 0;
//   }
// }
// }
// beeAnimation()

// CAR ANIMATION ON SCROLL
// gsap.to(".car", {
//     scrollTrigger: {
//       trigger: "#body",
//       start: "top top",
//       end: "bottom bottom",
//       scrub: 1 // Synchronisé avec le défilement
//     },
//     motionPath: {
//       path: "#path", // Utilise le chemin défini
//       align: "#path", // Aligne l'objet sur le chemin
//       alignOrigin: [0.5, 0.5], // Centre de la voiture aligné au chemin
//       autoRotate: true // Tourne la voiture dans la direction du chemin
//     },
//     duration: 3 // Durée totale de l'animation (optionnelle, ici dépend du défilement)
//   });

// TEXT ANIMATION
splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars,words' })

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
        },
        opacity: .1,
        stagger: .1
    })
})


const lenis = new Lenis()
lenis.on('scroll', (e) => {
    // console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Fonction pour bloquer le défilement
function disableScroll() {
    // document.body.style.overflow = 'hidden';
    lenis.stop()
}

// Fonction pour débloquer le défilement
function enableScroll() {
    // document.body.style.overflow = '';
    lenis.start()
}

// HAMBURGER MENU TOGGLER
function toggleMenu() {
    menubtn = document.getElementById('menu-btn');
    menu = document.getElementById('menu');
    menubtn.addEventListener('click', () => {
        document.body.classList.toggle('open');
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex')
    })
}

toggleMenu()
