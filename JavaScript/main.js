const mainMenu = document.querySelector('.main_menu_wrapper')
const secondaryMenu = document.querySelector('.secondary_menu_wrapper')
const returnButton = document.querySelector('.return_button')
const fabricSelect = document.querySelectorAll('.main_menu_wrapper ul li')
const footer = document.querySelector('.footer_wrapper')

/*Fabricante select*/

for (const element of fabricSelect) {
  element.addEventListener('click', function () {
    footer.classList.add('hidden')
    secondaryMenu.classList.toggle('show')
    mainMenu.classList.remove('show')
    returnButton.classList.add('show')
  })
}
/*PAGE RETURN*/
returnButton.addEventListener('click', function () {
  footer.classList.remove('hidden')
  mainMenu.classList.toggle('show')
  secondaryMenu.classList.remove('show')
  returnButton.classList.remove('show')
})

/*Main menu - sub menus - arrow movement*/

/*botoes menu*/
const buttonCars = document.querySelector('.button_cars')
const buttonMotorcycles = document.querySelector('.button_motorcycles')
const buttonTrucks = document.querySelector('.button_trucks')

/*submenu*/
const carsList = document.querySelector('.menu_cars ul.grid')
const motorcyclesList = document.querySelector('.menu_motorcycles ul.grid')
const trucksList = document.querySelector('.menu_trucks ul.grid')

/*arrows*/
const arrowCars = document.querySelector('.menu_cars .icon')
const arrowMotorcycles = document.querySelector('.menu_motorcycles .icon')
const arrowTrucks = document.querySelector('.menu_trucks .icon')

/*cars*/
buttonCars.addEventListener('click', function () {
  carsList.classList.toggle('show')
  buttonMotorcycles.classList.remove('show')
  buttonTrucks.classList.remove('show')

  arrowCars.classList.toggle('toggle')
})

/*motorcycles*/
buttonMotorcycles.addEventListener('click', function () {
  motorcyclesList.classList.toggle('show')
  buttonCars.classList.remove('show')
  buttonTrucks.classList.remove('show')

  arrowMotorcycles.classList.toggle('toggle')
})

/*trucks*/
buttonTrucks.addEventListener('click', function () {
  trucksList.classList.toggle('show')
  buttonCars.classList.remove('show')
  buttonMotorcycles.classList.remove('show')

  arrowTrucks.classList.toggle('toggle')
})
