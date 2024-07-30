import React from 'react';

function getFormattedDate(date) {
  return new Date(date).toLocaleDateString(
    'en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }
  );
}

function CertificateItem({data}){
  return (
    <section className="certificate-item">
      <header className="clear">
        <div className="date">
          {getFormattedDate(data.date)}
        </div>
        <div>
          <span className="name">{data.name}</span>
        </div>
        {data.url ? 
          <div>
            <span className="issuer">
              <a target="_blank" href={data.url}>{data.issuer}</a>
            </span>
          </div> :
          <div>
            <span className="issuer">{data.issuer}</span>
          </div>
        }
      </header>
    </section>
  );
}

function Certificates({data}){
  if(data){
    const certificates = data.filter((cert) => cert.hasOwnProperty('date'));
    return (
      <section className="section">
        <header>
          <h2 className="section-title">
            Certificates <span className="item-count">({certificates.length})</span>
          </h2>
        </header>
        <section id="certificates">
          {certificates.map((certificate) => {
            return <CertificateItem key={certificate.name} data={certificate} />;
          })}
        </section>
      </section>
    );
  }
}

export default Certificates;