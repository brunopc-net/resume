import React from 'react';

function Interest({data}){
  return (
    <div class="item">
      {data.name && <h3 class="name">{data.name}</h3>}
      {data.keywords && <ul class="keywords">
        {data.keywords.map(kw => 
          <li>{kw}</li>
        )}
      </ul>}
    </div>
  );
}

function Interests({data}){
  return data && (
    <section class="section">
      <header>
        <h2 class='section-title'>Interests</h2>
      </header>
      <section id="interests">
        {data.map(item => {
          <Interest data={item} />
        })}
      </section>
    </section>
  );
}

export default Interests;