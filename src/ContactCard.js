import React, { useState } from 'react';

const ContactCard = (props) => {
  //show/hide age in contact card
  const [showAge, setShowAge] = useState(false); //destructuring

  return (
    <div className='main-card'>
      <div className='contact-card'>
        <img src={props.avatarUrl} alt='img'></img>
        <div className='user-details'>
          <p>Name: {props.name}</p>
          <p>Email: {props.email}</p>
          <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
          {/* {showAge ? <p>Age: 22</p> : null} */}
          {showAge && <p>Age: {props.age}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
