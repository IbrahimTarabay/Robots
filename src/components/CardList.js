import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
 return (
  <div>
    {//we wrap it with {} because this javascript
      robots.map((robot,i) =>{
       return(
         <Card 
           key={i}/*key={i} because if one of these cards are deleted react won't know which one and it has to change entire dom*/
           id={robot.id}
           name={robot.name}
           email={robot.email}
           />
        );
      })
    }
    </div>
  );
}

export default CardList;
