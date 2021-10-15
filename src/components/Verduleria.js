import React, { useState } from "react";

//Crear variable inicial 'initialProducts'
const initialProducts = {
    bananas: "",
    manzanas:"",
    sandia:"",
    kiwi:""
};

//Crear componente 'Verduleria'
const Verduleria = () => {

//Variable de estado 'productos'
const [ productos, setProductos ] = useState(initialProducts);

//Función manejadora de inputs 'handleChange' para evento 'onChange'
const handleChange = (e) => {
    setProductos({
        ...productos,
        [e.target.name]: e.target.value
    })
};

const { bananas, manzanas, sandia, kiwi } = productos;
let contarProductos = (bananas * 1) + (manzanas * 1) + (sandia * 1) + (kiwi * 1);
let precioTotal = (bananas * 15) + (manzanas * 10) + (sandia * 60) + (kiwi * 20);

    return (
        <div className="list">
        <h1>Carrito: </h1>

    <div className="list-item">
        <span>"Bananas 🍌"</span>
        <div className="list-item-info">
        <input 
        type="number" 
        name="bananas" 
        value={productos.bananas} 
        placeholder="Cantidad" 
        onChange={handleChange}
        />
        <span>{`$${15} c/u`}</span>
        </div>
    </div>

    <div className="list-item">
        <span>"Manzanas 🍎"</span>
        <div className="list-item-info">
        <input 
        type="number" 
        name="manzanas" 
        value={productos.manzanas} 
        placeholder="Cantidad" 
        onChange={handleChange}
        />
        <span>{`$${10} c/u`}</span>
        </div>
    </div>

    <div className="list-item">
        <span>"Sandia 🍉"</span>
        <div className="list-item-info">
        <input 
        type="number" 
        name="sandia" 
        value={productos.sandia} 
        placeholder="Cantidad" 
        onChange={handleChange}
        />
        <span>{`$${60} c/u`}</span>
        </div>
    </div>

    <div className="list-item">
        <span>"Kiwi 🥝"</span>
        <div className="list-item-info">
        <input 
        type="number" 
        name="kiwi" 
        value={productos.kiwi} 
        placeholder="Cantidad" 
        onChange={handleChange}
        />
        <span>{`$${20} c/u`}</span>
        </div>
    </div>
        
    <div className="total-info">
        <span>{contarProductos}</span>
        <span>{`$${precioTotal}`}</span>
    </div>

    <div >
        <input 
        className="btn" 
        type="reset" 
        value="Limpiar" 
        onClick= {() => setProductos(initialProducts)}/> 
    </div>

    </div>
    );
    }

export default Verduleria