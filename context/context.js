'use client'
import React, { createContext, useState, useEffect, useContext } from 'react';

const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const [ws, setWs] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Extract token from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token1') || '';

    console.log("Extracted token:", token);

    if (token) {
      // Initialize WebSocket connection
      const socket = new WebSocket('wss://ws.derivws.com/websockets/v3?app_id=63970');
      setWs(socket);

      console.log('WebSocket connection initialized');

      socket.onopen = () => {
        console.log('WebSocket connection established');
        socket.send(JSON.stringify({ authorize: token }));
        console.log('Sent authorization message:', { authorize: token });
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log('Received message:', data);

          setReceivedMessage(JSON.stringify(data, null, 2));

          if (data.msg_type === 'authorize' && data.authorize) {
            console.log('User authorized:', data.authorize);
            setUserInfo(data.authorize);
          }
        } catch (e) {
          setError(`Error parsing WebSocket message: ${e.message}`);
          console.error('Error parsing message:', e);
        }
      };

      socket.onerror = (error) => {
        setError(`WebSocket Error: ${error.message}`);
        console.error('WebSocket Error:', error);
      };

      socket.onclose = () => {
        console.log('WebSocket connection closed');
      };

      // Cleanup WebSocket connection on component unmount
      return () => {
        if (socket) {
          console.log('Closing WebSocket connection');
          socket.close();
        }
      };
    } else {
      setError('Token not found.');
      console.error('Token not found.');
    }
  }, []);

  // Extract the needed fields from userInfo
  const fullname = userInfo?.fullname || '';
  const email = userInfo?.email || '';
  const balance = userInfo?.balance || 0;

  return (
    <WebSocketContext.Provider value={{ fullname, email, balance, receivedMessage, error }}>
      {children}
    </WebSocketContext.Provider>
  );
};

// Custom hook to use the WebSocket context
export const useWebSocket = () => {
  return useContext(WebSocketContext);
};
