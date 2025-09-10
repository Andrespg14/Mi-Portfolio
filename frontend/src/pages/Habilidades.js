import React from "react";
import './Habilidades.css';

export default function Habilidades() {
    return (
        <div>
            <div className="habilidades-container">
                
                <div className="hardskills">
                    <h2>Habilidades Técnicas</h2>
                    <ul className="hardskill-category">
                        <h3><b>Lenguajes de Programación</b></h3>
                        <ul>
                            <li><i className="fab fa-java"></i><b>Java:</b> Experiencia en el desarrollo orientado a objetos.</li>
                            <li><i className="fab fa-js"></i><b>JavaScript:</b> Proyectos web fullstack.</li>
                            <li><i className="fab fa-c"></i><b>C/C++:</b> Manejo de hilos y programación concurrente.</li>
                        </ul>
                    </ul>
                    <ul className="hardskill-category">
                        <h3><b>Lenguajes de Marcado y Consulta</b></h3>
                        <ul>
                            <li><i className="fab fa-html5"></i><b>HTML/CSS:</b> Maquetación y diseño responsivo.</li>
                            <li><i className="fa-solid fa-file-code"></i><b>SQL:</b> Consultas y diseño de bases de datos.</li>
                        </ul>
                    </ul>
                    <ul className="hardskill-category">
                        <h3><b>Frameworks y Librerías</b></h3>
                        <ul>
                            <li><i className="fab fa-react"></i><b>React:</b> Aplicaciones web interactivas.</li>
                            <li><i className="fab fa-node-js"></i><b>Node.js:</b> APIs y desarrollo del lado del servidor con Express.</li>
                            <li><i className="fa-solid fa-leaf"></i><b>Spring Boot:</b> Desarrollo de aplicaciones backend robustas.</li>
                        </ul>
                    </ul>
                    <ul className="hardskill-category">
                        <h3><b>Bases de Datos</b></h3>
                        <ul>
                            <li><i className="fa-solid fa-database"></i><b>MySQL</b></li>
                            <li><i className="fa-brands fa-envira"></i><b>MongoDB</b></li>
                        </ul>
                    </ul>
                </div>

                <div className="softskills">
                    <h2>Habilidades Personales</h2>
                    <ul className="softskills-list">
                        <li>Adaptabilidad al entorno</li>
                        <li>Resolución de problemas</li>
                        <li>Pensamiento crítico</li>
                        <li>Resiliencia</li>
                        <li>Capacidad de aprendizaje</li>
                        <li>Capacidad de análisis</li>
                        <li>Autonomía</li>
                        <li>Trabajo en equipo</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
