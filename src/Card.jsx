//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({productos}) {
  return (
    <div>
      <h2>Productos</h2>
        {productos.map((producto,index)=>(
            <div key={index} className="card">
                    <h3>{producto.nombre}</h3>
                    <h4> {producto.descripcion} </h4>
                    <p>$ {producto.precio}</p>
            </div>
        ))}
    </div>
  );
}

export default Card;
