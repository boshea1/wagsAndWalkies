import React from 'react';

import {data} from '../data.js';

       
              



const Portfolio = () => {




  const port = data.map((item)=> {
    return <div key={item.name}>
     <img src={item.url} alt={item.name}></img>
    <p >{item.name}</p>
    </div>
  
  })
  return (
    <div>
    <div>
       <h1 style={{fontSize: '40px', marginBottom: '20px'}}>
      Portfolio
      </h1>
      </div>
    <div className='portfolio'>
      {port}
    </div>
    </div>
  )
}

export default Portfolio