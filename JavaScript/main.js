const mainMenu = document.querySelector('.main_menu_wrapper')
const secondaryMenu = document.querySelector('.secondary_menu_wrapper')
const returnButton = document.querySelector('.return_button')
const footer = document.querySelector('.footer_wrapper')
const fabricante = document.querySelector('.secondary_menu_wrapper #fabricante')
const modelo = document.querySelector('.secondary_menu_wrapper .grid')
/*Fabricante select*/

/*Com a adição da API da tabela FIPE essa função não manteve seu funcionamento.
Para contornar a situação foi aplicado um event listener na propria função que traz os elementos da api para dentro do html.*/

/* for (const element of fabricSelect) {
  element.addEventListener('click', function () {
    footer.classList.add('hidden')
    secondaryMenu.classList.toggle('show')
    mainMenu.classList.remove('show')
    returnButton.classList.add('show')
  })
} */
/*PAGE RETURN*/
returnButton.addEventListener('click', function () {
  footer.classList.remove('hidden')
  mainMenu.classList.toggle('show')
  secondaryMenu.classList.remove('show')
  returnButton.classList.remove('show')

  //Caso alguma marca ja tenha sido selecionada anteriormente, remove-a.
  while (fabricante.firstChild) {
    fabricante.removeChild(fabricante.lastChild);
  }

  //Caso alguma modelo ja tenha sido selecionada anteriormente, remove-a.
  while (modelo.firstChild) {
    modelo.removeChild(modelo.lastChild);
  }
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
