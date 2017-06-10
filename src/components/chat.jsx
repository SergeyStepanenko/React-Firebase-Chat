import React from 'react';

import '../../styles/index.scss';
import MessageItem from './message.jsx';
import sendBtnImg from '../images/sendBtn.png';

const database = firebase.database();
const rootRef = database.ref('messages');
let FIREBASEDATA = [];

export default class Chat extends React.Component {
	constructor() {
		super();

		this.state = {
			data: [],
		};
		this.sendMessage = this.sendMessage.bind(this);
	}

	componentWillMount() {
		rootRef.on('value', (snap) => {
			const Obj = snap.val();

			FIREBASEDATA = [];

			for (const x in Obj) {
				if (Object.prototype.hasOwnProperty.call(Obj, x)) {
					FIREBASEDATA.push(Obj[x]);
				}
			}

			this.setState({
				data: FIREBASEDATA,
			})
		});
	}

	sendMessage() {
		const userMessage = document.getElementById('messageBox');
		const chatBlock = document.querySelector('.chat');
		const newPostKey = firebase.database().ref().child('posts').push().key; // генерим уникальный id

		firebase.database().ref('messages/' + newPostKey).set({
			name: 'Сергей',
			message: userMessage.value,
			date: Date.now(),
		});

		userMessage.value = '';
		chatBlock.scrollTop = chatBlock.scrollHeight;
	}

    render() {
	    return (
	      <div>
			  <header className='header'>Добро пожаловать в чат</header>
			  <div className='chat'>
				  {
			        this.state.data.map((el, index) => {
			            return (
			              <MessageItem
			                key={index}
							senderName={el.name}
							textMessage={el.message}
			                sentDate={el.date}
			                />);
			        })
	            }
			  </div>
			  <footer className='footer'>
				  <input type='text' id='messageBox' className='footer__input' placeholder='Напишите сообщение'></input>
				  <button className='footer__send' onClick={this.sendMessage}>
					  Отправить
					  {/* <img src={sendBtnImg} alt='' width='20px' height=''></img> */}
		  		  </button>
			  </footer>
		  </div>
	    )}
}
