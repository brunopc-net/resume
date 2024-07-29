import React from 'react';

function Language({data}){
  return (
    <div class="display">
      {data.language && <h3 class="language">{data.language}</h3>}
      <div class="item">
        {data.fluency && <div className={"level fluency "+data.fluency.toLowerCase()}>
          {data.fluencyDisplay ?
            <em>{{fluencyDisplay}}</em>:
            <em>{{fluency}}</em>
          }
          <div class="bar"></div>
        </div>}
      </div>
    </div>
  );
}

function Languages({data}){
  return data && (
    <section class="section">
      <header>
        <h2 class='section-title'>Languages</h2>
      </header>
      <section id="languages">
        {data.map(item => 
          <Language data={item} />
        )}
      </section>
    </section>
  );
}

export default Languages;
