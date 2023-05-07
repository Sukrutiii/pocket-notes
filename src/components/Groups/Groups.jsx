import React, { useState, useEffect } from 'react'
import './Groups.css'
import ViewGroup from '../ViewGroup/ViewGroup';

export default function Groups() {

    const getData=()=>{
        const data = localStorage.getItem('groups');
        if(data){
            return JSON.parse(data);
        }
        else{
            return []
        }
    }

    const [popup, setPopup] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [groups, setGroups] = useState(getData());

    const togglePopup = () => {
        setPopup(!popup)
    }

    const handleAddGroup=(e)=>{
        e.preventDefault();
        let group={
            groupName
        }
        setGroups([...groups,group]);
        setGroupName('');
    }

    useEffect(()=>{
        localStorage.setItem('groups',JSON.stringify(groups));
    },[groups])

    const colors = ['#B38BFA','#FF79F2','#43E6FC','#F19576','#0047FF','#6691FF']
    const colorsItem = () => <div className='color-item'></div>

  return (
    <>
      <div className='left'>
            <div><h3>Pocket Notes</h3></div>
            <div><center>
              <button className='btn' onClick={togglePopup}>+ Create Notes group</button>
            </center></div>
            {/* <ViewGroup/> */}
            {popup &&
                <div className='overlay'>
                <div className='popupContainer'>
                    <p>Create New Notes group</p>
                    <label>Group Name<input type='text' value="Enter your group name...."
                    required onChange={(e)=>setGroupName(e.target.value)} value={groupName}></input></label>
                    <p className='chooseColor'>Choose Colour{colors.map}</p>
                    <button className='create-btn' onClick={togglePopup} onSubmit={handleAddGroup}>Create</button>
                </div>
            </div>
            }
        </div>
    </>
  )
}
