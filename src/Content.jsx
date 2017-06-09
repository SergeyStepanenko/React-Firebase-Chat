import React from 'react';

import '../styles/index.scss';

export default class Content extends React.Component {
    formValidation(e) {
        const form = e.target.id.slice(-1);
        const field = e.target.id.split('-')[1];
        const value = e.target.value;
        const successIcon = document.getElementById('input-' + field + '-checked-icon-' + form);
        const errorIcon = document.getElementById('input-' + field + '-exclamation-icon-' + form);
        const errorElement = document.getElementById('error-' + field + '-' + form);
        const input = document.getElementById('input-' + field + '-' + form);

        function showSuccessIcon() {
            successIcon.classList.add('visible');
            errorIcon.classList.remove('visible');
            errorElement.classList.remove('visible');
            input.classList.remove('input-error');
        }

        function showErrorIcon() {
            successIcon.classList.remove('visible');
            errorIcon.classList.add('visible');
            errorElement.classList.add('visible');
            input.classList.add('input-error');
        }

        function checkIfEmpty() {
            if (value.length !== 0) {
                return true;
            }
            return false;
        }

        function nameCheck() {
            if (field === 'name') {
                if (checkIfEmpty()) {
                    showSuccessIcon();
                } else {
                    showErrorIcon();
                }
                return true;
            }

            return false;
        }

        nameCheck();

        function emailCheck() {
            if (field === 'email') {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                    showSuccessIcon();

                    return true;
                } else {
                    showErrorIcon();

                    return false;
                }
            }
        }

        emailCheck();

        function phoneCheck() {
            if (field === 'phone') {
                if (value.search(/[a-zа-яА-ЯёЁ]/g) === -1 && checkIfEmpty()) {
                    showSuccessIcon();

                    return true;
                } else {
                    showErrorIcon();

                    return false;
                }
            }
        }

        phoneCheck();

        function activateSubmitButton() {
            if ((document.getElementById('input-name-checked-icon-' + form).classList[1] !== 'visible')
            || (document.getElementById('input-email-checked-icon-' + form).classList[1] !== 'visible')
            || (document.getElementById('input-phone-checked-icon-' + form).classList[1] !== 'visible')) {
                document.getElementById('button-submit-' + form).classList.add('disabled');

                return false;
            }
            document.getElementById('button-submit-' + form).classList.remove('disabled');

            return true;
        }

