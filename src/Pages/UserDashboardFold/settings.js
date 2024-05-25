import React from 'react'
import UserDashboard from '../UserDashboard'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

export default function Settings() {
    const navigate = useNavigate()
  return (
    <UserDashboard>
       <div className='flex justify-between'>
            <button onClick={() => navigate(-1)}>
              <BiArrowBack size={20} className='text-gray-800'/>
              </button>
              <span className='text-xl font-bold text-gray-800'>Your Settings</span>
              <div/>
          </div>
          <div className='flex justify-center items-center my-4'>
          <iframe src="https://giphy.com/embed/5rNpjbSQQGOgGkDs2b" width="100%" height="472" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/coming-soon-anmarie-consultant-5rNpjbSQQGOgGkDs2b"></a></p>
          </div>
    </UserDashboard>
  )
}
