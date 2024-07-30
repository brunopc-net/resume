import React from 'react';

function getYear(date){
  return date.split("-")[0];
}

function Award({ data }) {
  return (
    <section className="award-item">
      {data.summary && <label for="award-item-{{@index}}"></label>}
      <header className="clear">
        {data.date && <div className="date">
          {getYear(data.date)}
        </div>}
        <div className="header-left">
          {data.title && <div className="title">
            {data.title}
          </div>}
          {data.awarder && <div className="awarder">
            {data.awarder}
          </div>}
        </div>
      </header>
      <div className="item">
        {data.summary && <div className="summary">
          {data.summary}
        </div>}
      </div>
    </section>
  );
}

function Awards({data}) {
  return data && (
    <section className="section">
      <header>
        <h2 className="section-title">Awards</h2>
      </header>
      <section id="awards">
        {data && data.forEach(award =>
          <Award data={award} />
        )}
      </section>
    </section>
  );
}

export default Awards;