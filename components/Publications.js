import React from 'react';

function Publication({data}){
  return (
    <section class="publication-item">
      <header class="clear">
        {data.releaseDate && <span class="date">{data.releaseDate}</span>}
        <div class="header-left">
          {data.name && <span class="name">
            {data.website ? <span class="website">
                <span class="fa-solid fa-up-right-from-square"></span>
                <a target="_blank" href={data.website}>{data.name}</a>
              </span>:
              <>{data.name}</>
            }
          </span>}
          {data.publisher && <span class="publisher">
            in {data.publisher}
          </span>}
        </div>
      </header>
      {data.keywords && <ul class="keywords">
        {data.keywords.map(kw => 
          <li>{kw}</li>
        )}
      </ul>}
      <div class="item">
        {data.summary && <div class="summary">{summary}</div>}
      </div>
    </section>
  );
}

function Publications({data}){
  return data && data.length && (
    <section class="section">
      <header>
        <h2 class='section-title'>Publications</h2>
      </header>
      <section id="publications">
        {data.map(publication => 
          <Publication data={publication} />
        )}
      </section>
    </section>
  );
}

export default Publications;
