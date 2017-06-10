import React from 'react';

export default class Login extends React.Component {
	handleEnter() {
		console.log('hi');
	}

    render() {
    return (
      <div className='login-page'>
		  <h1>Welcome to React Chat App created by Sergey Stepanenko</h1>
		  <div className='login-page__wrapper'>
			  <input type='text' id='messageBox' className='login-page__input' placeholder='Введите свое имя'></input>
			  <button className='login-page__send' onClick={this.handleEnter}>Войти в чат</button>
		  </div>
	  </div>
    )}
}
