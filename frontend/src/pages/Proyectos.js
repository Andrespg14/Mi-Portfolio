import React, {useEffect} from "react";
import './Proyectos.css'

export default function Proyectos() {
    useEffect(() => {
       window.scrollTo(0, 0);
    }, []);
    return (
    <div className="div-proyectos-padre">
        <div className="container-proyectos">
            <div className="card" style={{"width": "40rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Trabajo de Fin de Grado</h5>
                    <ul style={{textAlign: 'left'}}>
                        <li><b>Título:</b> Modelado y análisis de un sistema autónomo para supervisión de incendios forestales.</li>
                        <li><b>Tecnologías:</b> Java, PRISM Modelchecker, Propiedades PCTL</li>
                        <li><b>Descripción:</b> Modelado dinámico mediante un script en Java de un escenario de incendio con drones supervisores junto con la verificación
                        de propiedades de seguridad utilizando PRISM Modelchecker.</li>
                        <li><b>Nota:</b> 8,5/10.</li>
                    </ul>
                    <div className="card-buttons">
                        <a href="https://drive.google.com/drive/folders/1EpmA2eTTy5kJrsd15vz_PDLhxXawRfYV?usp=sharing" className="btn btn-primary">Más información</a>
                    </div>
                </div>
            </div>
            <div className="card" style={{"width": "40rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Aplicación web fullstack</h5>
                    <ul style={{textAlign: 'left'}}>
                        <li><b>Tecnologías:</b> React, Node.js, Express.js, MongoDB Atlas, Docker.</li>
                        <li><b>Descripción:</b> Aplicación web desarrollada como proyecto de asignatura en la Universidad de Málaga. Consiste en la compraventa de productos mediante subasta, semejante a eBay.
                        Incluye autenticación de usuarios, gestión de productos y sistema de pujas en tiempo real.</li>
                        <li><b>Funcionalidades adicionales:</b> Integración de pagos con Paypal, gestión de acceso median OAuth2.0 y un sistema de cuentas de Google. Integración de Google Maps. Carga y almacenamiento de imágenes mediante Cloudinary.</li>
                    </ul>
                    <div className="card-buttons">
                        <a href="https://github.com/victoriaemc/ElRastro" className="btn btn-primary">Enlace al repositorio</a>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
    );
}
