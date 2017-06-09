import React from 'react';

import '../styles/index.scss';
import '../styles/common/style_reset.css';
import '../styles/fonts.scss';

export default class Header extends React.Component {
    menuOpen() {
        document.getElementById('menu').classList.toggle('menu-open');
        document.getElementById('menu-burger').classList.toggle('display-none');
        document.getElementById('menu-cross').classList.toggle('display-none');
    }
    render() {
    return (
      <div>

          <div className='header'>
              <div className='header__wrapper'>
                  <div className='header__container'>
                      <div className='header__container__norbit-logo'>
                          <img src={require('./images/norbit-logo.png')} alt='' height='40px'/>
                      </div>
                      <div className='header__container__sap-logo'>
                          <img src={require('./images/sap-logo.png')} alt='' height='40px'/>
                      </div>
                  </div>
                  <div className='header__container__wrapper__contacts'>
                      <div className='header__container__contact'>
                          <img className='header__container__email__email-icon' src={require('./images/mail-icon-2.png')} alt='' width='25px'/>
                          <a className='header__container__text' href="mailto:sap@norbit.ru">sap@norbit.ru</a>
                      </div>
                      <div className='header__container__contact'>
                          <img className='header__container__phone__phone-icon' src={require('./images/phone-icon-2.png')} alt='' width='21px'/>
                          <a className='header__container__text' href="tel: +7 (495) 787-29-92">+7 (495) 787-29-92</a>
                      </div>
                  </div>
                  <div id='menu-burger' className='header__container__menu-button '>
                      <img src={require('./images/menu-button.png')} alt='' width='32px' height='22px' onClick={this.menuOpen}/>
                  </div>
                  <div id='menu-cross' className='header__container__menu-button button-fix display-none'>
                      <img src={require('./images/x-icon.png')} alt='' width='26px' height='22px' onClick={this.menuOpen}/>
                  </div>
              </div>
              <div id='menu' className='header__menu'>
                  <div className='header__menu__wrapper'>
                      <div className='header__menu__wrapper__inner'>
                          <div className='header__container__contact'>
                              <img className='header__container__email__email-icon' src={require('./images/mail-icon-2.png')} alt='' width='25px'/>
                              <a className='header__container__text' href="mailto:sap@norbit.ru">sap@norbit.ru</a>
                          </div>
                      </div>
                      <div className='header__menu__wrapper__inner'>
                          <div className='header__container__contact'>
                              <img className='header__container__phone__phone-icon' src={require('./images/phone-icon-2.png')} alt='' width='21px'/>
                              <a className='header__container__text' href="tel: +7 (495) 787-29-92">+7 (495) 787-29-92</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )}
}
