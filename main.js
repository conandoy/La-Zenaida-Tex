//PRODUCTOS
const productos = [
    //remeras
    {
        id : "remera-01",
        titulo : "remera 01",
        imagen : "./img/remera-01.jpg",
        categoria : {
            nombre : "remeras",
            id : "remeras"
        },
        precio: 1000
    },
    {
        id : "remera-02",
        titulo : "remera 02",
        imagen : "",
        categoria : {
            nombre : "remeras",
            id : "remeras"
        },
        precio: 1000
    },
    {
        id : "remera-03",
        titulo : "remera 03",
        imagen : "",
        categoria : {
            nombre : "remeras",
            id : "remeras"
        },
        precio: 1000
    },
    {
        id : "-04",
        titulo : "remera 04",
        imagen : "",
        categoria : {
            nombre : "remeras",
            id : "remeras"
        },
        precio: 1000
    },
    //shores
    {
        id : "shor-01",
        titulo : "shor 01",
        imagen : "",
        categoria : {
            nombre : "shores",
            id : "shores"
        },
        precio: 1000
    },
    {
        id : "shor-02",
        titulo : "shor 02",
        imagen : "",
        categoria : {
            nombre : "shores",
            id : "shores"
        },
        precio: 1000
    },
    {
        id : "shor-03",
        titulo : "shor 03",
        imagen : "",
        categoria : {
            nombre : "shores",
            id : "shores"
        },
        precio: 1000
    },
    {
        id : "shor-04",
        titulo : "shor 04",
        imagen : "",
        categoria : {
            nombre : "shores",
            id : "shores"
        },
        precio: 1000
    },
    //calzas
    {
        id : "calza-01",
        titulo : "calza 01",
        imagen : "",
        categoria : {
            nombre : "calzas",
            id : "calzas"
        },
        precio: 1000
    },
    {
        id : "calza-02",
        titulo : "calza 02",
        imagen : "",
        categoria : {
            nombre : "calzas",
            id : "calzas"
        },
        precio: 1000
    },
    {
        id : "calza-03",
        titulo : "calza 03",
        imagen : "",
        categoria : {
            nombre : "calzas",
            id : "calzas"
        },
        precio: 1000
    },
    {
        id : "calza-04",
        titulo : "calza 04",
        imagen : "",
        categoria : {
            nombre : "calzas",
            id : "calzas"
        },
        precio: 1000
    },
    //pantalones
    {
        id : "pantalon-01",
        titulo : "pantalon 01",
        imagen : "",
        categoria : {
            nombre : "pantalones",
            id : "pantalones"
        },
        precio: 1000
    },
    {
        id : "pantalon-02",
        titulo : "pantalon 02",
        imagen : "",
        categoria : {
            nombre : "pantalones",
            id : "pantalones"
        },
        precio: 1000
    },   
    {
        id : "pantalon-03",
        titulo : "pantalon 03",
        imagen : "",
        categoria : {
            nombre : "pantalones",
            id : "pantalones"
        },
        precio: 1000
    },
    {
        id : "pantalon-04",
        titulo : "pantalon 04",
        imagen : "",
        categoria : {
            nombre : "pantalones",
            id : "pantalones"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".botones-categorias")

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto precio">$ ${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>
        `;

        contenedorProductos.append(div)
    })
} 
 cargarProductos();









