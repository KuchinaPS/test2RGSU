
const button = document.querySelector(`.main-header__burger--closed`)
const menu = document.querySelector(`.main-header__list`)

button.addEventListener(`click`, function () {
    if (button.classList.contains(`main-header__burger--closed`)) {
        button.classList.remove(`main-header__burger--closed`)
        button.classList.add(`main-header__burger--opened`)
        menu.classList.remove(`main-header__list--closed`)
        menu.classList.add(`main-header__list--opened`)
    } else {
        button.classList.remove(`main-header__burger--opened`)
        button.classList.add(`main-header__burger--closed`)
        menu.classList.remove(`main-header__list--opened`)
        menu.classList.add(`main-header__list--closed`)
    }
})
