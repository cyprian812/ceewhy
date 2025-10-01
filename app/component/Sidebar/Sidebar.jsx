import { Bookmark, Chat, Event, Group,  HelpOutline, PlayCircleFilledOutlined, RssFeed, School,Job, WorkOutline } from '@mui/icons-material'
import React from 'react'
import "./sidebar.css"

import CloseFriends from './CloseFriends'

export default function Sidebar() {
  return (
    <div  className='sidebar w-[25vw] px-5 py-3 font-semibold'>
    <div className="">
     <ul>
      <li className='flex items-center my-4 gap-2 cursor-pointer '>
        <RssFeed sx={ {fongSize: 25} }/> 
       <span>feed</span>
        </li> 
      <li className='flex items-center my-4 gap-2 cursor-pointer '>
        <Chat sx={ {fongSize: 25} }/> 
       <span>Chat</span>
        </li> 
      <li className='flex items-center my-4 gap-2 cursor-pointer '>
        <PlayCircleFilledOutlined sx={ {fongSize: 25} }/> 
       <span>Videos</span>
        </li> 
      <li className='flex items-center my-4 gap-2 cursor-pointer '>
        <Group sx={ {fongSize: 25} }/> 
       <span>Group</span>
        </li> 
      <li className='flex items-center my-4 gap-2 cursor-pointer '>
        <Bookmark sx={ {fongSize: 25} }/> 
       <span>Bookmark</span>
        </li> 
      <li className='flex items-center my-4 gap-2 cursor-pointer '>
        <HelpOutline sx={ {fongSize: 25} }/> 
       <span>Questions</span>
        </li> 
      <li className='flex items-center my-4 gap-2 cursor-pointer '>
        <School sx={ {fongSize: 25} }/> 
       <span>Courses</span>
        </li> 
      <li className='flex items-center my-4 gap-2 cursor-pointer '>
        < WorkOutline sx={ {fongSize: 25} }/> 
       <span>Job</span>
        </li> 
      <li className='flex items-center my-4 gap-2 cursor-pointer '>
        < Event sx={ {fongSize: 25} }/> 
       <span>Event</span>
        </li> 
      </ul> 
      <button className='mb-4 mt-2 border border-black bg-[#f0f0f0] px-10 text-sm font-semibold  rounded-md'>
        Read More
      </button>
      <hr />
    <ul className='m3 mt-6'>
   {Users.map(u => (
    <CloseFriends key={u.id} user={u}/>
   ))}
    </ul>
    </div>
    </div>
  )
}

