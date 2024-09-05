import './App.css'
import Navbar from './components/Navbar';
import Body from './components/Body';
import CambioDeIdioma from './components/CambioDeIdioma';

function App() {

  return (
    <div className="App">
      <>
        <Navbar />
        <Body />
        <CambioDeIdioma />
      </>
    </div>
  )
}

export default App