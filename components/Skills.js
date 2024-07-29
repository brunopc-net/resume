import React from 'react';

function SkillItem({data}){
	return (
		<div class="item">
			{data.name && <h3 class="name">{data.name}</h3>}
			{data.level && <div className={"level "+level.toLowerCase()}>
				{data.levelDisplay ? 
					<em>{data.levelDisplay}</em>:
					<em>{data.level}</em>
				}
				<div class="bar"></div>
			</div>}
			{data.keywords && <ul class="keywords">
				{data.keywords.map(kw => 
				<li>{kw}</li>
				)}
			</ul>}
		</div>
	);
}

function Skills({data}){
	return data && data.length && (
		<section class="section">
		<header>
			<h2 class='section-title'>Skills</h2>
		</header>
		<section id="skills">
			{data.map(skillItem =>
				<SkillItem data={skillItem} />
			)}
		</section>
	</section>
	);
}

export default Skills;
