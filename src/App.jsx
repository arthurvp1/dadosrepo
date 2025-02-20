
import './App.css'
import Navbar from './components/Navbar'
import Roladado from './components/Roladado'
import Roladado2 from './components/Roladado2'

function App() {


  return (
    <div className='container-app'>
      <div className='navbar-app'>
      <Navbar/>
      </div>

      {/* <Roladado/> */}
      <Roladado2/>

      <button onClick={()=> {}}>Outro dado</button>
    </div>
  )
}

export default App
