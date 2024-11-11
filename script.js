var toggle = document.getElementById('toggle');
var main = document.querySelector('main');

toggle.onclick = function() {
    main.classList.toggle('collaps');
}