import React from 'react';

const Scroll = (props) => {
 return (
 	//you can delete hidden to use scroll feature
  <div style={{overflowY: 'scroll hidden',border:'none',height:'500px'}}>
    {props.children}
   </div>
 	);//children means the components inside Scroll tag in App.js (CardList)
}

export default Scroll;