// Função para animar a rolagem suave
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Função de aceleração para suavizar a rolagem
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Função para animar elementos ao entrar na tela
function animateElements() {
    var offerItems = document.getElementsByClassName('offer-item');
    var contactIcons = document.getElementsByClassName('contact-icons');
    var contacteBtn = document.getElementsByClassName('contacte-btn');

    for (var i = 0; i < offerItems.length; i++) {
        if (isElementInViewport(offerItems[i])) {
            offerItems[i].classList.add('animate');
        }
    }

    for (var j = 0; j < contactIcons.length; j++) {
        if (isElementInViewport(contactIcons[j])) {
            contactIcons[j].classList.add('animate');
        }
    }
    
    for (var k = 0; k < contacteBtn.length; k++) {
        if (isElementInViewport(contacteBtn[k])) {
            contacteBtn[k].classList.add('animate');
        }
    }
}

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', animateElements);
window.addEventListener('load', animateElements);

// Adicione um evento de clique suave para cada item de menu
var menuItems = document.querySelectorAll('.header-menu-item');
menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
        event.preventDefault();
        var target = event.target.getAttribute('href');
        smoothScroll(target, 1000);
    });
});
