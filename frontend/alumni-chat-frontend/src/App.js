import React, { useState } from 'react';
import Chat from './components/Chat';

function App() {
  const [roomId, setRoomId] = useState('');
  const [isRoomJoined, setIsRoomJoined] = useState(false);

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      setIsRoomJoined(true);
    }
  };

  return (
    <div className="App">
      {!isRoomJoined ? (
        <div>
          <h1>Join Chat Room</h1>
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter Room ID"
          />
          <button onClick={handleJoinRoom}>Join</button>
        </div>
      ) : (
        <Chat roomId={roomId} />
      )}
    </div>
  );
}

export default App;
