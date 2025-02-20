import React, { useState } from 'react'

function Roladado() {

    function rolar() {
    
        setDado('./images/d6/loader.png');
        var randomIndex = Math.floor(Math.random() * (5)) + 0
        var novodado = imagens[randomIndex];
        console.log(novodado);
        setDado(novodado);
    }

    const imagens = [
        './images/d6/dado1.jpg',
        './images/d6/dado2.jpg',
        './images/d6/dado3.jpg',
        './images/d6/dado4.jpg',
        './images/d6/dado5.jpg',
        './images/d6/dado6.jpg',
    ]

    function BotaoRola() {
        return (
          <div className='container-botao'>
            <button onClick={rolar} className='btn'>Rolar Dados</button>
          </div>
        )
      }

    const [dado, setDado] = useState('./images/d6/clickabaixo.png')



  return (
    <div className='container-dado'>

        <div className='show-dado'>
            D6
            <img className='imgdado' src={dado}/>
        </div>


        <BotaoRola />



        
    </div>
  )
}

export default Roladado
