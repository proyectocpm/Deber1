import logo from "./logo.svg";
import "./App.css";
import Contenedores from "./componentes/Contenedores";
import Contenedores2 from "./componentes/Contenedores2";
import Contenedores3 from "./componentes/Contenedores3";
import Contenedores4 from "./componentes/Contenedores4";
import Contenedores5 from "./componentes/Contenedores5";

function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          <div className="logo-nav">
            <div className="logo-container">
              <img
                className="imgapple"
                src="https://firebasestorage.googleapis.com/v0/b/trabajo-4342e.appspot.com/o/logos%2Fapple.PNG?alt=media&token=15cef27d-0fff-49d6-bd72-272dbb39f8b2"
              />
            </div>
            <ul id="menu">
              <li>
                <a href="#" style={{color:"white"}}>Mac</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-container">
          <div className="container" >
            <h2>iPhone 12</h2>
            <h3 className="h3name">Morado.Soñado</h3>
            <p className="texto1">Muy pronto disponible en morado</p>
            <a className="masinfo" href=""style={{color:"blue"}}>
              Más información
              <br />
            </a>
          </div>
          <div>
            <img
              className="logoRedes"
              src="https://firebasestorage.googleapis.com/v0/b/trabajo-4342e.appspot.com/o/logos%2Fiphone.PNG?alt=media&token=4531b31e-e7c2-458b-8557-06aa3178aef3"
            />
          </div>
          <div className="flexBox">
            <Contenedores />
          </div>
          <div>
            <Contenedores2 />
          </div>
          <div>
            <Contenedores3 />
          </div>
          <div>
            <Contenedores4 />
          </div>
          <div>
            <Contenedores5 />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
