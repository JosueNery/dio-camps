
const modeBtn = document.getElementById('mode-selector');
const title = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode';

function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    modeBtn.classList.toggle(darkModeClass);
    title.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (body.classList.contains(darkModeClass)) {
        modeBtn.innerHTML = lightMode;
        title.innerHTML = darkMode + ' ON';
        return;
    }
    modeBtn.innerHTML = darkMode;
    title.innerHTML = lightMode + ' ON';
}
modeBtn.addEventListener('click', changeMode);
