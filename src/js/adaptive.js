const headerSearch = document.querySelector('.header__search');
const headerUser = document.querySelector('.header__user');
const headerContent = document.querySelector('.header__content');

const displayWidth = () => window.innerWidth

const adaptiveHeader = () => {

    headerContent.removeChild(headerSearch);
    headerContent.parentNode.appendChild(headerSearch);

}

if (displayWidth() < 800) {
    adaptiveHeader();
}