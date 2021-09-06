fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
  .then(res =>res.json())
  .then(jsonResponse =>{
    /* console.log(jsonResponse) */
    
    const data = jsonResponse.map(modelo =>{  
        
        
        return `<li>${modelo.nome}</li>` // modelo.nome modelo.codigo

      })
      
      const carModel = data.join(" ")
      document.querySelector("#carsList").insertAdjacentHTML("afterbegin", carModel)
    
  })


 