let elemento=document.getElementById("principal"); //capturamos el div del DOM

//usamos el elemento load y renderizamos el formulario
window.addEventListener('load',uno());
function uno(){
    elemento.innerHTML=`
    <form action="#">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Nunca compartiremos su email con nadie.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="button" id="btn" class="btn btn-primary" onclick="entrar()">Ingresar</button>
</form>`
}
//let btn=document.getElementById("btn"); //capturamos el boton
let usuarios=["Luis","Fede",40];
let usuario={
  name:"armado",
  email:'armado@pilaradiario.com',
  pass:'123456',
  validar:(e,p)=>{
    if ((e===usuario.email) && (p===usuario.pass)){
      return true; 
    }else{
      return false;
    }
  }
};
function entrar(){
    // ev.preventDefault();
    let email=document.getElementById("exampleInputEmail1").value;
    let pass=document.getElementById("exampleInputPassword1").value;
    
    let entra=usuario.validar(email,pass);
    if(entra){
      elemento.innerHTML=`
      <h1>Administración</h1>
      <p>Bienvenid@ ${usuario.name}</p>
      `;
    }
   

}
