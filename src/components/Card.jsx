import React from 'react';
import './Card.css';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';


export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{duration: 1000}}>
        {props => 
        <div style={props}>
          <div className="card">
            <div id="closeIcon" className="row">
              <button onClick={() => onClose(id)} className="btn btn-sm btn-danger">X</button>
            </div>
            <div className="card-body">
               <Link to={`/ciudad/${id}`} >
                <h5 className="card-title">{name}</h5>
               </Link>
              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <p><strong>Min</strong></p>
                  <p>{Math.ceil(min - 273.15)}°</p>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <p><strong>Max</strong></p>
                  <p>{Math.ceil(max - 273.15)}°</p>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
                </div>
              </div>
            </div>
          </div>  
        </div>}
      </Spring>      
    );
};