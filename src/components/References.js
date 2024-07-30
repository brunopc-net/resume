import React from 'react';

function Author({ data }) {
  return data.link ? (
    <div className="author">
      <a target="_blank" href={data.link}>{data.name}</a>, {data.position} at {data.place}
    </div>
  ) : (
    <div className="author">
      {data.name}, {data.position} at {data.place}
    </div>
  );
}

function ReferenceItem({ data }) {
  return (
    <div className="item">
      {data.reference && <blockquote className="reference">
        &#8220;&#32;{data.reference}&#32;&#8221;
      </blockquote>}
      {data.name && <Author data={data} />}
    </div>
  );
}

function References({ data }) {
  return data && data.length && (
    <section id="references" className="section">
      <header>
        <h2 className='section-title'>References</h2>
      </header>
      <section>
        {data.map(reference =>
          <ReferenceItem key={reference.name} data={reference} />
        )}
      </section>
    </section>
  );
}

export default References;
