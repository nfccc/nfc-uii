// websocket/websocket.js
let socket = null;
let token = '';
let onBalanceUpdate = () => {}; // Callback function for balance updates

export const initializeWebSocket = (authToken, balanceUpdateCallback) => {
  if (socket) {
    socket.close();
  }

  token = authToken;
  onBalanceUpdate = balanceUpdateCallback;
  socket = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=63970`);

  socket.onopen = () => {
    console.log('WebSocket connection established');
    socket.send(JSON.stringify({ authorize: token }));
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);

      if (data.msg_type === 'balance' && data.balance) {
        onBalanceUpdate(data.balance); // Notify balance updates
      }
    } catch (e) {
      console.error('Error parsing message:', e);
    }
  };

  socket.onerror = (error) => {
    console.error('WebSocket Error:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed');
  };

  return socket;
};

export const closeWebSocket = () => {
  if (socket) {
    socket.close();
  }
};
