import React from 'react';

function getFormattedDate(date, format) {
  var dateOpt = {};
  switch (format) {
    case 'Y':
      dateOpt = { year: 'numeric' };
      break;
    case 'MY':
      dateOpt = { year: 'numeric', month: 'long' };
      break;
  }
  return new Date(date).toLocaleDateString('en-US', dateOpt);
}

function Duration({ data, format }) {
  return data.startDate && (
    <div className="date">
      <span className="startDate">
        {getFormattedDate(data.startDate, format)}
      </span>
      {data.endDate ?
        <span className="endDate"> - {getFormattedDate(data.endDate, format)}</span> :
        <span className="endDate"> - Current</span>
      }
    </div>
  );
}

function Location({ data }) {
  return data && (<span className="location">
    <span className="fa-solid fa-location-dot"></span>
    {data.city && <span className="city">{data.city}</span>}
    {data.region && <span className="city">{data.region}</span>}
    {data.countryCode && <span className="city">{data.countryCode}</span>}
  </span>
  );
}

function Highlights({ data }) {
  return data.highlights && (
    <ul className="highlights">
      {data.highlights.map(hl =>
        <li key={hl}>{hl}</li>
      )}
    </ul>
  );
}

function Keywords({ data }) {
  return data.keywords && (
    <ul className="keywords">
      {data.keywords.map(kw =>
        <li key={kw}>{kw}</li>
      )}
    </ul>
  );
}

export {
  Duration,
  Location,
  Highlights,
  Keywords
};