import './FirstSection.css';
import Vector01 from "../assets/Vectors/Vector-01.png"
import Vector02 from "../assets/Vectors/Vector-02.png"
import Vector03 from "../assets/Vectors/Vector-03.png"
import Formulaire from './Formulaire';


function FirstSection() {
  return (
    <section className="firstSection">
      <div className='content-firstSection'>
        <h2 className='title-firstSection' >Gagnez jusqu’à 100/mois</h2>
        <p className='text-firstSection'>En vous inscrivant au progamme Digibag Partners</p>
      </div>
      <Formulaire />
      <img className='Vector1' src={Vector01} alt='vector1' />
      <img className='Vector2' src={Vector02} alt='vector2' />
      <img className='Vector3' src={Vector03} alt='vector3' />
    </section>
  );
}

export default FirstSection;
