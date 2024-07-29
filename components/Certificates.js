import React from 'react';

function Certificate({data}){
  return (
    <section class="certificate-item">
      <header class="clear">
        <div class="date">
          {data.date}
        </div>
        <div>
          <span class="name">{data.name}</span>
        </div>
        {data.url ? 
          <div>
            <span class="issuer">
              <a target="_blank" href={data.url}>{data.issuer}</a>
            </span>
          </div> :
          <div>
            <span class="issuer">{data.issuer}</span>
          </div>
        }
      </header>
    </section>
  );
}

function Certificates({data}){
  return (
    <section class="section">
      <header>
        <h2 class="section-title">Certificates</h2>
      </header>
      <section id="certificates">
        {data.forEach((certificate) => {
          return certificate.date && <Certificate data={certificate} />;
        })}
      </section>
    </section>
  );
}

export default Certificates;