        activateSubmitButton();
    }

    submit(e) {
        const form = e.target.id.slice(-1);
        const classListArray = document.getElementById('button-submit-' + form).classList;

        function sendData(formNumber) {
            let company = '';

            if (Number(formNumber) === 3) {
                company = document.getElementById('input-company').value;
            }

            const name = document.getElementById('input-name-' + formNumber).value;
            const phone = document.getElementById('input-phone-' + formNumber).value;
            const email = document.getElementById('input-email-' + formNumber).value;
            const http = new XMLHttpRequest();
            const url = 'mail/index.php';
            const params = 'name=' + name + '&email=' + email + '&phone=' + phone + '&company=' + company + '';
            http.open('POST', url, true);

            //Send the proper header information along with the request
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            http.onreadystatechange = function() {//Call a function when the state changes.
                if(http.readyState === 4 && http.status === 200) {
                    alert('Ваша заявка отправлена');
                }
            }

            http.send(params);
        }

        if (classListArray[classListArray.length - 1] !== 'disabled') {
            sendData(form);
        }


        return true;
    }

    render() {
    return (
      <div>
          <div className='content-wrapper'>
              <div className='content-wrapper__content'>
                  <section className='content-wrapper__content__screen-1'>
                      <div className='content-wrapper__content__screen-1__block-1'>
                          <img className='content-wrapper__content__screen-1__sap-hybris-logo' src={require('./images/sap-hybris.png')} alt='' height='34px'/>
                          <h1 className='content-wrapper__content__screen-1__sap-hybris-text'>SAP Hybris —эффективное управление всем циклом взаимодействия с клиентом</h1>
                      </div>
                      <div className='content-wrapper__content__screen-1__block-2'>
                          <div className='content-wrapper__content__screen-1__block-2__list'>
                              <div className='content-wrapper__content__screen-1__block-2__pair-1'>
                                  <div className='content-wrapper__content__screen-1__block-2__subpair'>
                                      <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/checked-icon.png')} alt='' height='25px'/>
                                      <div className='content-wrapper__content__screen-1__text'>Понимание потребности каждого клиента</div>
                                  </div>
                                  <div className='content-wrapper__content__screen-1__block-2__subpair'>
                                      <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/checked-icon.png')} alt='' height='25px'/>
                                      <div className='content-wrapper__content__screen-1__text'>Увеличение среднего чека</div>
                                  </div>
                              </div>
                              <div className='content-wrapper__content__screen-1__block-2__pair-2'>
                                  <div className='content-wrapper__content__screen-1__block-2__subpair'>
                                      <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/checked-icon.png')} alt='' height='25px'/>
                                      <div className='content-wrapper__content__screen-1__text'>Улучшение сервиса</div>
                                  </div>
                                  <div className='content-wrapper__content__screen-1__block-2__subpair'>
                                      <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/checked-icon.png')} alt='' height='25px'/>
                                      <div className='content-wrapper__content__screen-1__text'>Снижение ваших затрат</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='content-wrapper__content__screen-1__block-3'>
                          <div className='content-wrapper__content__screen-1__block-3__pair-1'>
                              <a className='a' href='#commerce'>
                                  <div className='content-wrapper__content__screen-1__block-3__subpair'>
                                      <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/commerce-icon.png')} alt='' height='106px' width='106px'/>
                                      <p className='content-wrapper__content__screen-1__block-3__subpair__text'>Commerce</p>
                                  </div>
                              </a>
                              <a className='a' href='#marketing'>
                                  <div className='content-wrapper__content__screen-1__block-3__subpair'>
                                      <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/marketing-icon.png')} alt='' height='106px' width='106px'/>
                                      <p className='content-wrapper__content__screen-1__block-3__subpair__text'>Marketing</p>
                                  </div>
                              </a>
                          </div>
                          <div className='content-wrapper__content__screen-1__block-3__pair-2'>
                              <a className='a' href='#billing'>
                                  <div className='content-wrapper__content__screen-1__block-3__subpair'>
                                      <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/billing-icon.png')} alt='' height='106px' width='106px'/>
                                      <p className='content-wrapper__content__screen-1__block-3__subpair__text'>Billing</p>
                                  </div>
                              </a>
                              <a className='a' href='#cloud'>
                                  <div className='content-wrapper__content__screen-1__block-3__subpair'>
                                      <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/cloud-icon.png')} alt='' height='106px' width='106px'/>
                                      <p className='content-wrapper__content__screen-1__block-3__subpair__text'>SAP Cloud For Customer</p>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </section>

                  <section className='content-wrapper__content__screen-2'>
                      <div className='content-wrapper__content__screen-2__form' action='mail/index.php' id='myForm1' method='post'>
                              <div className='content-wrapper__content__screen-2__form__pair'>
                                  <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                      <input className='input input-black input-name input-check' id='input-name-1' name='name' placeholder='Введите ваше имя' onChange={this.formValidation}></input>
                                      <img id='input-name-checked-icon-1' className='input-check__checked-icon' src={require('./images/checked.png')} alt='' height='13px' width='13px'/>
                                      <img id='input-name-exclamation-icon-1' className='input-check__exclamation-icon' src={require('./images/exclamation.png')} alt='' height='12px' width='5px'/>
                                      <span id='error-name-1' className='error-black'>Пожалуйста заполните это поле</span>
                                  </div>
                                  <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                      <input className='input input-black input-email input-check' id='input-email-1' type='email' name='email' placeholder='Введите ваш email' onChange={this.formValidation}></input>
                                      <img id='input-email-checked-icon-1' className='input-check__checked-icon' src={require('./images/checked.png')} alt='' height='13px' width='13px'/>
                                      <img id='input-email-exclamation-icon-1' className='input-check__exclamation-icon' src={require('./images/exclamation.png')} alt='' height='12px' width='5px'/>
                                      <span id='error-email-1' className='error-black'>Введите верный email</span>
                                  </div>
                              </div>
                              <div className='content-wrapper__content__screen-2__form__pair'>
                                  <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                      <input className='input input-black input-phone input-check' id='input-phone-1' name='phone' placeholder='Введите ваш телефон' onChange={this.formValidation}></input>
                                      <img id='input-phone-checked-icon-1' className='input-check__checked-icon' src={require('./images/checked.png')} alt='' height='13px' width='13px'/>
                                      <img id='input-phone-exclamation-icon-1' className='input-check__exclamation-icon' src={require('./images/exclamation.png')} alt='' height='12px' width='5px'/>
                                      <span id='error-phone-1' className='error-black'>Пожалуйста введите только цифры</span>
                                  </div>
                                  <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                      <button className='button input-black input button-submit disabled' id='button-submit-1' type='submit' onClick={this.submit}>ЗАКАЗАТЬ ТЕСТ-ДРАЙВ</button>
                                  </div>
                              </div>
                      </div>
                  </section>
                  <a name="commerce"></a>
                  <div className='content-wrapper__content__screen-3__header'>
                      <div className='content-wrapper__content__screen-3__line'></div>
                      <h2 className='content-wrapper__content__screen-3__header-text content-wrapper__content__screen-3__header-text-advantages'>Наши возможности</h2>
                      <p className='content-wrapper__content__screen-3__space content-wrapper__content__screen-3__space-fix'></p>
                  </div>
                  <section className='content-wrapper__content__screen-3'>
                          <div className='content-wrapper__content__screen-3__wrapper'>
                              <div className='content-wrapper__content__screen-3__commerce-block fix-1'>
                                  <div className='content-wrapper__content__screen-3__commerce-block-pair'>
                                      <img className='content-wrapper__content__screen-3__commerce-block__commerce-icon2' src={require('./images/commerce-icon2.png')} alt='' height='106px' width=''/>
                                      <div className='content-wrapper__content__screen-3__commerce-block__description'>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__header'>Commerce</p>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__text'>Готовая платформа для построения омни-канальной коммерции</p>
                                      </div>
                                  </div>
                              </div>
                              <div className='content-wrapper__content__screen-3__list'>
                                  <ul>
                                      <li><span>Реализация стратегии омниканального сбыта и управление заказами.</span></li>
                                      <li><span>Удобные покупки с любого мобильного устройства за счет адаптации интерфейса</span></li>
                                      <li><span>Готовая интеграция интернет-магазина с популярными платёжными системами.</span></li>
                                      <li><span>Автоматическое сегментирование покупателей с настраиваемой детализацией</span></li>
                                      <li><span>Обработка заказов, частичная отгрузка, автоматический расчёт доставки и интеграция с внешними сервисами доставки.</span></li>
                                      <li><span>Автоматическая обработка заказов с учетом особенностей складского учёта, географии складов и наличия товара.</span></li>
                                      <li><span>Управление промоакциями и e-mail рассылками, отзывами о товарах.</span></li>
                                  </ul>
                              </div>
                          </div>
                      <div className='content-wrapper__content__screen-3__block-1'>
                          <img className='content-wrapper__content__screen-3__block-1__img' src={require('./images/block-1.png')} alt='' height='' width='100%'/>
                      </div>
                  </section>

                  <a name="commerce"></a>
                  <section className='content-wrapper__content__screen-4'>
                      <a name="marketing"></a>
                      <div className='ancor__marketing'></div>
                      <div className='content-wrapper__content__screen-4-green padding'>
                          <div className='content-wrapper__content__screen-4__wrapper'>
                              <div className='content-wrapper__content__screen-3__commerce-block'>
                                  <div className='content-wrapper__content__screen-3__commerce-block-pair'>
                                      <img className='content-wrapper__content__screen-3__commerce-block__commerce-icon2' src={require('./images/diamond-icon.png')} alt='' height='106px' width=''/>
                                      <div className='content-wrapper__content__screen-3__commerce-block__description'>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__header'>Marketing</p>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__text'>SAP Hybris Marketing – единый инструмент для управления всем маркетинговым циклом, оркестрации и персонализации коммуникации по всем каналам</p>
                                      </div>
                                  </div>
                              </div>
                              <div className='content-wrapper__content__colored-list green'>
                                  <ul>
                                      <li><span>Кроссканальные взаимодействия</span></li>
                                      <li><span>Таргетинг и Сегментация</span></li>
                                      <li><span>Маркетинговое планирование</span></li>
                                      <li><span>Персонализация</span></li>
                                      <li><span>Аналитика в реальном времени</span></li>
                                  </ul>
                              </div>
                          </div>
                          <a name="billing"></a>
                          <div className='ancor__marketing'></div>
                      </div>
                      <div className='content-wrapper__content__screen-4 padding'>
                          <div className='content-wrapper__content__screen-4__wrapper'>
                              <div className='content-wrapper__content__screen-3__commerce-block'>
                                  <div className='content-wrapper__content__screen-3__commerce-block-pair'>
                                      <img className='content-wrapper__content__screen-3__commerce-block__commerce-icon2' src={require('./images/billing-icon2.png')} alt='' height='106px' width=''/>
                                      <div className='content-wrapper__content__screen-3__commerce-block__description'>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__header'>Billing</p>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__text'>SAP Hybris Billing – решения для цифровых продуктов и сервисных услуг (расширение ассортимента и внедрение клиентоорентированного сервиса)</p>
                                      </div>
                                  </div>
                              </div>
                              <div className='content-wrapper__content__colored-list blue'>
                                  <ul>
                                      <li><span>Управление подпиской</span></li>
                                      <li><span>Контроль качества</span></li>
                                      <li><span>Тарификация</span></li>
                                      <li><span>Инвойсирование</span></li>
                                      <li><span>Управление документами</span></li>
                                  </ul>
                              </div>
                          </div>
                          <a name="cloud"></a>
                          <div className='ancor__marketing'></div>
                      </div>
                      <div className='content-wrapper__content__screen-4'>
                          <div className='content-wrapper__content__screen-4-orange padding'>
                              <div className='content-wrapper__content__screen-4__wrapper'>
                                  <div className='content-wrapper__content__screen-3__commerce-block'>
                                      <div className='content-wrapper__content__screen-3__commerce-block__pair'>
                                          <div className='content-wrapper__content__screen-3__commerce-block-pair fix-3'>
                                              <img className='content-wrapper__content__screen-3__commerce-block__commerce-icon2' src={require('./images/sap-cloud.png')} alt='' height='106px' width=''/>
                                              <div className='content-wrapper__content__screen-3__commerce-block__description'>
                                                  <p className='content-wrapper__content__screen-3__commerce-block__description__header'>SAP Cloud For Customer</p>
                                                  <p className='content-wrapper__content__screen-3__commerce-block__description__text'>Комплексное решение для продаж, обслуживания клиентов и маркетинга – в одной системе объединены возможности управления, выполнения и аналитики бизнес-процессов. Вы сможете отслеживать все стадии совершения сделки, получать больше данных о клиентах, анализировать результаты и опыт сотрудников и принимать решения, опираясь на успешные практики.</p>
                                              </div>
                                          </div>
                                          <p className='space_1'></p>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__header margin-top50px'>SAP Hybris Sales</p>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__text-sub'>Позволяет контролировать и анализировать процесс продаж, структурировать информацию обо всех стадиях совершения сделок и принимать в будущем успешные управленческие решения.</p>
                                          <p className='fix-2'></p>
                                          <div className='content-wrapper__content__colored-list orange adjust-list'>
                                              <ul>
                                                  <li><span>Управление базой клиентов</span></li>
                                                  <li><span>Сегментирование</span></li>
                                                  <li><span>Выстраивание индивидуальных стратегий продаж</span></li>
                                                  <li><span>Планирование</span></li>
                                                  <li><span>Улучшение результата за счет контроля и внедрения практик</span></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className='content-wrapper__content__screen-3__commerce-block__pair-2'>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__header margin-top50px'>Маркетинг:</p>
                                          <div className='content-wrapper__content__colored-list orange adjust-list fix  fix-4'>
                                              <ul>
                                                  <li><span>Анализ аудитории</span></li>
                                                  <li><span>Сегментация</span></li>
                                                  <li><span>Настройки по активности и целевым группам</span></li>
                                                  <li><span>Персонализация коммуникаций</span></li>
                                                  <li><span>Запуск маркетинговых кампаний по различным каналам</span></li>
                                                  <li><span>Автоматизация процесса согласования</span></li>
                                                  <li><span>Отслеживание откликов</span></li>
                                                  <li><span>Оценка эффективности маркетинговых кампаний</span></li>
                                              </ul>
                                          </div>
                                          <p className='space_2'></p>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__header margin-top50px'>Сервис:</p>
                                          <div className='content-wrapper__content__colored-list orange adjust-list fix'>
                                              <ul>
                                                  <li><span>Набор функций для качественной поддержки клиентов</span></li>
                                                  <li><span>Проведение клиентских опросов</span></li>
                                                  <li><span>Центр взаимодействия с клиентами</span></li>
                                                  <li><span>Умный колл-центр</span></li>
                                                  <li><span>Служба единого окна</span></li>
                                                  <li><span>Общение по любым удобным каналам связи</span></li>
                                              </ul>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                              <div className='ancor__marketing'></div>
                          </div>
                      </div>
                  </section>

                  <section className='content-wrapper__content__screen-5'>
                      <div className='content-wrapper__content__screen-5__wrapper'>
                          <div className='content-wrapper__content__screen-3__line'></div>
                          <h2 className='content-wrapper__content__screen-3__header-text header-fix'>Выгоды от внедрения SAP Hybris</h2>
                          <p className='content-wrapper__content__screen-3__space'></p>
                      </div>
                      <div className='content-wrapper__content__screen-5__blocks-wrapper'>
                          <div className='content-wrapper__content__screen-5__block'>
                              <img className='content-wrapper__content__screen-5__block__img' src={require('./images/conversion-icon.png')} alt='' height='93px' width='93px'/>
                              <p className='content-wrapper__content__screen-5__block__text'>Повышение омникальной конверсии</p>
                          </div>
                          <div className='content-wrapper__content__screen-5__block'>
                              <img className='content-wrapper__content__screen-5__block__img' src={require('./images/wallet-icon.png')} alt='' height='93px' width='93px'/>
                              <p className='content-wrapper__content__screen-5__block__text'>Увеличение среднего чека</p>
                          </div>
                          <div className='content-wrapper__content__screen-5__block'>
                              <img className='content-wrapper__content__screen-5__block__img' src={require('./images/decrising-icon.png')} alt='' height='93px' width='93px'/>
                              <p className='content-wrapper__content__screen-5__block__text'>Снижение ТСО омникальной платформы</p>
                          </div>
                      </div>
                      <div className='content-wrapper__content__screen-5__scheme-block'>
                          <img className='content-wrapper__content__screen-5__scheme-block__img-small' src={require('./images/scheme-small.png')} alt='' height='' width='100%' onClick={this.showPopUp}/>
                      </div>
                  </section>
                  <section className='content-wrapper__content__screen-2'>
                      <div className='content-wrapper__content__screen-2__form'>
                          <div className='content-wrapper__content__screen-2__form__pair'>
                              <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                  <input className='input input-black input-name input-check' id='input-name-2' name='name' placeholder='Введите ваше имя' onChange={this.formValidation}></input>
                                  <img id='input-name-checked-icon-2' className='input-check__checked-icon' src={require('./images/checked.png')} alt='' height='13px' width='13px'/>
                                  <img id='input-name-exclamation-icon-2' className='input-check__exclamation-icon' src={require('./images/exclamation.png')} alt='' height='12px' width='5px'/>
                                  <span id='error-name-2' className='error-black'>Пожалуйста заполните это поле</span>
                              </div>
                              <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                  <input className='input input-black input-email input-check' id='input-email-2' type='email' name='email' placeholder='Введите ваш email' onChange={this.formValidation}></input>
                                  <img id='input-email-checked-icon-2' className='input-check__checked-icon' src={require('./images/checked.png')} alt='' height='13px' width='13px'/>
                                  <img id='input-email-exclamation-icon-2' className='input-check__exclamation-icon' src={require('./images/exclamation.png')} alt='' height='12px' width='5px'/>
                                  <span id='error-email-2' className='error-black'>Введите верный email</span>
                              </div>
                          </div>
                          <div className='content-wrapper__content__screen-2__form__pair'>
                              <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                  <input className='input input-black input-phone input-check' id='input-phone-2' name='phone' placeholder='Введите ваш телефон' onChange={this.formValidation}></input>
                                  <img id='input-phone-checked-icon-2' className='input-check__checked-icon' src={require('./images/checked.png')} alt='' height='13px' width='13px'/>
                                  <img id='input-phone-exclamation-icon-2' className='input-check__exclamation-icon' src={require('./images/exclamation.png')} alt='' height='12px' width='5px'/>
                                  <span id='error-phone-2' className='error-black'>Пожалуйста введите только цифры</span>
                              </div>
                              <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                  <button className='button input-black input button-submit disabled' id='button-submit-2' name='phone' onClick={this.submit}>ЗАКАЗАТЬ ТЕСТ-ДРАЙВ</button>
                              </div>
                          </div>
                      </div>
                  </section>

                  <section className='content-wrapper__content__screen-6'>
                      <div className='content-wrapper__content__screen-6__header'>
                          <div className='content-wrapper__content__screen-6__header__wrapper'>
                              <div className='content-wrapper__content__screen-6__header__line'></div>
                              <div className='content-wrapper__content__screen-6__header__text'>Почему НОРБИТ</div>
                              <div className='content-wrapper__content__screen-6__header__line'></div>
                          </div>
                      </div>
                      <div className='content-wrapper__content__screen-6__wrapper'>
                          <div className='content-wrapper__content__screen-6__wrapper__container'>
                              <img className='content-wrapper__content__screen-6__wrapper__container__img' src={require('./images/stars-icon.png')} alt='' height='' width='80px'/>
                              <p className='content-wrapper__content__screen-6__wrapper__container__text'>Опыт</p>
                              <div className='content-wrapper__content__colored-list-block white'>
                                  <ul>
                                      <li>Более 16 лет на рынке</li>
                                      <li>Из них 12 лет SAP Gold Partner</li>
                                      <li>Наработанный проектный портфель SAP Hybris в России</li>
                                      <li>Кроссотраслевые решения и методики</li>
                                  </ul>
                              </div>
                          </div>
                          <div className='content-wrapper__content__screen-6__wrapper__container'>
                              <img className='content-wrapper__content__screen-6__wrapper__container__img' src={require('./images/like-icon.png')} alt='' height='' width='59px'/>
                              <p className='content-wrapper__content__screen-6__wrapper__container__text'>Опыт</p>
                              <div className='content-wrapper__content__colored-list-block white'>
                                  <ul>
                                      <li>500+ проектов</li>
                                      <li>Рекомендации клиентов</li>
                                      <li>Стабильная проектная команда экспертов-практиков</li>
                                  </ul>
                              </div>
                          </div>
                          <div className='content-wrapper__content__screen-6__wrapper__container'>
                              <img className='content-wrapper__content__screen-6__wrapper__container__img' src={require('./images/sheld-icon.png')} alt='' height='' width='46px'/>
                              <p className='content-wrapper__content__screen-6__wrapper__container__text'>Гарантии</p>
                              <div className='content-wrapper__content__colored-list-block white'>
                                  <ul>
                                      <li>Собственный центр технической поддержки</li>
                                      <li>Гарантийный постропроектный период – 12 месяцев</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </section>

                  <p className='fix-5'></p>
                  <div className='content-wrapper__content__screen-3__line'></div>
                  <h2 className='content-wrapper__content__screen-3__header-text header-fix'>Контакты</h2>
                  <p className='content-wrapper__content__screen-3__space'></p>

                  <div className='content-wrapper__content__screen3and7wrapper'>
                      <div className='content-wrapper__content__screen3and7wrapper__pair-1'>
                          <section className='content-wrapper__content__screen-7'>
                              <div className='content-wrapper__content__screen-7__wrapper'>
                                  <div className='content-wrapper__content__screen-7__wrapper__container'>
                                      <div className="content-wrapper__content__screen-7__wrapper__container__wrapper">
                                          <div className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-1">
                                              <img src={require('./images/pin-icon.png')} alt='' width='27px' height=''/>
                                          </div>
                                          <div className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2">
                                              <p className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2_1">Адрес:</p>
                                              <p className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2_2">27083, г. Москва, ул. Юннатов, д. 18</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className='content-wrapper__content__screen-7__wrapper__container'>
                                      <div className="content-wrapper__content__screen-7__wrapper__container__wrapper">
                                          <div className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-1">
                                              <img src={require('./images/phone-icon.png')} alt='' width='27px' height=''/>
                                          </div>
                                          <div className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2">
                                              <p className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2_1">Телефон:</p>
                                              <p className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2_2">+7 495 787-29-92</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className='content-wrapper__content__screen-7__wrapper__container'>
                                      <div className="content-wrapper__content__screen-7__wrapper__container__wrapper">
                                          <div className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-1">
                                              <img src={require('./images/mail-icon.png')} alt='' width='27px' height=''/>
                                          </div>
                                          <div className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2">
                                              <p className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2_1">Email: </p>
                                              <p className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2_2">sap@norbit.ru</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </section>
                      </div>


                      <div className='content-wrapper__content__screen3and7wrapper__pair-2'>
                          <section className='content-wrapper__content__screen-2-white'>
                              <h2 className='content-wrapper__content__screen-2__header-white'>Попробуйте SAP Hybris прямо сейчас!</h2>
                              <div className='content-wrapper__content__screen-2__form-white'>
                                  <div className=' content-wrapper__content__screen-2__form-white__pair-white'>
                                      <div className='content-wrapper__content__screen-2__form-white__pair-white__subpair'>
                                          <input className='input input-white input-name input-check' id='input-name-3' name='name' placeholder='Введите ваше имя' onChange={this.formValidation}></input>
                                          <img id='input-name-checked-icon-3' className='input-check__checked-icon-white' src={require('./images/checked.png')} alt='' height='13px' width='13px'/>
                                          <img id='input-name-exclamation-icon-3' className='input-check__exclamation-icon-white' src={require('./images/exclamation.png')} alt='' height='12px' width='5px'/>
                                          <span id='error-name-3' className='error-white'>Пожалуйста заполните это поле</span>
                                      </div>
                                      <div className='content-wrapper__content__screen-2__form-white__pair-white__subpair'>
                                          <input className='input input-white input-email input-check' id='input-email-3' type='email' name='email' placeholder='Введите ваш email' onChange={this.formValidation}></input>
                                          <img id='input-email-checked-icon-3' className='input-check__checked-icon-white' src={require('./images/checked.png')} alt='' height='13px' width='13px'/>
                                          <img id='input-email-exclamation-icon-3' className='input-check__exclamation-icon-white' src={require('./images/exclamation.png')} alt='' height='12px' width='5px'/>
                                          <span id='error-email-3' className='error-white'>Введите верный email</span>
                                      </div>
                                  </div>
                                  <div className='content-wrapper__content__screen-2__form-white__pair-white'>
                                      <div className='content-wrapper__content__screen-2__form-white__pair-white__subpair'>
                                          <input className='input input-white input-phone input-check' id='input-phone-3' name='phone' placeholder='Введите ваш телефон' onChange={this.formValidation}></input>
                                          <img id='input-phone-checked-icon-3' className='input-check__checked-icon-white' src={require('./images/checked.png')} alt='' height='13px' width='13px'/>
                                          <img id='input-phone-exclamation-icon-3' className='input-check__exclamation-icon-white' src={require('./images/exclamation.png')} alt='' height='12px' width='5px'/>
                                          <span id='error-phone-3' className='error-white'>Пожалуйста введите только цифры</span>
                                      </div>
                                      <div className='content-wrapper__content__screen-2__form-white__pair-white__subpair'>
                                          <input className='input input-white input-phone input-check' id='input-company' name='phone' placeholder='Название компании'></input>
                                          <img id='input-phone-checked-icon-3' className='input-check__checked-icon-white' src={require('./images/checked.png')} alt='' height='13px' width='13px'/>
                                          <img id='input-phone-exclamation-icon-3' className='input-check__exclamation-icon-white' src={require('./images/exclamation.png')} alt='' height='12px' width='5px'/>
                                          <span id='error-phone-3' className='error-white'>Пожалуйста заполните это поле</span>
                                      </div>
                                  </div>
                              </div>
                              <div className='content-wrapper__content__screen-2__form-white__submit-white'>
                                  <button className='button input-white input button-submit disabled' id='button-submit-3' name='phone' onClick={this.submit}>ЗАКАЗАТЬ ТЕСТ-ДРАЙВ</button>
                              </div>
                          </section>
                      </div>
                  </div>

                  <section className='content-wrapper__content__screen-7'>
                    <iframe src="https://api-maps.yandex.ru/frame/v1/-/C6uq5J4L" width="100%" height="400px"></iframe>
                  </section>

                  <section className='content-wrapper__content__footer'>
                      <span className='content-wrapper__content__footer__block'>© 2017 Норбит. Все права защищены</span>
                  </section>

              </div>
          </div>
          {/* <PopUp/> */}
      </div>
    )}
}
