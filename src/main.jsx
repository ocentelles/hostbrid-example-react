import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import leaf from './assets/leaf.svg';
import './styles.css';
function App(){
 const [path,setPath]=useState(window.location.pathname);
 useEffect(()=>{const update=()=>setPath(window.location.pathname);window.addEventListener('popstate',update);return()=>window.removeEventListener('popstate',update);},[]);
 const navigate=(event)=>{if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();window.history.pushState({},'',event.currentTarget.getAttribute('href'));setPath(window.location.pathname);};
 const label=import.meta.env.VITE_CONTACT_LABEL||'Contacto de ejemplo';
 return <><header><a href="/" onClick={navigate}>Ejemplo React</a><nav aria-label="Navegación principal"><a href="/about" onClick={navigate}>El proyecto</a></nav></header><main>
 {path==='/'?<><img src={leaf} width="72" height="72" alt="Ilustración de una hoja"/><p>Ejemplo educativo · React y Vite</p><h1>Una web con dos rutas</h1><p>Este ejemplo genera archivos estáticos. La navegación no necesita una API ni una base de datos.</p><a href="/about" onClick={navigate}>Ver la segunda ruta</a></>:path==='/about'?<><h1>Qué publica este proyecto</h1><p>React, una imagen importada y CSS se construyen con Vite. La variable VITE_CONTACT_LABEL es pública y se incorpora al resultado del build.</p><p data-public-label>{label}</p><p>La visita directa a /about necesita que el alojamiento sirva index.html para esa ruta.</p><a href="/" onClick={navigate}>Volver al inicio</a></>:<><h1>Página no encontrada</h1><a href="/" onClick={navigate}>Volver al inicio</a></>}
 </main><footer>No implementa login, pagos ni envío de formularios. No pongas secretos en variables VITE_*.</footer></>;
}
createRoot(document.getElementById('root')).render(<App/>);
