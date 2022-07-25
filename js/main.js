const searchButton = document.querySelector(".header-menu .header-menu-items .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".header-menu");
const desktopNavMobil = document.querySelector(".header-menu-mobil");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay-theme");

const searchButtonMobil = document.querySelector(".header-menu-mobil .header-menu-items .link-search");
const closeButtonMobil = document.querySelector(".header-menu-mobil .search-container .link-close");
const desktopNavBreackMobil = document.querySelector(".header-menu-mobil");
const searchContainerMobil = document.querySelector(".header-menu-mobil .search-container");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    desktopNavMobil.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    desktopNavMobil.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    desktopNavMobil.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

searchButtonMobil.addEventListener("click", () => {
    desktopNavBreackMobil.classList.add("hide");
    searchContainerMobil.classList.remove("hide");
    overlay.classList.add("show");
})

closeButtonMobil.addEventListener("click", () => {
    desktopNavBreackMobil.classList.remove("hide");
    searchContainerMobil.classList.remove("hide");
    searchContainerMobil.classList.add("hide");
    overlay.classList.remove("show");
})


//Declarando variables
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");

//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }



}



let json = [
  {
    id: 1,
    nombre: "HTML",
    url: "articulo.html"
  },
  {
    id: 2,
    nombre: "CSS",
    url: "articulo.html"
  },
  {
    id: 3,
    nombre: "JavaScript",
    url: "articulo.html"
  },
  {
    id: 4,
    nombre: "PHP",
    url: "articulo.html"
  },
  {
    id: 5,
    nombre: "NODEJS",
    url: "articulo.html"
  },
  {
    id: 6,
    nombre: "VUEJS",
    url: "articulo.html"
  },
  {
    id: 7,
    nombre: "Como hacer",
    url: "articulo.html"
  },
  {
    id: 8,
    nombre: "Como crear",
    url: "articulo.html"
  }
];

document.getElementById("box-search").innerHTML=`
    ${json.map(function(data){
        return `
            <li><a href="${data.url}">${data.nombre}</a></li>
        `
    }).join('')}
   
`
/*
 <li><a href="articulo.html">HTML</a></li>
// el erray de los nombres seleccionados
let seleccionados = [];
// cada vez que el valor del elemento input cambia
buscador.addEventListener("input", () => {
  //vacia el array de los nombres seleccionados
  seleccionados.length = 0;
  //para más eficiencia crea un nuevo fragmento
  let fragment = document.createDocumentFragment();
  //recuoera el valor del input y guardalo en una variable
  let elValor = buscador.value;
  //si hay un valor
  if (elValor.length > 0) {
  // busca en el json si el nombre incluye (o empieza por) el valor
    json.forEach(j => {
      //if(j.nombre.startsWith(elValor))
      if (j.nombre.includes(elValor)) {
        // si lo incluye agregalo al array de los seleccionados
        seleccionados.push(j.nombre);
      }
    });
    //para cada elemento selccionado
    seleccionados.forEach(s => {
    //crea un nuevo elemento p
      let p = document.createElement("p");
      //cuyo innerHTML es el nombre seleccionado
      p.innerHTML = s;
      //y agregalo al fragmento
      fragment.appendChild(p);
    });
    //vacía el resultado 
    resultado.innerHTML = "";
    //agrega el fragmento al resultado
    resultado.appendChild(fragment);
  }
});
*/