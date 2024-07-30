import React from 'react';
import { useState, useEffect } from 'react'

import Basics from './components/Basics';
import Skills from './components/Skills';
import Work from './components/Work';
import Volunteer from './components/Volunteer';
import Education from './components/Education';
import Awards from './components/Awards';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Languages from './components/Languages';
import Interests from './components/Interests';
import References from './components/References';

import './styles/style.css';

import axios from 'axios';
const RESUME_URL = "https://brunopc.net/data/resume.json";

function App(){
  const [resume, setResume] = useState(false)

  useEffect(() => {
    axios(RESUME_URL)
      .then((res) => {
        setResume(res.data);
      })
      .catch((e) => console.log(e))
  }, []);

  return resume && (
    <div id="resume">
      <Basics data={resume.basics} />
      <Skills data={resume.skills} />
      <Work data={resume.work} />
      <Volunteer data={resume.volunteer} />
      <Education data={resume.education} />
      <Awards data={resume.awards} />
      <Certificates data={resume.certificates} />
      <Projects data={resume.projects} />
      <Publications data={resume.publications} />
      <Languages data={resume.languages} />
      <Interests data={resume.interests} />
      <References data={resume.references} />
    </div>
  );
}

export default App;
