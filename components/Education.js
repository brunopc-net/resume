import React from 'react';

function EducationItem({data}){
  return (
    <section class="education-item">
      <header class="clear">
        <div class="date">
          {data.startDate && <span class="startDate">
            {data.startDate}
          </span>}
          {data.endDate ? 
            <span class="endDate">- {data.endDate}</span>:
            <span class="endDate">- Current</span>
          }
        </div>
        {data.area && <div class="area">{data.area}</div>}
        {data.studyType && <div class="studyType">{data.studyType}</div>}
        {data.institution && data.url ?
          <div class="institution"><a target="_blank" href={data.url}>{data.institution}</a></div>:
          <div class="area">{data.institution}</div>
        }
      </header>
      <span class="location">
          <span class="fa-solid fa-location-dot"></span>
          {data.city && <span class="city">{data.city}</span>}
          {data.countryCode && <span class="city">{data.countryCode}</span>}
          {data.region && <span class="city">{data.region}</span>}
      </span>
      <div class="item">
        {data.gpa && <div class='gpa'>
          <span class="gradeLabel"> Grade:</span> <span class="grade">{{gpa}}</span>
        </div>}
        {data.summary && <div class="summary">{summary}</div>}
      </div>
    </section>
  );
}

function Education({data}){
  return data && (
    <section class="section">
      <header>
        <h2 class='section-title'>Education <span class="item-count">({data.length})</span></h2>
      </header>
      <section id="education">
        {data.map(item => 
          <EducationItem data={item} />
        )}
      </section>
    </section>
  );
}

export default Education;
