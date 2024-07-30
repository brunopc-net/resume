import React from 'react';
import {Keywords} from './Commons'

function SkillItem({data}){
	return (
		<div className="item">
			{data.name && <h3 className="name">{data.name}</h3>}
			{data.level && <div className={"level "+level.toLowerCase()}>
				{data.levelDisplay ? 
					<em>{data.levelDisplay}</em>:
					<em>{data.level}</em>
				}
				<div className="bar"></div>
			</div>}
			<Keywords data={data} />
		</div>
	);
}

function Skills({data}){
	return data && data.length && (
		<section className="section">
		<header>
			<h2 className='section-title'>Skills</h2>
		</header>
		<section id="skills">
			{data.map(skillItem =>
				<SkillItem key={skillItem.name} data={skillItem} />
			)}
		</section>
	</section>
	);
}

export default Skills;
