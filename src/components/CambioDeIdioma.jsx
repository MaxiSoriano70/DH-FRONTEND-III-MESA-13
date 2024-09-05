import { usarEstadoDeIdioma } from "../context/Context";

const CambioDeIdioma = () => {
    const {cambioDeIdioma} = usarEstadoDeIdioma();

    const handleChange = (event) => {
        const nuevoIdioma = event.target.value;
        cambioDeIdioma(nuevoIdioma);
    };
    return (
        <div className="select">
            <select onChange={handleChange}>
                <option value="">CAMBIAR IDIOMA</option>
                <option value="ES">ESPAÑOL</option>
                <option value="EN">INGLES</option>
                <option value="POR">PORTUGUES</option>
            </select>
        </div>
    )
}

export default CambioDeIdioma;
