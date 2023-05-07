import React, { useState, useEffect } from 'react'
import './Groups.css'
import { v1 } from 'uuid'
import Logo from '../logo/Logo';

export default function Groups({ setDisplayNote,groupId ,setGroupId, color, setColor,setUsername }) {

    const getData = () => {
        const data = localStorage.getItem('groups');
        if (data) {
            return JSON.parse(data);
        }
        else {
            return []
        }
    }

    const [popup, setPopup] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [groups, setGroups] = useState(getData());

    const togglePopup = () => {
        setPopup(!popup)
    }

    const handleAddGroup = (e) => {
        setDisplayNote(false)
        e.preventDefault();
        togglePopup()
        const id = v1();
        if (groupName !== '' && color !== '') {
            const group = {
                name: groupName,
                id: id,
                color: color,
            }
            const data = groups;
            data.push(group)
            setGroups(data)
            console.log(groups);
            localStorage.setItem('groups', JSON.stringify(groups))
            setGroupName('');
        }
        else {
            window.alert("Enter details")
        }
    }

    const addNotes = (id, color,name) => {
        setDisplayNote(true)
        setGroupId(id)
        setUsername(name)
        setColor(color)
    }

    const returnColor = (id)=>{
        const style1 = {backgroundColor:'#F7ECDC'}
        const style2 = {backgroundColor:'white'}
        if(groupId===id){
            return style1;
        }
        else{
            return style2;
        }
    }

    const colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF']

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
                            <label>Group Name<input type='text' placeholder="Enter your group name...."
                                required onChange={(e) => setGroupName(e.target.value)}></input></label>
                                <p className='choose'>Choose Colour</p>
                            <div className="color__circle__container">
                                {
                                    colors.map((color) => <div className='color__circle' onClick={() => setColor(color)} style={{ backgroundColor: color }}></div>)
                                }
                            </div>

                            <button className='create-btn' onClick={handleAddGroup} >Create</button>
                        </div>
                    </div>
                }
                <div className="groups__container">
                {
                    groups.map((data) => 
                    <div className="groups__name__container" style={returnColor(data.id)} onClick={() => addNotes(data.id, data.color,data.name)}>
                        <Logo name={data.name} color={data.color}/>
                        <p  >{data.name}</p>

                    </div>)
                }
                </div>
            </div>
        </>
    )
}
