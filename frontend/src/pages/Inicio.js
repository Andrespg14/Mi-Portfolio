import React, {useEffect} from "react";
import './inicio.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Inicio() {
    useEffect(() => {
       window.scrollTo(0, 0);
    }, []);
    return (
        <div className="inicio-container">
            <div className="inicio-foto">
                <img src={process.env.PUBLIC_URL + "/fotoPerfil.png"} alt="Foto de perfil" />
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
                    <Button as={Link} to="habilidades">Habilidades</Button>
                    <Button as={Link} to="proyectos">Proyectos</Button>
                </div>
            </div>
        </div>
    );
}


