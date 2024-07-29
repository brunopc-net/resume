import React from 'react';

function Reference({data}){
  return (
    <div class="item">
      {data.reference && <blockquote class="reference">
        &#8220;&#32;{data.reference}&#32;&#8221;
      </blockquote>}
      {data.name && 
        data.link ? <div class="author">
          <a target="_blank" href={link}>{data.name}</a>, {data.position} at {data.place}
        </div>:
        <div class="author">
          {data.name}, {data.position} at {data.place}
        </div>
      }
    </div>
  );
}

function References({data}){
  return data && data.length && (
    <section id="references" class="section">
    <header>
      <h2 class='section-title'>References</h2>
    </header>
    <section>
      {data.map(reference =>
        <Reference data={reference} />
      )}
    </section>
  </section>
  );
}

export default References;
