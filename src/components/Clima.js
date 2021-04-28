import React from 'react';

const Clima = ({resultado}) => {

    //Extraer valores
    const {name,main} = resultado;

    if(!name) return null;

    //grados kelvin
    const kelvin = 273.15;

    return (  
        <div className="card-panel white col s12">
            <div className="black-text">
                
                        <h2>El clima de {name} es:</h2>
                        <p className="temperatura">
                            {parseFloat(main.temp - kelvin, 10).toFixed(2)} °C
                        </p>
                        <p>Temperatura Máxima: 
                            {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} °C
                        </p>
                        <p>Temperatura Minima: 
                            {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} °C
                        </p>
                    
            </div>
        </div>
    );
}

export default Clima;