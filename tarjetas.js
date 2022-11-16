const API_URL = "http://localhost:3000/results";
const LOCALIDAD_URL = "http://localhost:3000/results/?localidad=";
const ESTADO_URL="http://localhost:3000/results/?estado="
const TIPO_URL="http://localhost:3000/results/?tipo="


const main = document.getElementById("main");
const search = document.getElementById("search");


//Consulta de api con la url de la variable

const getCharacter = (character) => {
  const peticion = fetch(character);
  peticion
    .then((resp) => resp.json())
    .then((data) => showCharacter(data))
    .catch((error) => {
      console.log(error);
      console.log("Busqueda no encontrada");
    });
};

getCharacter(API_URL);

const showCharacter = (characters) => {
  if (characters.length == 0) {
    
    console.log("Busqueda no encontrada");
  } else {
    main.innerHTML = ``;
    characters.forEach((element) => {
      const {
        id,img1,tipo,estado,rayo,precio,cora,flechas,img2,localidad,
        descripcion,img3,name,publicado,area,habitaciones,} = element;
      const divCharacter = document.createElement("div");
      divCharacter.innerHTML = `
      <div class="tarjetas">
        <div  class="body-tarjeta">
          <div class="tarjeta-superior">
            <img  class="img1" src="${img1}" alt="" />
            <a class="favoritos-tarjeta"  href="./paginas/favoritos.html"></a>
            <div class="botones">
              <div class="sup-izquierda">
                <button class="tipo-casa">${tipo}</button>
                <button class="estado-casa">${estado}</button>
              </div>
              <div class="sup-derecha">
                <button class="rayo">${rayo}</button>
              </div>
              <div class="inferior-izquierda">
                <button class="precio">${precio}</button>
              </div>
              <div class="inferior-derecha"  >
                <button id="favo" value="0" class="cora" onclick="almacenarId(${id})"><span>${cora}</span></button>
                <button  class="flechas">${flechas}</button>
              </div>
            </div>
          </div>
          <div class="terjeta-inferior">
            <div class="tarjeta-localidad">
              <img class="img2" src="${img2}" alt="" />
              <h6>${localidad}</h6>
            </div>
            <div class="descripcion">
              <p>
              ${descripcion}
              </p>
            </div>
            <div class="propietario">
              <div class="dueño">
                <img src="${img3}" alt="" />
                <p class="nombre">${name}</p>
              </div>
              <p class="publicado">${publicado}</p>
            </div>
            <div>
              <div class="habitaciones-area">
                <img class="area" src="${area}" alt="" />
                <img class="habitaciones" src="${habitaciones}" alt="" />
              </div>
            </div>
          </div>
        </div>
        `;
      main.appendChild(divCharacter);
    });
  }
};

const formUbicacion = document.getElementById("form-ubicacion");
formUbicacion.onclick =  (e)=> {
  e.preventDefault();
  let term = ubicacion.value;
  if (term && term !== "") {
    getCharacter(LOCALIDAD_URL + term);
  } else {
    window.location.reload();
  }
  
};

const formTipo = document.getElementById("form-tipo");
formTipo.onclick =  (e)=> {
  e.preventDefault();
  let term = tipo.value;
  console.log(term);
  if (term && term !== "") {
    getCharacter(TIPO_URL + term);
  } else {
    window.location.reload();
  }
  
}; 

document.addEventListener("keyup",e=>{
  e.target.matches("#buscador")
  let palabra= e.target.value
  if (palabra=="") {
    getCharacter(API_URL);
  }
  else{
      let buscar="?q="+palabra
      getCharacter(API_URL+buscar)
  }
})