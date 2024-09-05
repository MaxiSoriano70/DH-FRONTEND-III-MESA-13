import { usarEstadoDeIdioma } from "../context/Context";

const Body = () => {
    const {idioma} = usarEstadoDeIdioma();

    return (
        <div class="box">
            <h1>{idioma.title}</h1>
            <p>{idioma.description}</p>
        </div>
    )
}

export default Body