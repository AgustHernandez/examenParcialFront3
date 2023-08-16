import { useState } from 'react'
import Card from './Card';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [productos, setProductos] = useState([])

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [validar, setValidar] = useState(true);


  const handleSubmit = (e)=>{
    e.preventDefault();
    if(nombre.length >3 && descripcion.length > 6 && precio > 0){
      agregarProducto({nombre, descripcion, precio})
      setNombre("")
      setDescripcion("")
      setPrecio("")
      setValidar(true)
    } else {
      setValidar(false)
    }
  }

  const agregarProducto = (producto)=> {
    setProductos([...productos,producto]);
  }


  return (
    <div className="App">
      <h1>Cargar producto</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese nombre del producto" value={nombre} onChangeCapture={(e)=>setNombre(e.target.value)} />
        <input type="text" placeholder="Ingrese descripción del producto" value={descripcion} onChangeCapture={(e)=>setDescripcion(e.target.value)} />
        <input type="text" placeholder="Ingrese precio del producto" value={precio} onChangeCapture={(e)=>setPrecio(e.target.value)} />
        <button type="Submit">Agregar Prodcuto</button>
      </form>
      {
        validar ? (<Card productos={productos}/>) : (<h3 color='red'>Error. Ingrese nuevamente los datos.</h3>)
      }
    </div>
  );
}

export default App;


//<Card productos={productos}/>