import logo from '../assets/Logos/logo doohit full blue 1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import FirstSection from './FirstSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='logo-header' src={logo}  alt='Logo'/>
        <div className='nav-header'>
          <div className='call-box-header'>
            <FontAwesomeIcon className='incone-phone-header' icon={faPhone} />
            <a className='number-header' href="tel:+33783436950">07 83 43 69 50</a>
          </div>
          <button className='bouton-inscription-header'>Je m'inscris</button>
        </div>
      </header>
      <FirstSection/>
    </div>
  );
}

export default App;
