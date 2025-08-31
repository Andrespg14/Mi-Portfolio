import React from "react";
import './inicio.css';
import { Button } from 'react-bootstrap';

export default function Inicio() {
    // TODO: PONER LINKS A GITHUB Y LINKEDIN
    // TODO: BOTON VER PROYECTOS O DESCARGAR CV

    return (
        <div className="inicio-container">
            <div className="inicio-foto">
                <img src="logo512.png" alt="Foto de perfil" />
            </div>
            <div className="inicio-textos">
                <h1>¡Hola, soy Andrés!</h1>
                <h3>Bienvenido a mi portfolio. Aquí encontrarás información sobre mis proyectos y habilidades.</h3>
                <div className="cuadro-texto">
                    <p>
                        Recién graduado en Ingeniería del Software iniciando mi trayectoria profesional. 
                        Con experiencia en proyectos académicos de desarrollo software con metodologías ágiles. 
                        Busco poner en práctica los conocimientos adquiridos y aprender nuevas habilidades que me permitan crecer profesionalmente.
                    </p>
                </div>
                
                <div className="botones-inicio">
                    <Button href="/habilidades">Habilidades</Button>
                    <Button href="/proyectos">Proyectos</Button>
                    <Button href="/sobre-mi">Sobre Mí</Button>
                </div>
            </div>
        </div>
    );
}


