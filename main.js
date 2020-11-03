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

window.addEventListener('scroll', function () {
    const scrollFromTop = document.querySelector('html').scrollTo();
    // if (scrollFromTop !== 0) {
    //     headerLocal.style.backgroundColor = 'red';
    // }
    // headerLocal.style.backgroundColor = 'none';


    headerLocal.style.backgroundColor = scrollFromTop !== 0 ? 'red' : 'none';

    console.log('offsetFromTop', scrollFromTop);
});


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

for (let button of buttons) {
    for (let line of lines) {

        button.addEventListener('click', function () {
            // line.addEventListener(function () {

            buttons.forEach(i => i.classList.remove('toggleButtonActive'));
            lines.forEach(i => i.classList.remove('cardActive'));

            this.classList.toggle('toggleButtonActive');
            line.classList.add('cardActive');

            // });
        });
    }
    ;
}
;


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