import './App.css';import GroupPage from './components/Groups/Groups';
import NotePage from './components/Notes/Notes';
import React, { useState } from 'react';

const App=()=> {
  const [displayNote,setDisplayNote] = useState(false)
  const [groupId,setGroupId] = useState('')
  const [color,setColor] = useState('')
  const [username,setUsername] = useState('')
  return (
    <>
      <div className='homeContainer'>
        <div className='groupContainer'><GroupPage setDisplayNote={setDisplayNote} groupId={groupId}  setGroupId={setGroupId} setUsername={setUsername} setColor={setColor} color={color}/></div>
        <div className='noteContainer'><NotePage username={username} displayNote={displayNote} groupId={groupId} color={color} /></div>
      </div>
    
    </>
  );
}

export default App;
