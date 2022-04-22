let menuBtn = document.querySelector('.fa-bars');
let menu = document.querySelector('.navbar ul');
let lis = document.querySelectorAll('.links li a');
let sec = document.querySelectorAll('section');
let logout = document.querySelector('.logout');

let secBasic = document.getElementById('basic');
let examiner = document.getElementById('examiner');
let scedule = document.getElementById('scedule');
let fees = document.getElementById('fees');
let pass = document.getElementById('pass');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});

window.onscroll = () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('fa-times');
}


lis.forEach((e) => {
    e.addEventListener('click', () => {
        lis.forEach((li) => {
            li.classList.remove('active');
            e.classList.add('active');
        });
        sec.forEach((sec) => {
            sec.classList.remove('active');
        });
        if (e.dataset.sec === 'basic') {
            secBasic.classList.add('active');
        } else if (e.dataset.sec === 'examiner') {
            examiner.classList.add('active');
        } else if (e.dataset.sec === 'scedule') {
            scedule.classList.add('active');
        } else if (e.dataset.sec === 'fees') {
            fees.classList.add('active');
        } else if (e.dataset.sec === 'pass') {
            pass.classList.add('active');
        }
        menu.classList.remove('active');
        menuBtn.classList.remove('fa-times');
    });
});


logout.addEventListener('click', () => {
    window.location.href = 'index.html';
});