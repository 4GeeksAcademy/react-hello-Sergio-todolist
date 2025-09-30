import React, { useState } from "react";

export const Todo = () => {
    const [nuevatarea, setNuevatarea] = useState("Nueva Tarea");
    const [lista, setLista] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null); 
    const tarea = (event) => {
        setNuevatarea(event.target.value);
    };

    const borrartarea = (indice) => {
        const nuevalista = lista.filter((todo, i) => i !== indice);
        setLista(nuevalista);
    };

    const añadirtarea = () => {
        setLista([...lista, nuevatarea]);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            añadirtarea();
        }
    };

    return (
        <div className="text-center container">
            <h1>TODOS</h1>
            <div>
                <div className="d-flex gap-2">
                    <input
                        type="text"
                        onChange={tarea}
                        onKeyDown={handleKeyDown}
                        className="form-control"
                    />
                    <button onClick={añadirtarea}>
                        Agregar tarea
                    </button>
                </div>
                <p>Nueva tarea: {nuevatarea}</p>
                {lista.length === 0 && (
                    <div className="alert alert-info mt-3">
                        No hay tareas, añadir tareas
                    </div>
                )}
                <ul>
                    {lista.map((todo, indice) => {
                        return (
                            <li
                                className="lis-group d-flex justify-content-between align-items-right"
                                key={indice}
                                onMouseEnter={() => setHoveredIndex(indice)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {todo}
                                {hoveredIndex === indice && (
                                    <button className="btn" onClick={() => borrartarea(indice)}>X</button>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}