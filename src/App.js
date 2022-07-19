import React from 'react';
import './index.css';

class LessonFour extends React.Component {
    state = {
        gatos: [
            {
                nome: 'Pandora',
                idade: 4.7,
                sexo: 'Fêmea'
            }, 
            {
                nome: 'Mel',
                idade: 0.8,
                sexo: 'Fêmea'
            },
            {
                nome: 'Pipoca',
                idade: 0.9,
                sexo: 'Fêmea'
            },
            {
                nome: 'Salém',
                idade: 0.9,
                sexo: 'Macho'
            },
            {
              nome: 'Luna',
              idade: 0.4,
              sexo: 'Fêmea'
            },
            {
              nome: 'Nina',
              idade: 5.8,
              sexo: 'Fêmea'
            }
        ]
    }

    render() {
        return(
            <>
              <h1>Map</h1>
              <div className='box'>
                {this.state.gatos.map( (cats) => (
                    <ul className='cats'>
                        <li> {cats.nome} </li>
                        <li> {cats.idade} </li>
                        <li> {cats.sexo} </li>  
                    </ul>
                ) )}
              </div>
            </>
        )
    }
}

export default LessonFour;