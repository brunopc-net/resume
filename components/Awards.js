import React from 'react';

function Award({data}){
    <section class="award-item">
        {data.summary && <label for="award-item-{{@index}}"></label>}
        <header class="clear">
            {data.date && <div class="date">
                {data.date}
            </div>}
            <div class="header-left">
                {data.title && <div class="title">
                  {data.title}
                </div>}
                {data.awarder && <div class="awarder">
                  {data.awarder}
                </div>}
            </div>
        </header>
        <div class="item">
            {data.summary && <div class="summary">
                {data.summary}
            </div>}
        </div>
    </section>
}

function Awards(awards){
    <section class="section">
      <header>
        <h2 class="section-title">Awards</h2>
      </header>
      <section id="awards">
        {awards && awards.foreach(award => 
            <Award data={award} />
        )}
      </section>
    </section>
}

export default Awards;