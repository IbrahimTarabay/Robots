import React from 'react';

const Card = ({name,email,id}) =>{//const {name,email,id} = props; //destructring
  return(
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
     <img alt="Robots" src={`https://robohash.org/${id}`}/>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  	);
}

export default Card;