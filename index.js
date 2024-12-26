import {
  useState,
  useEffect,
} from 'react';
import io from 'socket.io-client';

let socket;

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    socket = io('http://localhost:4000');
    socket.on('connect', () => {
      console.log('Connected to the socket.io server');
      setIsConnected(true);
    });
    socket.on('message', (message) => {
      setMessages((prevMessages) => {
        return [...prevMessages, JSON.parse(message)];
      });
    });
  }, []);

  const handleSendMessage = (e) => {
    if (e.key === 'Enter') {
      socket.emit("message", inputMessage);
      setMessages((prevMessages) => {
        return [...prevMessages, { user: "Me", message: inputMessage }];
      });
      setInputMessage("");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundColor: '#f4f4f4',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Connection status */}
      <div
        className={`text-xs text-center py-1 shadow-md font-semibold ${
          isConnected ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white" : "bg-yellow-200 text-gray-600"
        }`}
        style={{
          fontFamily: "'Comic Sans MS', sans-serif",
          borderRadius: '5px',
          margin: '0 16px',
        }}
      >
        {isConnected ? "Connected" : "Connecting..."}
      </div>
  
      {/* Chat title */}
      <h1
        className="text-center text-4xl font-bold py-8 shadow-md bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text"
        style={{
          fontFamily: "'Arial, Helvetica, sans-serif'",
          textShadow: '2px 2px 5px #f6fcbd',
        }}
      >
        Simple Chat Room
      </h1>
  
      {/* Message area */}
      <div className="flex-1 p-4 bg-white bg-opacity-80 rounded-md mx-4 mb-4 shadow-lg overflow-y-auto">
        <ul className="space-y-3">
          {message.map((msg, index) => (
            <li
              key={index}
              className={`p-3 rounded-md text-gray-800 shadow-sm ${
                msg.user === "Me"
                  ? "bg-yellow-100 border-yellow-300"
                  : "bg-grey-100 border-grey-300"
              } border`}
            >
               <span
              className={`block font-bold ${
                msg.user === "Me" ? "text-yellow-800" : "text-gray-600"
              }`}
              style={{
                fontFamily: "'Comic Sans MS', sans-serif",
              }}
            >
              {msg.user}:
            </span>
            <span
              className="text-gray-800 block"
              style={{ fontFamily: "'Verdana', sans-serif" }}
            >
              {msg.message}
            </span>
            </li>
          ))}
        </ul>
      </div>
  
      {/* Input box */}
      <div className="p-4 mx-4">
        <input
          type="text"
          className="w-full rounded px-4 py-3 bg-yellow-50 text-gray-700 shadow-md focus:outline-none focus:ring-4 focus:ring-yellow-400 border border-transparent focus:border-yellow-600 text-lg"
          value={inputMessage}
          placeholder="Type your message here..."
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleSendMessage}
        />
      </div>
    </div>
  );  
}
