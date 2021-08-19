const backImage = document.querySelector('header .main-backImage');
const logo = document.querySelector('.logo');
const logo_ul = document.querySelector('.logo ul');

window.onload = function(){
    setTimeout(() => {
        backImage.classList.add('event');
    }, 100)
}
const scroller = document.querySelector('.scroll');
const app_down = document.querySelector('.main_section_1 .inner .app_down_2');

setInterval(() => {
    for(var i = 0; i< 3; i++){
        scroller.style.top = '680px';
    }
}, 500);
// 스크롤 이벤트
document.addEventListener('scroll',function(){
    const section_1_event_img = document.querySelector('.main_section_1 .inner .rider_img1');
    var currentScrollValue = document.documentElement.scrollTop;

    
    console.log('currentScrollValue : ' + currentScrollValue);
    if(currentScrollValue < 4000){
        setTimeout(() => {
            logo.classList.remove('event');
            logo_ul.classList.remove('event');
        }, 300);
    }
    if(currentScrollValue < 760){
        setTimeout(() => {
            app_down.classList.remove('event');
        }, 300);
    }
    if(currentScrollValue > 760){
        setTimeout(() => {
            section_1_event_img.classList.add('event');
            app_down.classList.add('event');
        }, 500);
    }
    if(currentScrollValue > 1520){
        const section_2_event_img = document.querySelector('.main_section_1 .inner .rider_img2');
        setTimeout(() => {
            section_2_event_img.classList.add('event'); 
        }, 300);
    }
    if(currentScrollValue > 2290){
        const section_3_event_img = document.querySelector('.main_section_1 .inner .rider_img3');
        setTimeout(() => {
            section_3_event_img.classList.add('event'); 
        }, 500);
    }
    if(currentScrollValue > 3060){
        const section_4_event_img = document.querySelector('.main_section_1 .inner .rider_img4');
        setTimeout(() => {
            section_4_event_img.classList.add('event'); 
        }, 500);
    }
    if(currentScrollValue > 3830){
        const section_5_event_img = document.querySelector('.main_section_1 .inner .rider_img5');
        setTimeout(() => {
            section_5_event_img.classList.add('event'); 
        }, 500);
    }
    if(currentScrollValue > 4000){
        setTimeout(() => {
            logo.classList.add('event');
            logo_ul.classList.add('event');
        }, 500);
    }
})
// 내려가는 범위 조절하기, 스크롤 up/down 인식 기능 구현하기..
scroller.addEventListener('click',function(){
    window.scrollBy(0, 768);    
})