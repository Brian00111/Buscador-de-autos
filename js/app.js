//variables
const selectores = [
  (buscador = document.querySelector("#buscador")),
  (marca = document.querySelector("#marca")),
  (year = document.querySelector("#year")),
  (precioMinimo = document.querySelector("#minimo")),
  (precioMaximo = document.querySelector("#maximo")),
  (puertas = document.querySelector("#puertas")),
  (transmision = document.querySelector("#transmision")),
  (color = document.querySelector("#color")),
];
const resultado = document.querySelector("#resultado");
let resultActually = [];

const datosReci = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

loadingFuctions();

//eventos
function loadingFuctions() {
  document.addEventListener("DOMContentLoaded", initialization);
  selectores.map((e) => e.addEventListener("change", selection));
  selectores.map((e) => e.addEventListener("blur", compResult));
  selectores.map((e) => e.addEventListener("click", ui));
}

//funciones

function ui(e) {
  let arrow = e.target.parentNode.querySelector(".iconify");
  arrow.classList.toggle("active-icon");

  e.stopPropagation();
}

function initialization() {
  autos.forEach((e) => {
    let div = document.createElement("div");
    let pMarcaModelo = document.createElement("p");
    let pPuertas = document.createElement("p");
    let pTransmision = document.createElement("p");
    let pPrecio = document.createElement("p");
    let pColor = document.createElement("p");

    resultado.classList.add("flex", "flex-col", "items-center");
    div.classList.add("bg-gray-200", "rounded", "my-4");

    pMarcaModelo.className = "font-thin text-2xl";
    pMarcaModelo.innerHTML = `
    <sub class="text-lg">Marca y Modelo</sub>
    <br>
    ${e.marca} ${e.modelo}
    `;

    pPuertas.className = "font-thin text-2xl";
    pPuertas.innerHTML = `
    <sub class="text-lg">Puertas</sub>
    <br>
    ${e.puertas}
    `;

    pTransmision.className = "font-thin text-2xl";
    pTransmision.innerHTML = `
    <sub class="text-lg">Transmision</sub>
    <br>
    ${e.transmision}
    `;

    pPrecio.className = "font-thin text-2xl";
    pPrecio.innerHTML = `
    <sub class="text-lg">Precio</sub>
    <br>
    ${e.precio}
    `;

    pColor.className = "font-thin text-2xl";
    pColor.innerHTML = `
    <sub class="text-lg">Color</sub>
    <br>
    ${e.color}
    `;

    div.appendChild(pMarcaModelo);
    div.appendChild(pPuertas);
    div.appendChild(pTransmision);
    div.appendChild(pPrecio);
    div.appendChild(pColor);

    resultado.appendChild(div);
    resultActually.push(e);
  });
  fecha();
}

function selection(e) {
  let textValor = e.target.parentNode.querySelector(".text");
  let valor = e.target.value;
  let actual = e.target.id;

  resultado.innerHTML = "";

  switch (actual) {
    case "marca":
      e.stopPropagation();

      if (valor === "Todos") {
        console.log("vacio");
      }

      datosReci.marca = valor;
      textValor.innerHTML = valor;

      result = autos.filter(compMarca);

      result.map((e) => createTable(e));
      resultActually = result;

      break;

    case "year":
      e.stopPropagation();

      datosReci.year = valor;
      textValor.innerHTML = valor;

      result = autos.filter(compMarca).filter(compYear);

      result.map((e) => createTable(e));
      resultActually = result;

      break;

    case "minimo":
      e.stopPropagation();

      datosReci.minimo = valor;
      textValor.innerHTML = valor;

      result = autos.filter(compMarca).filter(compYear).filter(compMinimo);

      result.map((e) => createTable(e));
      resultActually = result;

      break;

    case "maximo":
      e.stopPropagation();

      datosReci.maximo = valor;
      textValor.innerHTML = valor;

      result = autos
        .filter(compMarca)
        .filter(compYear)
        .filter(compMinimo)
        .filter(compMaximo);

      result.map((e) => createTable(e));
      resultActually = result;

      break;

    case "puertas":
      e.stopPropagation();

      datosReci.puertas = valor;
      textValor.innerHTML = valor;

      result = autos
        .filter(compMarca)
        .filter(compYear)
        .filter(compMinimo)
        .filter(compMaximo)
        .filter(compDoors);

      result.map((e) => createTable(e));
      resultActually = result;

      break;

    case "transmision":
      e.stopPropagation();

      datosReci.transmision = valor;
      textValor.innerHTML = valor;

      result = autos
        .filter(compMarca)
        .filter(compYear)
        .filter(compMinimo)
        .filter(compMaximo)
        .filter(compDoors)
        .filter(compTrans);

      result.map((e) => createTable(e));
      resultActually = result;

      break;

    case "color":
      e.stopPropagation();

      datosReci.color = valor;
      textValor.innerHTML = valor;

      result = autos
        .filter(compMarca)
        .filter(compYear)
        .filter(compMinimo)
        .filter(compMaximo)
        .filter(compDoors)
        .filter(compTrans)
        .filter(compColor);

      result.map((e) => createTable(e));
      resultActually = result;

      break;
  }
  e.stopPropagation();
}

