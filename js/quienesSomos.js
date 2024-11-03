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

let usua1 = new integrantes ("https://scontent.ftuc2-1.fna.fbcdn.net/v/t39.30808-6/301960569_6076934522320097_1591571299176416663_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeECdIJ8qDci1l_PUUSDlCSp6g0AMfabJorqDQAx9psmikWD929UcwNZJ0RPW1Qee9taHFJWB7vdb8uf_LJXXxB4&_nc_ohc=td5w11RHVpkQ7kNvgEFD3bi&_nc_zt=23&_nc_ht=scontent.ftuc2-1.fna&_nc_gid=A88If4ctfJrI8e20G3Dwern&oh=00_AYCOCD4Lj_osSPiVGlLG597s__HDsu_nbmUTz-3OvsQ6bQ&oe=672BE0BB", "Pérez José María","31","actualmente estoy estudiando para programador. Mis pasatiempos son hacer actividades al aire libre y reunirme con amigos. Soy fan de los animales y me gusta mucho la pizza.","https://github.com/josema-P020","01");

let usua2 = new integrantes ("");

let usua3 = new integrantes ("");

let usua4 = new integrantes ("");

let usua5 = new integrantes ("");

function quinesSomos() {
    const somos = document.getElementsByTagName("somos");
    const main = document.createElement("main");
    main.classList.add("container-fluid d-flex justify-content-center align-items-center mt-5");
    main.innerHTML =`  
        <section class="row integrantes d-flex justify-content-center align-items-center m-5">
            <div class="card col-12 m-3" style="width: 18rem;">
                <img src="${this.foto} " class="card-img-top mt-2" alt="...">
                <div class="card-body fondo">
                  <h5 class="card-title"> ${this.nombre}</h5>
                  <p class="card-text">Tengo ${this.edad}, ${this.descripcion}</p>
                  <a href="${this.git} " class="btn fa-brands fa-github fa-2xl"></a>
                </div>
              </div>
        </section>`;
        somos[0].appendChild(main);
}