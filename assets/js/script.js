let formInputs = document.querySelectorAll('form input');
let menuOpener = document.querySelector('.menu-opener');

menuOpener.addEventListener('click', showMenuMobile);

formInputs.forEach((input) => {
    input.addEventListener('focus', changeStyleFocus);
    input.addEventListener('blur', changeStyleBlur);
});

function changeStyleFocus(event) {
    let element = event.target.getAttribute('name');
    let formLabel = document.querySelector(`form label[for=${element}]`);
    formLabel.style.marginBottom = '0px';
    formLabel.style.fontSize = '10px';
    formLabel.style.color = '#117CB4';
    event.target.style.borderBottom = '2px solid #117CB4';
}

function changeStyleBlur(event) {
    let element = event.target.getAttribute('name');
    let formLabel = document.querySelector(`form label[for=${element}]`);
    if (event.target.value === "") {
        formLabel.style.marginBottom = '-7px';
        formLabel.style.fontSize = '14px';
        formLabel.style.color = '#aaa';
        event.target.style.borderBottom = '2px solid #aaa';
    } else {
        formLabel.style.color = '#aaa';
        event.target.style.borderBottom = '2px solid #aaa';
    }
    
}

function showMenuMobile() {
    let navDisplay = document.querySelector('.menu nav');
    console.log(navDisplay);
    console.log(window.clientWidth);
    if (navDisplay.style.display !== 'block') {
        navDisplay.style.display = 'block';
    } else {
        navDisplay.style.display = 'none';
    }
    
};