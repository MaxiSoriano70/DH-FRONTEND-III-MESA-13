import { createContext, useContext, useState } from "react";
import ingles from '../languages/english.json';
import espaniol from '../languages/spanish.json';
import portugues from '../languages/portuguese.json';


const EstadoDeIdioma = createContext();

const Context = ({children}) =>{
    const [idioma, setIdioma] = useState(espaniol);
    const [opcion, setOpcion] = useState("ES");

    const cambioDeIdioma = (nuevoIdioma) =>{
        if(nuevoIdioma === "ES"){
            setOpcion("ES");
            setIdioma(espaniol);
        }
        if(nuevoIdioma === "EN"){
            setOpcion("EN")
            setIdioma(ingles);
        }
        if(nuevoIdioma === "POR"){
            setOpcion("POR")
            setIdioma(portugues);
        }
    }

    return (
        <EstadoDeIdioma.Provider value={{idioma, setIdioma, opcion, setOpcion, cambioDeIdioma}}>
            {children}
        </EstadoDeIdioma.Provider>
    );
}

export default Context;

export const usarEstadoDeIdioma = () => useContext(EstadoDeIdioma);