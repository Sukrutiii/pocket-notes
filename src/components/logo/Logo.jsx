import React from 'react'
import './Logo.css'

function Logo({name,color}) {
  return (
    <div className="logo__container" style={{backgroundColor:color , textAlign:'center',color:'white'}}>
        <p>{name.slice(0,2)}</p>
    </div>
  )
}

export default Logo