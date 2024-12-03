import React from 'react'

import {
  ImFacebook,
  ImInstagram,
  ImYoutube,
  ImWhatsapp,
} from 'react-icons/im'

const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href='http://www.facebook.com' target='_blank'>
          <ImFacebook/>
          </a>
        </li>
        <li>
          <a href='http://www.whatssapp.com' target='_blank'>
          <ImWhatsapp/>
          </a>
        </li>
        <li>
          <a href='http://www.youtube.com' target='_blank'>
          <ImYoutube/>
          </a>
        </li>
        <li>
          <a href='http://www.instagram.com' target='_blank'>
          <ImInstagram/>
          </a>
        </li>
      </ul>
    
    </div>
  )
};

export default Socials
