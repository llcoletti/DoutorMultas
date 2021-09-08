

//CARROS//
fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
  .then(res =>res.json())
  .then(jsonResponse =>{
    const dataCars = jsonResponse.map(fabricante =>{              
      return `<li>${fabricante.nome} <p>${fabricante.codigo}</p></li> `
    })    
    //remove as "," do array e insere os elementos no HTML    
    const carModel = dataCars.join(" ")
    document.querySelector("#carsList").insertAdjacentHTML("afterbegin", carModel) 
    const fabricSelect = document.querySelectorAll('#menu .menu_cars .grid li')     
      
      //Define event listener para os elementos adicionados ao HTML
    for (const element of fabricSelect){
      //altera para o menu secundário
      element.addEventListener('click', function() {
        footer.classList.add('hidden')
        secondaryMenu.classList.toggle('show')
        mainMenu.classList.remove('show')
        returnButton.classList.add('show')                        
        //atribui o elemento clicado ao fabricante.          
        //regEx remove elementos html concatenado com a tag desejada       
        document.querySelector("#fabricante").insertAdjacentHTML("afterbegin",`<h2>${element.outerHTML.replace(/<(?:.|\n)*?>/gm, '').replace(/\d+/g, '')}</h2>`)
        //atribui código do vehículo a uma constante
        const carCod = element.outerHTML.replace(/\D/g, "")
        //Submenu
        fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${carCod}/modelos`)
          .then(res =>res.json())
          .then(jsonResponse =>{       
            console.log(jsonResponse.modelos)
            const modeloCarro = jsonResponse.modelos.map(modelo =>{
              return `<li>${modelo.nome}</li>`
            })
            //Coloca os modelos em ordem decrescente
            ordenaModelo = modeloCarro.sort((a, b)=>{
              if(a>b)
              return -1;
              if(a<b){
                return 1;                  
              }
              return 0;
            })
            document.querySelector("#modelList").insertAdjacentHTML("afterbegin", ordenaModelo.join(" "))
          })
        }
      )
    }
  }
)
  
//MOTOS//
fetch('https://parallelum.com.br/fipe/api/v1/motos/marcas')
  .then(res =>res.json())
  .then(jsonResponse =>{
    const dataMotorcycles = jsonResponse.map(fabricante =>{              
      return `<li>${fabricante.nome} <p>${fabricante.codigo}</p></li> `
    })    
    //remove as "," do array e insere os elementos no HTML    
    const MotorcyclesModel = dataMotorcycles.join(" ")
    
    document.querySelector("#motorcyclesList").insertAdjacentHTML("afterbegin", MotorcyclesModel) 
    console.log(MotorcyclesModel)
    const fabricSelect = document.querySelectorAll('#menu .menu_motorcycles .grid li')     
      
      //Define event listener para os elementos adicionados ao HTML
    for (const element of fabricSelect){
      //altera para o menu secundário
      element.addEventListener('click', function() {
        footer.classList.add('hidden')
        secondaryMenu.classList.toggle('show')
        mainMenu.classList.remove('show')
        returnButton.classList.add('show')                        
        //atribui o elemento clicado ao fabricante.          
        //regEx remove elementos html concatenado com a tag desejada       
        document.querySelector("#fabricante").insertAdjacentHTML("afterbegin",`<h2>${element.outerHTML.replace(/<(?:.|\n)*?>/gm, '').replace(/\d+/g, '')}</h2>`)
        //atribui código do vehículo a uma constante
        const motorcycleCod = element.outerHTML.replace(/\D/g, "")
        //Submenu
        fetch(`https://parallelum.com.br/fipe/api/v1/motos/marcas/${motorcycleCod}/modelos`)
          .then(res =>res.json())
          .then(jsonResponse =>{       
            console.log(jsonResponse.modelos)
            const modeloMotorcycle = jsonResponse.modelos.map(modelo =>{
              return `<li>${modelo.nome}</li>`
            })
            //Coloca os modelos em ordem decrescente
            ordenaModelo = modeloMotorcycle.sort((a, b)=>{
              if(a>b)
              return -1;
              if(a<b){
                return 1;                  
              }
              return 0;
            })
            document.querySelector("#modelList").insertAdjacentHTML("afterbegin", ordenaModelo.join(" "))
          })
        }
      )
    }
  }
)


//CAMINHOES//
fetch('https://parallelum.com.br/fipe/api/v1/caminhoes/marcas')
  .then(res =>res.json())
  .then(jsonResponse =>{
    const dataTrucks = jsonResponse.map(fabricante =>{              
      return `<li>${fabricante.nome} <p>${fabricante.codigo}</p></li> `
    })    
    //remove as "," do array e insere os elementos no HTML    
    const trucksModel = dataTrucks.join(" ")
    
    document.querySelector("#trucksList").insertAdjacentHTML("afterbegin", trucksModel) 
    console.log(trucksModel)
    const fabricSelect = document.querySelectorAll('#menu .menu_trucks .grid li')     
      
      //Define event listener para os elementos adicionados ao HTML
    for (const element of fabricSelect){
      //altera para o menu secundário
      element.addEventListener('click', function() {
        footer.classList.add('hidden')
        secondaryMenu.classList.toggle('show')
        mainMenu.classList.remove('show')
        returnButton.classList.add('show')                        
        //atribui o elemento clicado ao fabricante.          
        //regEx remove elementos html concatenado com a tag desejada       
        document.querySelector("#fabricante").insertAdjacentHTML("afterbegin",`<h2>${element.outerHTML.replace(/<(?:.|\n)*?>/gm, '').replace(/\d+/g, '')}</h2>`)
        //atribui código do vehículo a uma constante
        const motorcycleCod = element.outerHTML.replace(/\D/g, "")
        //Submenu
        fetch(`https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${motorcycleCod}/modelos`)
          .then(res =>res.json())
          .then(jsonResponse =>{       
            console.log(jsonResponse.modelos)
            const modeloTrucks = jsonResponse.modelos.map(modelo =>{
              return `<li>${modelo.nome}</li>`
            })
            //Coloca os modelos em ordem decrescente
            ordenaModelo = modeloTrucks.sort((a, b)=>{
              if(a>b)
              return -1;
              if(a<b){
                return 1;                  
              }
              return 0;
            })
            document.querySelector("#modelList").insertAdjacentHTML("afterbegin", ordenaModelo.join(" "))
          })
        }
      )
    }
  }
)
 