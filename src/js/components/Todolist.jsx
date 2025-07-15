import React, { useState } from "react";

export const Todolist=() =>{
    const [list, setList] =useState([{name: "Sergio"}]);
    const [name, setName] = useState("");

    function handleSubmit(event){
        event.preventDDefault();
        if(name.length === 0){
            return alert("El nombre es obligatorio")
        }
        let newItem = {
            name: name
        }
        setList(prev => [...prev, newItem])
    }

    return (
        <div className="Contenedor text-center">
            <h1 >TODOS</h1>
            <form className="container w-75 p-2 border border-black" onSubmit={(e) => handleSubmit(e)}>
                <div class="mb-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="name"aria-describedby="name"placeholder="Sergio" value={name}onChange={(e)=>setName(e.target.value)} />
                    <div id="name" class="form-text" >El nombre es obligatorio</div>
                </div>
                <div class="mb-3">

                </div>
                <button type="submit" class="btn btn-primary">Añadir</button>
            </form>
            <div  className="container-cards">
                {
                    list.map(item => {
                        return(
                            <>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )


}