// API CREDENCIALES

const apiKey = '43e7e29a-4722-408e-8c05-7dacde0f339f'; 

  // BUCLE DE BUSQUEDA
  const fecIP = ip => {
     
     return fetch ('https://apiip.net/api/check?ip='+ ip +'&accessKey='+ apiKey) 
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