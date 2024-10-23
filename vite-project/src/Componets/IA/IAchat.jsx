import { useState } from 'react';
import { IconRobotIA } from '../Icons/Icons';
import './IAchat.css';

function IAhchat() {
  // Estado para controlar si el chat está abierto o no
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Función para abrir el chat y ocultar el botón
  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  // Función para cerrar el chat y mostrar el botón
  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div>

      {!isChatOpen && (
        <button className='buttonIA' onClick={handleOpenChat}>
          <IconRobotIA />
        </button>
      )}


      {isChatOpen && (
        <div className='chatWindow'>
          <div className='chatHeader'>
            <span>Chat</span>
            <button className='closeButton' onClick={handleCloseChat}>X</button>
          </div>
          <div className='chatBody'>
            <p className='textChat'>¡Hola! ¿Cómo puedo ayudarte?</p>
          </div>
          <div>
            <input className='inputChat' type="text" />
          </div>
        </div>
      )}
    </div>
  );
}

export default IAhchat;