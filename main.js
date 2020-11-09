// (function () {
//
//     let elems = document.querySelector('.video_media').play;
//
//     console.log(elems);
//
//     // document.querySelector('.info-video').style.display = 'none';
//
//
// })();


const headerLocal = document.querySelector('#headerTop');

window.addEventListener('scroll', function (e) {
    const scrollFromTop = document.querySelector('html').scrollTop;
    if (scrollFromTop !== 0) {
        headerLocal.style.background = 'green';
    } else {

        headerLocal.style.background = 'none';
    }

    // headerLocal.style.background = scrollFromTop !== 0 ? 'red' : 'none';

    console.log('offsetFromTop', scrollFromTop);
});

//
// window.addEventListener('scroll', function (e) {
//     let scrollHeader = document.querySelector('head-header');
//     if (document.documentElement.scrollTop() || document.body.scrollTop > window.innerHeight) {
//         scrollHeader.style.backgroundColor = 'red';
//     } else {
//         scrollHeader.style.backgroundColor = 'none';
//     }
// });


// window.addEventListener('scroll', function (e) {
//     let scrollHeader = document.getElementById('headerTop');
//     if (document.documentElement.scrollTo() || document.body.scrollTop > window.innerHeight) {
//         scrollHeader.classList.add('header-colored');
//         scrollHeader.classList.remove('note-color');
//     } else {
//         scrollHeader.classList.remove('header-colored');
//         scrollHeader.classList.add('note-color');
//     }
// });


const videoPlayButton = document.querySelector('.videoPlayButton');
videoPlayButton.addEventListener('click', function () {
    document.querySelector('.info-video').style.display = 'none';
    document.querySelector('.video_media').play();
});

// document.querySelector().log('movie-video').style.display = 'block';
// document.querySelector().log('movie-video').play();


// const buttons = document.querySelectorAll('.toggleButton');
// const lines = document.querySelectorAll('.lineTopCard');
//
// for (let button of buttons) {
//     button.addEventListener('click', function () {
//         buttons.forEach(i => i.classList.remove('toggleButtonActive'));
//     this.classList.toggle('toggleButtonActive');
//     });
// };


const buttons = document.querySelectorAll('.toggleButton');
const lines = document.querySelectorAll('.lineTopCard');

function clearButtonClasses(){
    for (let button of buttons) {
        button.classList.remove('toggleButtonActive')
    }
}

function clearCardClasses(){
    for (let line of lines) {
        line.classList.remove('cardActive')
    }
}

for (let button of buttons) {
    button.addEventListener('click', function (e) {

        clearButtonClasses();
        clearCardClasses();
        this.classList.add('toggleButtonActive');
        var cardType = this.getAttribute('data-toggle');
        document.querySelector("#" + cardType + "-card").classList.add('cardActive')
    });
}

// for (let button of buttons) {
//     for (let line of lines) {
//
//         console.log('Rita')
//
//         button.addEventListener('click', function () {
//             // line.addEventListener(function () {
//
//             buttons.forEach(i => i.classList.remove('toggleButtonActive'));
//             lines.forEach(i => i.classList.remove('cardActive'));
//
//             this.classList.toggle('toggleButtonActive');
//             line.classList.add('cardActive');
//
//             // });
//         });
//     }
//     ;
// }
// ;
// for (let button of buttons) {
// //     for (let line of lines) {
// //
//         button.addEventListener('click', function () {
// //             // line.addEventListener(function () {
// //
//             buttons.forEach(i => i.classList.remove('toggleButtonActive'));
// //             lines.forEach(i => i.classList.remove('cardActive'));
// //
//             this.classList.toggle('toggleButtonActive');
// //             line.classList.add('cardActive');
// //
// //             // });
//         });
//     }
//     ;
// // }
// // ;






// document.querySelector('.price-offer-buttons').addEventListener('click', function () {
//
// })





//
// const playButtons = document.querySelectorAll('.toggle-button');
// for (let i = 0; i < playButtons.length; i++) {
//
//     playButtons[i].addEventListener('click', function (e) {
//         this.choosedPlan = e.target.getAttribute('data-target');
//         const offerBlock = document.querySelector(`.${choosedPlan}`);
//
//
//         for (let j = 0; i < playButtons.length; j++) {
//             playButtons[j].classList.remove('toggle-active');
//
//             this.classList.add('toggle-active');
//
//
//             offerBlock.classList.add('buisness-block-active')
//
//             // console.log('playButton.classList')
//         }
//     });
// }




