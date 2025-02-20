import React, { useState } from 'react'

function Roladado() {

    function rolar() {
    
        setDado('./images/d6/loader.png');
        var randomIndex = Math.floor(Math.random() * (8)) + 0
        var novodado = imagens[randomIndex];
        console.log(novodado);
        setDado(novodado);
    }

    const imagens = [
        './images/d8/dado1.jpg',
        './images/d8/dado2.jpg',
        './images/d8/dado3.jpg',
        './images/d8/dado4.jpg',
        './images/d8/dado5.jpg',
        './images/d8/dado6.jpg',
        './images/d8/dado7.png',
        './images/d8/dado8.png'
        
        
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
            D8
            <img className='imgdado' src={dado}/>
        </div>


        <BotaoRola />



    </div>
  )
}

export default Roladado
