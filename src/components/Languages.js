import React from 'react';

function LanguageItem({data}){
  return (
    <div className="display">
      {data.language && <h3 className="language">{data.language}</h3>}
      <div className="item">
        {data.fluency && <div className={"level fluency "+data.fluency.toLowerCase()}>
          {data.fluencyDisplay ?
            <em>{data.fluencyDisplay}</em>:
            <em>{data.fluency}</em>
          }
          <div className="bar"></div>
        </div>}
      </div>
    </div>
  );
}

function Languages({data}){
  return data && (
    <section className="section">
      <header>
        <h2 className='section-title'>Languages</h2>
      </header>
      <section id="languages">
        {data.map(languageItem => 
          <LanguageItem key={languageItem.language} data={languageItem} />
        )}
      </section>
    </section>
  );
}

export default Languages;
