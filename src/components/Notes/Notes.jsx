import React from 'react'
import './Notes.css'
import pic1 from '../../assets/img1.png'
import pic2 from '../../assets/lock.png'
import DisplayNotes from './DisplayNotes'
import Logo from '../logo/Logo'



export default function Notes({displayNote,groupId,color,username}) {
  return (
    <>
      <div className='right'>
      {(displayNote) ? 
      <div className="header__container">
        <Logo name={username} color={color} />
        <p>{username}</p>
      </div>:<div/>
      }
        {(displayNote) ?
          <DisplayNotes groupId={groupId} color={color}/> :
          <center><img src={pic1}></img>
            <h2>Pocket Notes</h2>
            <p>Send and receive messages without keeping your phone online.<br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
            <div className='line'>
                <img src={pic2} className='lock'></img>
                <p>end-to-end encrypted</p>
            </div>
          </center>
        }

      </div>
    </>
  )
}
