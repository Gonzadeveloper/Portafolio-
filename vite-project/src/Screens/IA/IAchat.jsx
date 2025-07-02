import { useState } from 'react';
import { IconRobotIA } from '../../Utils/Icons/Icons';
import ReactMarkdown from 'react-markdown';
import './IAchat.css';

function IAhchat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOpenChat = () => setIsChatOpen(true);
  const handleCloseChat = () => {
    setIsChatOpen(false);
    setMensajes([]);
    setInputValue('');
  };

  const handleSendQuestion = async () => {
    if (!inputValue.trim()) return;

    const pregunta = inputValue;
    setInputValue('');
    setLoading(true);

    // Agregamos la pregunta al historial
    setMensajes((prev) => [...prev, { autor: 'user', texto: pregunta }]);

    try {
      const response = await fetch(`${import.meta.env.VITE_ENDPOINT}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: pregunta }),
      });

      const data = await response.json();

      // Agregamos la respuesta al historial
      setMensajes((prev) => [...prev, { autor: 'ia', texto: data.respuesta }]);
    } catch (error) {
      setMensajes((prev) => [...prev, {
        autor: 'ia',
        texto: '❌ Ocurrió un error al contactar con el asistente.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!isChatOpen && (
        <button className="buttonIA" onClick={handleOpenChat}>
          <IconRobotIA />
        </button>
      )}

      {isChatOpen && (
        <div className="chatWindow">
          <div className="chatHeader">
            <span>Asistente IA</span>
            <button className="closeButton" onClick={handleCloseChat}>X</button>
          </div>

          <div className="chatBody">
            <p className="textChat">¡Hola! Podés preguntarme sobre Gonzalo.</p>

            {mensajes.map((msg, index) => (
              <div
                key={index}
                className={`mensaje-wrapper ${msg.autor === 'user' ? 'derecha' : 'izquierda'}`}
              >
                <div className={`mensaje ${msg.autor}`}>
                  {msg.autor === 'ia'
                    ? <ReactMarkdown>{msg.texto}</ReactMarkdown>
                    : <p>{msg.texto}</p>}
                </div>
              </div>
            ))}

            {loading && <p>Cargando respuesta...</p>}
          </div>

          <div className="chatInputArea">
            <input
              className="inputChat"
              type="text"
              placeholder="Escribí tu pregunta..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendQuestion()}
            />
            <button onClick={handleSendQuestion}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default IAhchat;
