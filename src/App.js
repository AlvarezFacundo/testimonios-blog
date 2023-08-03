import './App.css';
import Testimonio from './componentes/Testimonio'; 

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mujeres en tecnología: desigualdad y oportunidades</h1>
        <Testimonio 
          nombre="Milagro Teruel"
          cargo="Licenciada en Ciencias de la Computación y cofundadora de Mujeres en Tecnología Córdoba."
          imagen="Milagro"
          testimonio="Desde mi posición como desarrolladora de software, puedo asegurar que somos menos de las que deberíamos. Y muchas veces estamos solas en ambientes altamente masculinizados. El contexto no acompaña y por eso es necesario generar datos, compartir buenas prácticas, acciones y recomendaciones para romper con estas barreras" /> 
        <Testimonio
          nombre="Pamela Scheurer"
          cargo="Ingeniera en Computación y cofundadora y gerente de Tecnología de Nubimetrics."
          imagen="Pamela"
          testimonio="Cuando yo cursé mi carrera, más del 60 por ciento de las inscriptas éramos mujeres. Y cuando me recibí (15 años después), éramos cinco mujeres y un solo hombre. En mis trabajos en el área de sistemas en Jujuy, Tucumán y San Luis, siempre tuve jefas mujeres" />
         <Testimonio
          nombre="Sofía Contreras"
          cargo="Cofundadora de Chicas en Tecnología."
          imagen="Sofia"
          testimonio="La tecnología es la respuesta a muchos de los problemas de la humanidad.  Justamente la tecnología no entiende ni de barreras geográficas ni de género, por el contrario, democratizó el acceso a las oportunidades. Confiemos en nuestras capacidades y animémonos a ser protagonistas del cambio y de nuestro futuro" />
     </div>
    </div>
  );
}

export default App;
