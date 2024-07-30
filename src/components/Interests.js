import React from 'react';
import {Keywords} from './Commons'

function InterestItem({data}){
  return (
    <div className="item">
      {data.name && <h3 className="name">{data.name}</h3>}
      <Keywords data={data} />
    </div>
  );
}

function Interests({data}){
  console.log(data);
  return data && (
    <section className="section">
      <header>
        <h2 className='section-title'>Interests</h2>
      </header>
      <section id="interests">
        {data.map(interest => 
          <InterestItem key={interest.name} data={interest} />
        )}
      </section>
    </section>
  );
}

export default Interests;