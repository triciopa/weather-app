import React from 'react'
import './About.css';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';

export default function About({handleClick}) {  
  
  return (
    <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{duration: 1000}}>
        {props => 
        <div style={props}>
          <div className="about">
            <Link to="/">
            <button id="closeIcon2" className="btn btn-sm btn-danger">X</button>
            </Link>
            <div className="content">
              <h1>App creada por:</h1>
              <h3>Pato</h3>
              <p>Todos los derechos están reservados, nos quedan de los izquierdos pero decidite rápido que salen como pan caliente.</p>
            </div>
          </div>
        </div>}
    </Spring>
  )
}
