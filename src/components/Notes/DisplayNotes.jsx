import React, { useState } from 'react'
import './DisplayNotes.css'
import date from 'date-and-time';

function DisplayNotes({groupId,color}) {

    const getData=()=>{
        const data = localStorage.getItem('notes');
        if(data){
            return JSON.parse(data);
        }
        else{
            return []
        }
    }
    const [noteData,setNoteData] = useState('')
    const [noteArray,setNoteArray] = useState(getData())


    const addNote = ()=>{
        const note = {
            data:noteData,
            created:date.format(new Date(), 'ddd, MMM DD YYYY'),
            groupId:groupId
        } 
        const data = noteArray;
        data.push(note);
        setNoteArray(data);
        localStorage.setItem('notes',JSON.stringify(noteArray))
        setNoteData('')
    }

  return (
    <div className="display__note__container">
        <div className="notes__container">
            {
                noteArray.map((note)=>{
                    if(note.groupId === groupId){
                   return <div className="notes__data__container">
                    <div className="note__date">{note.created}</div>
                    <div className="note__data">{note.data}</div>
                    </div>
                    }
                }
                )
            }
        </div>
        <textarea value={noteData} type="text" onChange={(e)=>setNoteData(e.target.value)}/>
        <button onClick={addNote}>Submit</button>
    </div>
  )
}

export default DisplayNotes