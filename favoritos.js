const API_URL = "http://localhost:3000/results/?id=";

let id = localStorage.getItem("id");
console.log(id);



const main = document.getElementById("main-favoritos");


const getCharacter = (character) => {
  const peticion = fetch(character);
  peticion
    .then((resp) => resp.json())
    .then((data) => showCharacter(data))
    .catch((error) => {
      console.log(error);
      swal.fire({
        title: "Ingrese un dato correcto",
        text: "Intente de nuevo mas tarde",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    });
};

getCharacter(API_URL+id);

const showCharacter = (characters) => {
  if (characters.length == 0) {
    Swal.fire({
      icon: "El personaje no existe",
      title: "Intente de nuevo con otro nombre",
      text: "warning",
      confirmButton: "Aceptar",
    });
  } else {
    main.innerHTML = ``;
    characters.forEach((element) => {
      const {
        id,
        img1,
        tipo,
        estado,
        rayo,
        precio,
        cora,
        flechas,
        img2,
        localidad,
        descripcion,
        img3,
        name,
        publicado,
        area,
        habitaciones,
      } = element;
      const divCharacter = document.createElement("div");
      divCharacter.innerHTML = `
        <div class="container-propiedad">
      <div class="propiedad-superior" >
        <h5>CASA ROYAL REAL ESTATE AGENCY</h5>
        <p><strong>Hot</strong> Deal</p>
      </div>
      <div class="propiedad-inferior" >
        <div class="propiedad-izquierdo" style="background-image: url(.${img1})" >
          <button>Photos</button>
        </div>
        <div class="propiedad-derecho">
          <div class="propiedad-uno">
            <h5>${tipo} ${estado}</h5>
          </div>
          <div class="propiedad-dos">
            <h2>${descripcion}</h2>
          </div>
          <div class="propiedad-tres">
            <h5>${localidad}</h5>
          </div>
          <div class="propiedad-cuatro">
            <h5 class="valor-mes">Form $${precio} Per Month</h5>
          </div>
          <div class="propiedad-cinco">
            <a target="_blank" href="https://www.youtube.com/watch?v=zvL0UmvPSEA&ab_channel=NourmandRE">Play</a>
          </div>
          <div class="area-habitaciones">
            <img src="../hot-Deal-Recursos/area-habitaciones.png"  alt="">
          </div>
        </div>
      </div>
    </div>
        
          `;
      main.appendChild(divCharacter);
    });
  }
};
