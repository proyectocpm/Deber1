import React from "react";

export default function Contenedores() {
  return (
    <div className="section2-container">
      <div className="container">
        <h2>iPad Pro</h2>
        <h3 className="h3name">Con los superpoderes del chip M1 de Apple</h3>
        <p className="texto1">Consulta de dosponibilidad mas adelante</p>
        <a className="masinfo" href=""style={{color:"blue"}}>
          Más información
          <br />
        </a>
      </div>
      <div>
        <img
          className="logoRedes"
          src="https://firebasestorage.googleapis.com/v0/b/trabajo-4342e.appspot.com/o/logos%2FIpad.PNG?alt=media&token=33b5e28f-ec5a-4e93-97a1-f87baa57b143"
        />
      </div>
    </div>
  );
}
