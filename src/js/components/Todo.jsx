import React, { useState } from "react";

export const Todo =() =>{
    const [nuevatarea, setNuevatarea]= useState("Nueva Tarea");
    const [lista, setLista] = useState (["lista de tareas", "especial"])

    const tarea = (event) => {
        setNuevatarea(event.target.value)
    };

    const borrartarea = (indice) => {
        const nuevalista = lista.filter((todo, i)=> i !== indice)
        setLista(nuevalista)
    }

    const añadirtarea =() => {
        setLista([...lista, nuevatarea])
    };
    return (
        <div className="text-center container">
            <h1>TODOS</h1>
            <div>
                
            <div className="d-flex gap-2">
                <input type="text" onChange={tarea} className="form-control"/>
                <button onClick={añadirtarea}>
                Agregar tarea
                </button>
            </div>
            <p>Nueva tarea: {nuevatarea}</p>
            <ul>
                {lista.map((todo, indice) => {
                    return(
                        <li className="lis-group d-flex justify-content-between align-items-right">
                            {todo} <button className="btn" onClick={()=> borrartarea (indice)}>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
    )
}