function createTable(e) {
  let div = document.createElement("div");
  let pMarcaModelo = document.createElement("p");
  let pPuertas = document.createElement("p");
  let pTransmision = document.createElement("p");
  let pPrecio = document.createElement("p");
  let pColor = document.createElement("p");

  resultado.classList.add("flex", "flex-col", "items-center");
  div.classList.add("bg-gray-200", "rounded", "my-4");

  pMarcaModelo.className = "font-thin text-2xl";
  pMarcaModelo.innerHTML = `
    <sub class="text-lg">Marca y Modelo</sub>
    <br>
    ${e.marca} ${e.modelo}
    `;

  pPuertas.className = "font-thin text-2xl";
  pPuertas.innerHTML = `
    <sub class="text-lg">Puertas</sub>
    <br>
    ${e.puertas}
    `;

  pTransmision.className = "font-thin text-2xl";
  pTransmision.innerHTML = `
    <sub class="text-lg">Transmision</sub>
    <br>
    ${e.transmision}
    `;

  pPrecio.className = "font-thin text-2xl";
  pPrecio.innerHTML = `
    <sub class="text-lg">Precio</sub>
    <br>
    ${e.precio}
    `;

  pColor.className = "font-thin text-2xl";
  pColor.innerHTML = `
    <sub class="text-lg">Color</sub>
    <br>
    ${e.color}
    `;

  div.appendChild(pMarcaModelo);
  div.appendChild(pPuertas);
  div.appendChild(pTransmision);
  div.appendChild(pPrecio);
  div.appendChild(pColor);

  resultado.appendChild(div);
}

function fecha() {
  let yearActual = new Date().getFullYear();
  let yearTeen = yearActual - 10;

  for (i = yearActual; yearTeen <= i; i--) {
    let options = document.createElement("option");
    options.value = i;
    options.innerHTML = i;

    year.appendChild(options);
  }
}

//comprobaciones
function compMarca(car) {
  if (datosReci.marca) {
    return datosReci.marca === car.marca;
  }
  return autos;
}

function compYear(car) {
  if (datosReci.year) {
    return parseFloat(datosReci.year) === car.year;
  }
  return autos;
}

function compMinimo(car) {
  if (datosReci.minimo) {
    return parseFloat(datosReci.minimo) <= car.precio;
  }

  return autos;
}

function compMaximo(car) {
  if (datosReci.maximo) {
    return parseFloat(datosReci.maximo) >= car.precio;
  }
  return autos;
}

function compDoors(car) {
  if (datosReci.puertas) {
    return datosReci.puertas == car.puertas;
  }
  return autos;
}

function compTrans(car) {
  if (datosReci.transmision) {
    return datosReci.transmision == car.transmision;
  }
  return autos;
}

function compColor(car) {
  if (datosReci.color) {
    return datosReci.color == car.color;
  }
  return autos;
}

function compResult(e) {
  if (resultActually.length === 0) {
    let h1 = document.createElement("h1");
    let txt = document.createTextNode("Sin Resultados");
    h1.classList.add("text-4xl");
    h1.appendChild(txt);

    resultado.appendChild(h1);
  } else {
    resultado.classList.remove("bg-red-400");
  }
  e.stopPropagation();
}
