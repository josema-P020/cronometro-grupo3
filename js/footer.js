function Footer() {
    const footer = document.getElementsByTagName("footer");
    const section = document.createElement("section");
    section.classList.add("container-fluid, text-center")
    section.innerHTML =`
            <article class="row my-4 my-md-2 pt-md-4">
                <div class="col-sm-12 col-md-3 mb-2 mb-md-0">
                    <img class="logoSize" src="/img/Logo1.png" alt="logo-dulce-tentacion" />
                </div>
                <div class="col-sm-12 col-md-3">
                    <h5 class="jost">Soporte</h5>
                    <ul class="list-unstyled d-flex justify-content-center flex-md-column">
                        <li>
                            <a class="jost pe-2" href="../pages/nosotros.html">Nosotros</a>
                        </li>
                        <li>
                            <a class="jost px-2" href="../pages/contacto.html">Contactános</a>
                        </li>

                        <li>
                            <a class="jost ps-2 ps-md-0" href="../pages/error404.html">Ayuda</a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-3">
                    <h5 class="jost pb-md-2 pt-2">Horarios de atención</h5>
                    <p class="jost my-0">Lunes- Viernes: 8:00-20:00hs</p>
                    <p class="jost my-0">General Paz 576, San Miguel de Tucumán</p>
                </div>
                <div class="col-sm-12 col-md-3">
                    <h5 class="jost mt-4 mt-md-0">Nuestras redes</h5>
                    <a class="socialSize" href="../pages/error404.html"><i class="bi bi-instagram"></i></a>
                    <a class="socialSize px-2" href="../pages/error404.html"><i class="bi bi-facebook text-dark"></i></a>
                    <a class="socialSize" href="../pages/error404.html"><i class="bi bi-twitter text-dark"></i></a>
                </div>
            </article>
        <p class="text-center border-none montserrat my-0 mt-2">
            &copy; 2024. Todos los derechos reservados
        </p>

    `;
    footer[0].appendChild(section);
}