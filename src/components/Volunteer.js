import React from 'react';
import {Duration, Location, Highlights, Keywords} from './Commons'

function VolunteerItem({data}){
  return (
    <section className="volunteer-item">
      <header className="clear">
        <Duration data={data} format="MY" />
        <div className="header-left">
          {data.position && <div className="position">{data.position}</div>}
          {data.organization && <div className="organization">{data.organization}</div>}
        </div>
      </header>
      {data.website && <div className="website">
        <span className="fa-solid fa-up-right-from-square"></span>
        <a target="_blank" href={data.website}>{data.website}</a>
      </div>}
      <Location data={data.location} />
      <Keywords data={data} />
      <div className="item">
        {data.summary && <div className="summary">{summary}</div>}
        <Highlights data={data} />
      </div>
    </section>
  );
}

function Volunteer({data}){
  return data && data.length && (
    <section className="section">
      <header>
        <h2 className='section-title'>Volunteer</h2>
      </header>
      <section id="volunteer">
        {data.map(volunteerItem => 
          <VolunteerItem key={volunteerItem.position+volunteerItem.organization} data={volunteerItem} />
        )}
      </section>
    </section>
  );
}

export default Volunteer;
