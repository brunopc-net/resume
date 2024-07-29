import React from 'react';

function WorkItem(){
  return (
    <section class="work-item">
        <header class="clear">
          <div class="date">
            {data.startDate && <span class="startDate">{data.startDate}</span>}
            {data.endDate ?
              <span class="endDate">- {data.endDate}</span>:
              <span class="endDate">- Current</span>
            }
          </div>
          {data.position && <div class="position">{position}</div>}
          {data.website ? <div class="website">
              <span class="fa-solid fa-up-right-from-square"></span>
              <a target="_blank" href={data.website}>{data.name}</a>
            </div>:
            <div class="company">{data.name}</div>
          }
        </header>
        {data.location && <span class="location">
          <span class="fa-solid fa-location-dot"></span>
          {data.location.city && <span class="city">{data.location.city},</span>}
          {data.location.countryCode && <span class="countryCode">({data.location.countryCode})</span>}
          {data.location.region && <span class="region">({data.location.region})</span>}
        </span>}
        {data.url && <span class="url">
          <span class="fa-solid fa-up-right-from-square"></span>
          <a target="_blank" href={data.url}>{data.url}</a>
        </span>}
        {data.keywords && <ul class="keywords">
          {data.keywords.map(kw => 
            <li>{kw}</li>
          )}
        </ul>}
      <div class="item" id="work-item">
        {data.summary && <div class="summary">{summary}</div>}
        {data.highlights && <ul class="highlights">
          {data.highlights(hl => 
            <li>{hl}</li>
          )}
        </ul>}
      </div>
    </section>
  );
}

function Work({data}){
  return (
    <section class="section">
      <header>
        <h2 class='section-title'>
          Work Experience <span class="item-count">({data.length})</span>
        </h2>
      </header>
      <section id="work">
        {data.map(workItem => 
          <WorkItem data={workItem} />
        )}
      </section>
    </section>
  );
}

export default Work;