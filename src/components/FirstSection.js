import './FirstSection.css';
import Formulaire from './Formulaire';
// import ImgHero from '../assets/Img_hero.png'
// import vector1 from '../assets/Vectors/Vector1.png'


function FirstSection() {
  return (
    <section className="firstSection">
      {/* <img className='Image-sectionFirst' src={ImgHero} alt='image_coursier' /> */}
      {/* <img className='vector-First' src={vector1} alt='vector1' /> */}
      <div className='content-firstSection'>
        <h2 className='title-firstSection' >Gagnez jusqu’à 100/mois</h2>
        <p className='text-firstSection'>En vous inscrivant au progamme Digibag Partners</p>
      </div>
      <Formulaire />
    </section>
  );
}

export default FirstSection;
