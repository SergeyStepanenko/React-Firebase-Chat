import React from 'react';

import '../../styles/index.scss';
import MessageItem from './message.jsx';
import getProperDate from '../utils/properDate.js';

const database = firebase.database();
const rootRef = database.ref('messages');
let chatBlock = document.querySelector('.chat');
let FIREBASEDATA = [];
let userName = 'guest';

export default class Chat extends React.Component {
	constructor() {
		super();

		this.state = {
			data: [],
		};
		this.handleChatEnter = this.handleChatEnter.bind(this);
		this.handleEnterKey = this.handleEnterKey.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
	}

	componentWillMount() {
		rootRef.on('value', (snap) => {
			const Obj = snap.val();
			chatBlock = document.querySelector('.chat');

			FIREBASEDATA = [];

			for (const x in Obj) {
				if (Object.prototype.hasOwnProperty.call(Obj, x)) {
					FIREBASEDATA.push(Obj[x]);
				}
			}

			this.setState({
				data: FIREBASEDATA,
			})

			chatBlock.scrollTop = chatBlock.scrollHeight;
		});
	}

	handleChatEnter() {
		const loginPage = document.querySelector('.login-page');
		const container = document.getElementById('container');
		userName = document.getElementById('inputUserName').value;

		if (userName !== '') {
			container.removeChild(loginPage);
			document.cookie = userName;
		}
	}

	handleEnterKey(e) {
		if (e.key === 'Enter') {
			if (e.target.id === 'messageBox') {
				this.sendMessage();
			} else if (e.target.id === 'inputUserName') {
				this.handleChatEnter();
			}
		}
	}

	sendMessage() {
		const userMessage = document.getElementById('messageBox');
		const newPostKey = firebase.database().ref().child('posts').push().key; // генерим уникальный id
		chatBlock = document.querySelector('.chat');
		if (userMessage.value !== '') {
			firebase.database().ref('messages/' + newPostKey).set({
				name: userName,
				message: userMessage.value,
				date: Date.now(),
			});
		}


		userMessage.value = '';

		setTimeout(() => {
			chatBlock.scrollTop = chatBlock.scrollHeight;
		}, 1)
	}


    render() {
	    return (
	      <div id='container'>
			  <div className='login-page' id='login-page'>
				  <h1>Welcome to React Chat App created by Sergey Stepanenko</h1>
				  <div className='login-page__wrapper'>
					  <input type='text' id='inputUserName' className='login-page__input' placeholder='Введите свое имя' onKeyPress={this.handleEnterKey}></input>
					  <button className='login-page__send' onClick={this.handleChatEnter}>Войти в чат</button>
				  </div>
			  </div>
			  <h2 className='header'>Welcome to React Chat App</h2>
			  <div className='chat'>
				  {
			        this.state.data.map((el, index) => {
			            return (
			              <MessageItem
			                key={index}
							senderName={el.name}
							textMessage={el.message}
			                sentDate={getProperDate(el.date)}
			                />);
			        })
	            }
			  </div>
			  <footer className='footer'>
				  <input type='text' id='messageBox' className='footer__input' placeholder='Напишите сообщение...' onKeyPress={this.handleEnterKey}></input>
				  <button className='footer__send' onClick={this.sendMessage}>
					  Отправить
		  		  </button>
			  </footer>
		  </div>
	    )}
}
