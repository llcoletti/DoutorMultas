/*cars*/

fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
  .then(res =>res.json())
  .then(jsonResponse =>{       
    
    //retorna somente o nome dos veículos 
    const dataCars = jsonResponse.map(modelo =>{                 
      return `<li>${modelo.nome}</li>` // modelo.nome modelo.codi go
    })    
    
      console.log(dataCars)
    //remove as "," do array e insere os elementos no HTML
      const carModel = dataCars.join(" ") //Car model -> String
      document.querySelector("#carsList").insertAdjacentHTML("afterbegin", carModel)    
      //console.log(carModel) retorno string: <li>1 Acura</li> <li>2 Agrale</li>    
      
      
      const fabricSelect = document.querySelectorAll('#menu .menu_cars .grid li')     
      
      //Define event listener para os elementos adicionados ao HTML
      for (const element of fabricSelect){       
        
        element.addEventListener('click', function() {
          //altera para o menu secundário
          footer.classList.add('hidden')
          secondaryMenu.classList.toggle('show')
          mainMenu.classList.remove('show')
          returnButton.classList.add('show')
          
          
          //atribui o elemento clicado ao fabricante.          
            //regEx remove elementos html concatenado com a tag desejada
           document.querySelector("#fabricante").insertAdjacentHTML("afterbegin",`<h2>${element.outerHTML.replace(/<(?:.|\n)*?>/gm, '')}</h2>`)
        })
      }
  })

  
/*motorcycles*/
fetch('https://parallelum.com.br/fipe/api/v1/motos/marcas')
  .then(res =>res.json())
  .then(jsonResponse =>{
  
  
  const dataMotorcyles = jsonResponse.map(modelo =>{  
      
      
      return `<li>${modelo.nome}</li>` // modelo.nome modelo.codigo

  })
    
    const motorcycleModel = dataMotorcyles.join(" ")
    document.querySelector("#motorcyclesList").insertAdjacentHTML("afterbegin", motorcycleModel)
  
})


/*trucks*/
fetch('https://parallelum.com.br/fipe/api/v1/caminhoes/marcas')
  .then(res =>res.json())
  .then(jsonResponse =>{    
    
    const dataTrucks = jsonResponse.map(modelo =>{          
        
      return `<li>${modelo.nome}</li>` // modelo.nome modelo.codigo

      })
    
    const truckModel = dataTrucks.join(" ")
    document.querySelector("#trucksList").insertAdjacentHTML("afterbegin", truckModel)
    
  })


 