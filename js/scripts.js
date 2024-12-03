$(document).ready(function() {

// Progress bar
let containerA = document.getElementById("circleA");

let circleA = new ProgressBar.Circle(containerA, {
    
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#AAA' },
    to: { color: '#65DAF9'},

    step: function(state, circle) {

        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 100);

        circle.setText(value);
    }


});

let containerB = document.getElementById("circleB");

let circleB = new ProgressBar.Circle(containerB, {
    
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 1600,
    from: { color: '#AAA' },
    to: { color: '#65DAF9'},

    step: function(state, circle) {

        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 554);

        circle.setText(value);
    }


});

let containerC = document.getElementById("circleC");

let circleC = new ProgressBar.Circle(containerC, {
    
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 2000,
    from: { color: '#AAA' },
    to: { color: '#65DAF9'},

    step: function(state, circle) {

        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 56);

        circle.setText(value);
    }


});

let containerD = document.getElementById("circleD");

let circleD = new ProgressBar.Circle(containerD, {
    
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 2200,
    from: { color: '#AAA' },
    to: { color: '#65DAF9'},

    step: function(state, circle) {

        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 222);

        circle.setText(value);
    }


});

// iniciando o loader quando o usuáriio chega no elemento
let dataAreaOffset = $('#data-area').offset();
let stop = 0;

$(window).scroll(function(e) {

    let scroll = $(window).scrollTop();

    if(scroll > (dataAreaOffset.top - 500) && stop ==0) {
        
        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);

        stop = 1;

    }


});

//Parallax
setTimeout(function() {

    $('#data-area').parallax({imageSrc: 'img/fongames_loja.jpg'})
    $('#apply-area').parallax({imageSrc: 'img/pattern.jpg'})

}, 250);

// Filtro do portfólio

$('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'games-btn') {
        eachBoxes('games', boxes)
    } else if(type == 'console-btn') {
        eachBoxes('console', boxes);
    } else if(type == 'repair-btn') {
        eachBoxes('repair', boxes);
    } else {
        eachBoxes('all', boxes);
    }

});

function eachBoxes(type, boxes) {

    if(type == 'all') {
        $(boxes).fadeIn();
    } else {
        $(boxes).each(function() {
            if(!$(this).hasClass(type)) {
                $(this).fadeOut('slow');
            } else {
                $(this).fadeIn();
            }
        });
    }
}




});