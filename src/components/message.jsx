import React from 'react';

export default function MessageItem(props) {
    const {senderName, textMessage, sentDate} = props;

    return (
      <div className="message">
		  <div className='message__senderName'>
			  {senderName}
		  </div>
		  <div className='message__wrapper'>
			  <div className='message__senderMessage'>
				  {textMessage}
			  </div>
			  <div className='message__senderDate'>
				  {sentDate}
			  </div>
		  </div>
      </div>)
}

MessageItem.propTypes = {
    senderName: React.PropTypes.string.isRequired,
	sentDate: React.PropTypes.string.isRequired,
    textMessage: React.PropTypes.string.isRequired,
};
