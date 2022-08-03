import './SecondeSection.css';
import arrowUp from "../assets/Icones/ArrowUpRight.svg"
import Img_slide01 from "../assets/Img_slider_01.png"
import euro from '../assets/Icones/Icon_euro.svg'
import star from '../assets/Icones/Icon_star.svg'
import heart from '../assets/Icones/Icon_heart.svg'
import bandeau from '../assets/Img_bandeau.png'



function SecondeSection() {
  return (
    <section className="SecondeSection">
      <div>
            <h2 className='title-secd-sct'>Qu’est ce que le <span>DIGIBAG ?</span></h2>
            <p className='text-secd-sct'>Le Digibag est un sac isotherme spécialement conçu pour les livreurs.
            Particulièrement adapté aux livraisons à vélo, Il possède 3 écrans sur 
            lesquels sont diffusées des publicités.</p>
      </div>
      <div>
            <img className='img-slide' alt=''src={Img_slide01} />
      </div>
      <div>
            <h2 className='title-secd-sct'>Roulez avec le DIGIBAG <span>pour bénéficier de...</span></h2>
            <div className='box-row'>
                    <div className='box-col'>
                        <img src={euro} className='svg-picture' alt='money-svg'/>
                        <h3 className='subtitle'>Rémunération attractive</h3>
                        <p className='text-box-col'>Gagnez jusqu’à <span>100€</span> de revenus complémentaires par mois</p>
                    </div>
                    <div className='box-col'>
                        <img src={star} className='svg-picture' alt='money-svg'/>
                        <h3 className='subtitle'>Devenez Ambassadeur</h3>
                        <p className='text-box-col'>Faites partie de nos ambassadeurs 
                        et bénéficiez d’avantages exclusifs</p>
                    </div>
                    <div className='box-col'>
                        <img src={heart} className='svg-picture' alt='money-svg'/>
                        <h3 className='subtitle'>Accompagnement</h3>
                        <p className='text-box-col'>Profitez d’un accompagnement 
                        social personnalisé</p>
                    </div>
            </div>
            <div className='box-partenaire'>
                <div className='content-partenaire'>
                    <h2>Devenez Digicab Partner</h2>
                    <p>N’attendez plus, rejoignez le club dès maintenant</p>
                    <button>S’inscrire maintenant <img src={arrowUp} alt='arrowUpRight'/></button>
                </div>
                <img className='bandeau' src={bandeau} alt='bandeau' />
            </div>
      </div>
    </section>
  );
}

export default SecondeSection;
