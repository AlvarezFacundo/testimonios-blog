import '../hojas-de-estilo/Testimonio.css';

 function Testimonio(props) {
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio"
        src={require(`../imagenes/Testimonio-${props.imagen}.jpg`)}
        alt="Foto de Milagro" />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"><strong>{props.nombre}</strong></p>
          <p className="cargo-testimonio"><b>{props.cargo}</b></p>
          <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
    </div>


  )
  
} 

export default Testimonio; 