// API CREDENCIALES

const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '7e7fd3eb14msheb47175d051340ap12fe28jsnb8272867982e',
      'x-rapidapi-host': 'ipstack1.p.rapidapi.com'
  
    }
  };
  
  // BUCLE DE BUSQUEDA
  const fecIP = ip => {
     
     return fetch (`https://ipstack1.p.rapidapi.com/api.ipstack.com ${ip}`,options) 
     .then(res => res.json()); 
  }
  
  const formulario = document.querySelector('#formulario'); 
  const buscarip = document.querySelector('#buscarIP'); 
  const btn = document.querySelector('#submit'); 
  const results = document.querySelector('#results');


  //EVALUACION DE BUSQUEDA 
  
  formulario.addEventListener('submit', async(evento)=> {
   
   evento.preventDefault(); 
   const {value} = buscarip;
   if(!value) return; 
  
  
   btn.setAttribute('disabled', '');
   btn.setAttribute('aria-busy', 'true');
  
   const ipaInf = await fecIP(value); 
  
   if(ipaInf){
    results.innerHTML = JSON.stringify(ipaInf, null , 2); 
   }
  
   btn.removeAttribute('disabled');
   btn.removeAttribute('aria-busy');
  
  
  })