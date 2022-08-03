import './FirstSection.css';
import Formulaire from './Formulaire';


function FirstSection() {
  return (
    <section className="firstSection">
      <div className='content-firstSection'>
        <h2 className='title-firstSection' >Gagnez jusqu’à 100/mois</h2>
        <p className='text-firstSection'>En vous inscrivant au progamme Digibag Partners</p>
      </div>
      <Formulaire />
    </section>
  );
}

export default FirstSection;
