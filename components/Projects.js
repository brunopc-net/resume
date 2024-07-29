import React from 'react';

function Project({data}){
  return (
    <section class="project-item">
      {data.name && <header class="clear">
        <div class="position">{data.name}</div>
        {data.startDate && <div class="date">
          <span class="startDate">{data.startDate}</span>
          {data.endDate ?
            <span class="endDate">- {data.endDate}</span>:
            <span class="endDate">- Current</span>
          }
        </div>}
      </header>}
      {data.location && <span class="location">
          <span class="fa-solid fa-location-dot"></span>
          {data.location.city && <span class="city">{data.location.city},</span>}
          {data.location.countryCode && <span class="countryCode">({data.location.countryCode})</span>}
          {data.location.region && <span class="region">({data.location.region})</span>}
      </span>}
      {data.url && <span class="website">
        <span class="fa-solid fa-up-right-from-square"></span>
        <a target="_blank" href={data.ul}>{data.ul}</a>
      </span>}
      {data.keywords && <ul class="keywords">
        {data.keywords.map(kw => 
          <li>{kw}</li>
        )}
      </ul>}
      <div class="item">
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

function Projects({data}){
  return data && data.length > 0 && (
    <section class="section">
      <header>
        <h2 class='section-title'>
          Projects <span class="item-count">({data.length})</span>
        </h2>
      </header>
      <section id="projects">
        {data.map(project => 
          <Project data={project} />
        )}
      </section>
    </section>
  );
}

export default Projects;