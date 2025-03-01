import React from 'react'
import ButtonList from './ButtonList'
import Videocontainer from './Videocontainer'

const Maincontainer = () => {
  return (
    <div className='col-span-11'>
        <ButtonList/>
        <Videocontainer/>
    </div>
  )
}

export default Maincontainer