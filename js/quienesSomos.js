class integrantes {
    constructor (foto, nombre, edad, descripcion, git, id) {
        this.foto = foto;
        this.nombre = nombre;
        this.edad = edad;
        this.descripcion = descripcion;
        this.git = git;
        this.id= id;
    }
}

let usua1 = new integrantes ("", "Pérez José María","31","actualmente estoy estudiando para programador. Mis pasatiempos son hacer actividades al aire libre y reunirme con amigos. Soy fan de los animales y me gusta mucho la pizza.","https://github.com/josema-P020","01");

let usua2 = new integrantes ("");

let usua3 = new integrantes ("");

let usua4 = new integrantes ("");

let usua5 = new integrantes ("");

function quinesSomos() {
    const header = document.getElementsByTagName("quinesSomos");
    const nav = document.createElement("nav");
    nav.classList.add("navbar", "navbar-expand-lg", "bg-dark", "navbar-dark");
    nav.innerHTML =