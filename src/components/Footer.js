import logo_blanc from '../assets/Logos/LOGO_DOOHIT_FULL_BLANC.svg'
import icon_mail from '../assets/Icones/Icon_mail.svg'
import icon_phone_vide from '../assets/Icones/Icon_phone_vide.svg'
import icon_home from '../assets/Icones/Icon_home.svg'
import badge_app_store from '../assets/Badges/Google Play.png'
import badge_play_store from '../assets/Badges/App Store.png'
import './Footer.css';

function App() {
  return (
    <footer>
        <div className='first-bloc-footer'>
            <div className='box-footer'>
                <div className='box-head-footer'>
                    <img className='logo_footer' src={logo_blanc} alt='logo'/>
                </div>
                <div className='dp-flx-txt-ctr'>
                    <img className='icons_footer' src={icon_mail} alt='icon mail' />
                    <a className='lien-footer' href='mail'>sav@doohit.fr</a>
                </div>
                <div className='dp-flx-txt-ctr'>
                    <img className='icons_footer' src={icon_phone_vide} alt='icon mail' />
                    <a className='lien-footer' href='tel'>01 77 32 78 80 / 07 83 43 69 50</a>
                </div>
                <div className='dp-flx-txt-ctr'>
                    <img className='icons_footer' src={icon_home} alt='icon mail' />
                    <a className='lien-footer' href='localisatio'>11 Rue Lourmel, 75015 Paris</a>
                </div>
            </div>
            <div className='box-footer'>
                <div className='box-head-footer'>
                    <h3 className='title-footer'>Explorer</h3>
                </div>
                <div className='dp-flx-txt-ctr'>
                    <a className='lien-footer' href='mail'>sav@doohit.fr</a>
                </div>
                <div className='dp-flx-txt-ctr'>
                    <a className='lien-footer' href='tel'>01 77 32 78 80 / 07 83 43 69 50</a>
                </div>
                <div className='dp-flx-txt-ctr'>
                    <a className='lien-footer' href='localisatio'>11 Rue Lourmel, 75015 Paris</a>
                </div>
            </div>
            <div className='box-footer'>
                <div className='box-head-footer'>
                    <h3 className='title-footer'>Téléchargez l’application
                    MyDigibag</h3>
                </div>
                <div className='dp-flx-txt-ctr'>
                    <img className='badge_footer' src={badge_app_store} alt='icon mail' />
                </div>
                <div className='dp-flx-txt-ctr'>
                    <img className='badge_footer' src={badge_play_store} alt='icon mail' />
                </div>
            </div>
        </div>
</footer>
  );
}

export default App;


