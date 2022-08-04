import './SecondeSection.css';
import arrowUp from "../assets/Icones/ArrowUpRight.svg"
import Img_slide01 from "../assets/Img_slider_01.png"
import euro from '../assets/Icones/Icon_euro.svg'
import star from '../assets/Icones/Icon_star.svg'
import heart from '../assets/Icones/Icon_heart.svg'
import bandeau from '../assets/Img_bandeau.png'
import edit from '../assets/Icones/Icon_edit.svg'
import bike from '../assets/Icones/Icon_bike.svg'
import phone from '../assets/Icones/Icon_phone.svg'
import faq from '../assets/Img_FAQ.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'






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

      {/* A mettre dans un autre fichier */}
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
            {/* autre fichier */}
            <div className='box-partenaire'>
                <div className='content-partenaire'>
                    <h2 className='title-partenaire'>Devenez Digicab Partner</h2>
                    <p className='text-partenaire'>N’attendez plus, rejoignez le club dès maintenant</p>
                    <button className='bouton-partenaire'>S’inscrire maintenant <img src={arrowUp} alt='arrowUpRight'/></button>
                </div>
                <img className='bandeau' src={bandeau} alt='bandeau' />
            </div>
            {/* autre fichier  */}
            <h2 className='title-secd-sct'>Ce dont vous avez besoin pour <span>nous rejoindre</span></h2>
            <div className='box-row'>
                    <div className='box-col'>
                        <img src={edit} className='svg-picture' alt='edit-svg'/>
                        <h3 className='subtitle'>Remplir le formulaire</h3>
                        <p className='text-box-col'>Remplissez le formulaire de préinscription. Vous serez recontactez par nos services</p>
                    </div>
                    <div className='box-col'>
                        <img src={bike} className='svg-picture' alt='money-svg'/>
                        <h3 className='subtitle'>Vélo</h3>
                        <p className='text-box-col'>Le mode de transport le plus 
                        adapté au DIGIBAG</p>
                    </div>
                    <div className='box-col'>
                        <img src={phone} className='svg-picture' alt='money-svg'/>
                        <h3 className='subtitle'>Un Smartphone</h3>
                        <p className='text-box-col'>Iphone iOS ou Android</p>
                    </div>
            </div>
            {/* autre fichier  */}
            <div className='sect-faq'>
                <div className='box-faq-pict'>
                    <img className='faq-pict' src={faq} alt='Faq pictur' />
                </div>
                <div className='box-faq-glob'>
                    <h2 className='title-faq'>Questions les plus fréquentes</h2>
                    <div className='box-faq'>
                        <p className='faq'>Quand vais-je pouvoir intégrer le Club DIGIBAG Partners ? </p>
                        <FontAwesomeIcon className='dropdown-icon-faq' icon={faAngleDown} />
                    </div>
                    <div className='box-faq'>
                        <p className='faq'>Le sac DIGIBAG est-il payant ? </p>
                        <FontAwesomeIcon className='dropdown-icon-faq' icon={faAngleDown} />
                    </div>
                    <div className='box-faq'>
                        <p className='faq'>Quelles sont les dimensions du sac ?</p>
                        <FontAwesomeIcon className='dropdown-icon-faq' icon={faAngleDown} />
                    </div>
                    <div className='box-faq'>
                        <p className='faq'>A quelle fréquence vais-je être payé ? </p>
                        <FontAwesomeIcon className='dropdown-icon-faq' icon={faAngleDown} />
                    </div>
                    <div className='box-faq'>
                        <p className='faq'>Comment est calculée la rémunération ?</p>
                        <FontAwesomeIcon className='dropdown-icon-faq' icon={faAngleDown} />
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
}

export default SecondeSection;
