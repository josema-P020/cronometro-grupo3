class Integrantes {
    constructor(foto, nombre, edad, descripcion, git) {
        this.foto = foto;
        this.nombre = nombre;
        this.edad = edad;
        this.descripcion = descripcion;
        this.git = git;
    }

    quienesSomos() {
        const somos = document.getElementById("somos");

        const section = document.createElement("section");
        section.classList.add("row", "integrantes", "d-flex", "justify-content-center", "align-items-center", "m-5");

        section.innerHTML = `
            <div class="card col-12 m-3" style="width: 18rem;">
                <img src="${this.foto || 'default.jpg'}" class="card-img-top mt-2" alt="${this.nombre || 'Sin nombre'}">
                <div class="card-body fondo">
                    <h5 class="card-title">${this.nombre || 'Sin nombre'}</h5>
                    <p class="card-text">Tengo ${this.edad || 'N/A'}, ${this.descripcion || 'Sin descripción'}</p>
                    <a href="${this.git || '#'}" class="btn fa-brands fa-github fa-2xl" target="_blank"></a>
                </div>
            </div>`;
         
        somos.appendChild(section);
    }
}

// Crear instancias de Integrantes
let usua1 = new Integrantes(
    "https://scontent.ftuc2-1.fna.fbcdn.net/v/t39.30808-6/301960569_6076934522320097_1591571299176416663_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeECdIJ8qDci1l_PUUSDlCSp6g0AMfabJorqDQAx9psmikWD929UcwNZJ0RPW1Qee9taHFJWB7vdb8uf_LJXXxB4&_nc_ohc=td5w11RHVpkQ7kNvgEFD3bi&_nc_zt=23&_nc_ht=scontent.ftuc2-1.fna&_nc_gid=A88If4ctfJrI8e20G3Dwern&oh=00_AYCOCD4Lj_osSPiVGlLG597s__HDsu_nbmUTz-3OvsQ6bQ&oe=672BE0BB",
    "Pérez José María",
    "31",
    "Actualmente estoy estudiando para programador. Mis pasatiempos son hacer actividades al aire libre y reunirme con amigos. Soy fan de los animales y me gusta mucho la pizza.",
    "https://github.com/josema-P020"
);

let usua2 = new Integrantes(
    "https://images-ext-1.discordapp.net/external/ti6diDXzuH_nIY2OZdIineMgN5eYH8LtOWia5nWjI54/%3Fstp%3Ddst-jpg_s200x200%26_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3De4545e%26_nc_eui2%3DAeEJm7e1_5qGhA585QyNR70p0TfM1Uu21HDRN8zVS7bUcNBgbpX1qYC71vGuq7xJ-HU%26_nc_ohc%3DgP20C9ahEaEQ7kNvgG66GSk%26_nc_zt%3D24%26_nc_ht%3Dscontent-eze1-1.xx%26_nc_gid%3DAL5TzCpeJjRFRVPCR9bTUFZ%26oh%3D00_AYD0fuFvN6UNuCKNUW33DzTRJDg0r-KCgLAWlvEnCUzxUw%26oe%3D674F8310/https/scontent-eze1-1.xx.fbcdn.net/v/t1.6435-1/60259623_10218336369056257_6265658923181670400_n.jpg?format=webp",
    "Gerardo Solorzano",
    "42",
    "Soy músico, violinista de la orquesta sinfónica de Salta. Me encanta el arte y siento que el universo de la programación es un arte de creatividad infinita.",
    "https://github.com/gerardosolorzano-33"
);

let usua3 = new Integrantes(
    "https://movielifeplus.netlify.app/assets/img/20240731_162612.jpg",
    "Enzo Perez",
    "19",
    "Estudiante de programación en la UTN, me gustan los videojuegos, entrenar y la tecnología. También me gusta el asado los domingos y compartir con amigos.",
    "https://github.com/matperez01"
);

let usua4 = new Integrantes();
let usua5 = new Integrantes();

// Llamar al método para cada instancia
usua1.quienesSomos();
usua2.quienesSomos();
usua3.quienesSomos();
usua4.quienesSomos();
usua5.quienesSomos();
