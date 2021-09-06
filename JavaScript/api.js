/*cars*/

fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
  .then(res =>res.json())
  .then(jsonResponse =>{
    /* console.log(jsonResponse) */
    
    const dataCars = jsonResponse.map(modelo =>{  
        
        
        return `<li>${modelo.nome}</li>` // modelo.nome modelo.codigo

      })
      
      const carModel = dataCars.join(" ")
      document.querySelector("#carsList").insertAdjacentHTML("afterbegin", carModel)
    
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


 