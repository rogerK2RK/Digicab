import './Formulaire.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightDots} from '@fortawesome/free-solid-svg-icons'

function Formulaire() {
  return (
    <form className="form">
      <h2 className='title-form-firstSection' >Je m'inscris au progamme<br/> Digibag partner</h2>
      <div className='box-form'>
      <label>Adresse email</label>
      <div className='box-tel'>
        <input className='input-form' type="email" name='mail' placeholder='Saisissez votre adresse e-mail.' />
      </div>
      </div>
      <div className='box-form'>
        <label>Numéro de téléphone</label>
        <div className='box-tel'>
            <select name='pref-numero' className='box-prefixe-tel' >
                <option value="+33">+33</option>
                <option value="+34">+34</option>
                <option value="+35">+35</option>
            </select>
            <input className='input-form-tel' type="tel" name='telephone' placeholder='612345678' />
        </div>
      </div>
      <div className='box-form'>
            <label>Ville</label>
            <div className='box-tel'>
                <input className='input-form ville' list='city' type="text" name='ville' placeholder='Indiquez votre ville' />
                <datalist name='pref-numero' id='city' className='box-prefixe-tel' >
                    <option value="Paris">Paris</option>
                    <option value="Toulouse">Toulouse</option>
                    <option value="Lyon">Lyon</option>
                </datalist>
            </div>
      </div>
      <div className='box-form'>
        <input type="checkbox"  />
        <label className='cond-form'>En vous inscrivant, vous acceptez nos 
        <a className='link-cond-form' href='Conditionsdutilisation'>Conditions
        d'utilisation</a> et <a className='link-cond-form' href='Politique de confidentialité.' >Politique de confidentialité.</a></label>
      </div>
      <button className='box-tel submit-form'>S'inscrire maintenant
      <FontAwesomeIcon icon={faArrowUpRightDots} />
      </button>
    </form>
  );
}

export default Formulaire;
