import './App.css';import GroupPage from './components/Groups/Groups';
import NotePage from './components/Notes/Notes';
import React from 'react';

const App=()=> {
  return (
    <>
    
      <div className='homeContainer'>
        <div className='groupContainer'><GroupPage/></div>
        <div className='noteContainer'><NotePage/></div>
      </div>
    
    </>
  );
}

export default App;
