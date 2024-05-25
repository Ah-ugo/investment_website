import React, { useEffect, useState } from 'react'
import UserDashboard from '../UserDashboard'
import axios from 'axios';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate, useNavigation } from 'react-router-dom';

export default function Profile() {
  const [userData, setUserData] = useState({});
  const userInfo = localStorage.getItem("userData122");
  const userMain = JSON.parse(userInfo);
  const navigate = useNavigate()
  // const navigator = useNavigation()

  const config = {
    headers: {
      "X-Parse-Application-Id": "o2sxP1a3p8X7pcnr1Hedh8vh6NfP1HJMjF6GhsJ7",
      "X-Parse-REST-API-Key": "J66ZpMiZBgxEXDSAlWiUcSYMjjLV6FAuX8y0huJE",
      "X-Parse-Session-Token": userMain.sessionToken,
    },
  };
  const UserDetails = () => {
    axios
      .get(`https://sigmaphi.b4a.io/users/me`, config)
      .then((res) => {
        // const resp = JSON.stringify(res.data);
        // const respo = JSON.parse(resp);
        console.log(res.data + "ghhjjuy");
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    UserDetails()
    console.log(userData,"fdjhd")
  },[])
  return (
    <div>
        <UserDashboard>
          <div className='flex justify-between'>
            <button onClick={() => navigate(-1)}>
              <BiArrowBack size={20} className='text-gray-800'/>
              </button>
              <span className='text-xl font-bold text-gray-800'>Your Profile</span>
              <div/>
          </div>
          <div className='mt-4 flex flex-col justify-center items-center shadow-xl py-4 rounded-md bg-gray-800'>
            <div>
              <img src={userData?.Image?.url} className='rounded-full w-20 h-20'/>
            </div>
            <div className='my-3 flex flex-col gap-2 justify-center items-center'>
              <p className='text-white font-bold text-xl'>{userData?.username}</p>  
                       
               <p className='text-gray-200 font-semibold text-lg'>{userData?.email}</p>
               <button onClick={()=>navigate("/userDashboard")} className='bg-gray-600 hover:bg-gray-700 w-full mt-2 py-2 px-6 rounded-lg text-white font-semibold'>Overview</button>
               </div>
               
          </div>
        </UserDashboard>
    </div>
  )
}
