let productos = [{
    nombre: 'Perro Makia',
    precio: 10500,
    imagen: "https://elpaisano.co/wp-content/uploads/2021/04/perro-caliente-transmilenio.jpg"
},
{
    nombre: 'El de Siempre',
    precio: 7000,
    imagen: "https://misrecetascolombia.com/wp-content/uploads/2020/12/Perros-Calientes-Colombianos-500x416.jpg"

},
{
    nombre: 'Choriperro', 
    precio: 13000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqibHu8WSDdTDLX0w6drCyO8f_1hIIrBRK1g&usqp=CAU"
},
{
    nombre: 'el cochinote',
    precio: 15000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxFodqeF5ycY7YtFJErwmcbqvVPLd3QO3Ow&usqp=CAU"
}
]

let todosLosPerrosContenedor = document.getElementById('nuestrosPerros')

for (const todosLosPerros of productos) {
    console.log(todosLosPerros.nombre)
    todosLosPerrosContenedor.innerHTML += `
        <div class="col">
            <div class="card card-ajust">
                <img src="${todosLosPerros.imagen}" class=" card-img-top w-50 m-auto" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">${todosLosPerros.nombre}</h5>
                        <p class="card-text text-center">$ ${todosLosPerros.precio}</p>
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="input-group mb-3 w-25">
                                <span class="input-group-text">-</span>
                                <input type="number" class="form-control" min="0">
                                    <span class="input-group-text">+</span>
                            </div>
                        </div>
                    </div>
            </div>
            `
}


let Bienvenidos = 'Bienvenido... ahora si veras a los perros mas perros'

let Bienvenidah1 = document.getElementById("Bienvenida")
Bienvenidah1.innerText = TituloPlataforma

setTimeout(() => {
    Bienvenidah1.innerHTML = TituloPlataforma
}, 5000);
