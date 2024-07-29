import React from 'react';

function VolunteerItem({data}){
  return (
    <section class="volunteer-item">
      <header class="clear">
        <div class="date">
          {data.startDate && <span class="startDate">{data.startDate}</span>}
          {data.endDate ?
            <span class="endDate">{data.endDate}</span>:
            <span class="endDate"> - Current</span>
          }
        </div>
        <div class="header-left">
          {data.position && <div class="position">{data.position}</div>}
          {data.organization && <div class="organization">{data.organization}</div>}
        </div>
      </header>
      {data.website && <div class="website">
        <span class="fa-solid fa-up-right-from-square"></span>
        <a target="_blank" href={data.website}>{data.website}</a>
      </div>}
      {data.location && <span class="location">
          <span class="fa-solid fa-location-dot"></span>
          {data.location.city && <span class="city">{data.location.city},</span>}
          {data.location.countryCode && <span class="countryCode">({data.location.countryCode})</span>}
          {data.location.region && <span class="region">({data.location.region})</span>}
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

function Volunteer({data}){
  return data && data.length && (
    <section class="section">
      <header>
        <h2 class='section-title'>Volunteer</h2>
      </header>
      <section id="volunteer">
        {data.map(volunteerItem => 
          <VolunteerItem data={volunteerItem} />
        )}
      </section>
    </section>
  );
}

export default VolunteerItem;
