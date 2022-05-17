import React from 'react'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moduleName from './Location.module.css'
function LocationBlockContact({ picture, title, text, IconClass }) {
      
    return (
        <div className={moduleName.block}>
            <FontAwesomeIcon size={'4x'} className={moduleName.block_img + ' ' + IconClass} icon={picture} ></FontAwesomeIcon>
            <h1 className={moduleName.block_title}>{title}</h1>
          {text} 
        </div>
    )
}
 const Location = () => {
    return (
      <div className={moduleName.body}>
        <LocationBlockContact
          picture={faMapMarkerAlt}
          title="adress "
          text="Erkin 14"
          id={moduleName.pin}
        />
        <LocationBlockContact
          picture={faPhoneAlt}
          title="telefon "
          text="90 528 - 07 - 70"
          id={moduleName.tel}
        />
        <LocationBlockContact
          picture={faEnvelope}
          title="email "
          text="tuhtaevarobiahon@gmail.com"
          id={moduleName.mail}
        />
      </div>
    );
}
export default Location;
