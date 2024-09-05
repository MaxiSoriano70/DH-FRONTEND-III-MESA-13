import "../App.css"
import { usarEstadoDeIdioma } from "../context/Context";

const Navbar = () => {
    const {opcion} = usarEstadoDeIdioma();
    return (
        <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
                <li class="is-active"><a href="#">Home</a></li>
                <li><a href="#">Bulma</a></li>
                <li><a href="#">Idioma actual: {
                    opcion === "ES" ? "ESPAÑOL" :
                    opcion === "EN" ? "INGLÉS" :
                    opcion === "POR" ? "PORTUGUÉS" :
                    "Idioma no disponible"
                    }</a></li>
            </ul>
        </nav>
    )
}

export default Navbar