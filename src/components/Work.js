import React from 'react';
import { Duration, Location, Highlights, Keywords } from './Commons'

function Position({data}) {
  return (
    <div>
      <span className="position">
        {data.position}
      </span> at {data.website ? <span className="website">
        <a target="_blank" href={data.website}>{data.name}</a>
      </span> :
        <div className="company">{data.name}</div>
      }
    </div>
  );
}

function WorkItem({ data }) {
  return (
    <section className="work-item">
      <header className="clear">
        <Duration data={data} format="MY" />
        <Position data={data} />
      </header>
      <Location data={data.location} />
      {data.url && <span className="url">
        <span className="fa-solid fa-up-right-from-square"></span>
        <a target="_blank" href={data.url}>{data.url}</a>
      </span>}
      <Keywords data={data} />
      <div className="item" id="work-item">
        {data.summary && <div className="summary">{data.summary}</div>}
        <Highlights data={data} />
      </div>
    </section>
  );
}

function Work({ data }) {
  return (
    <section className="section">
      <header>
        <h2 className='section-title'>
          Work Experience <span className="item-count">({data.length})</span>
        </h2>
      </header>
      <section id="work">
        {data.map(workItem =>
          <WorkItem key={workItem.name + workItem.position} data={workItem} />
        )}
      </section>
    </section>
  );
}

export default Work;