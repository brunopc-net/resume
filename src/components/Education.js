import React from 'react';
import {Duration, Location} from './Commons'

function EducationItem({data}){
  return (
    <section className="education-item">
      <header className="clear">
        <Duration data={data} format="Y" />
        {data.area && <div className="area">{data.area}</div>}
        {data.studyType && <div className="studyType"> {data.studyType}</div>}
        {data.institution && data.url ?
          <div className="institution"><a target="_blank" href={data.url}>{data.institution}</a></div>:
          <div className="area">{data.institution}</div>
        }
      </header>
      <Location data={data.location} />
      <div className="item">
        {data.gpa && <div className='gpa'>
          <span className="gradeLabel"> Grade:</span> <span className="grade">{{gpa}}</span>
        </div>}
        {data.summary && <div className="summary">{summary}</div>}
      </div>
    </section>
  );
}

function Education({data}){
  return data && (
    <section className="section">
      <header>
        <h2 className='section-title'>
          Education <span className="item-count">({data.length})</span>
        </h2>
      </header>
      <section id="education">
        {data.map(educationItem => 
          <EducationItem key={educationItem.area+educationItem.studyType} data={educationItem} />
        )}
      </section>
    </section>
  );
}

export default Education;
