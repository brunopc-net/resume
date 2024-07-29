import React from 'react';

function Location({data}){
	return(<span class="location">
		{data.address && <span class="address">{data.address},</span>}
		{data.postalCode && <span class="address">{data.postalCode},</span>}
		{data.city && <span class="address">{data.city},</span>}
		{data.region && <span class="address">{data.region},</span>}
		{data.countryCode && <span class="address">{data.countryCode},</span>}
	</span>);
}

function Contact({data}){
	return(<div id="contact">
		{data.website && <div class="website">
			<span class="fa-solid fa-up-right-from-square"></span>
			<a class="hide-href-print" target="_blank" href={website}>{website}</a>
		</div>}
		{data.email && <div class="email">
			<span class="fa-regular fa-envelope"></span>
			<a class="hide-href-print" href={"mailto:"+email}>{email}</a>
		</div>}
		{data.phone && <div class="phone">
			<span class="fa-solid fa-mobile-screen-button"></span>
			<a class="hide-href-print" href={"tel:"+phone}>{phone}</a>
		</div>}
	</div>);
}

function Profiles({data}){
	return(<>
		<div id="profiles">
			{data.profiles.map(profile => 
				<div class="item">
					{profile.network && 
						<div>
							<span className={"fa-brands fa-"+profile.network+" "+profile.network+" social"}></span>
							{profile.network.url ? <>
									<span class="username">
										<a target="_blank" href={profile.network.url}>{profile.network.username}</a>
									</span>
									<span class="url-full">
										<a target="_blank" href={profile.network.url}>{profile.network.url}</a>
									</span>
								</> :
								<span>{profile.network.username}</span>
							}
						</div>
					}
				</div>
			)}
		</div>
	</>);
}

function Basics({data}){
	return (<>
		<header id="header" class="clear">
			{data.image ? <>
				<img class="image" src={data.image} alt={data.name} />
					<div class="middle">
					<h1 class="name">{data.name}</h1>
					<h2 class="label">{data.label}</h2>
				</div>
			</>:
			<div>
				<h1 class="name">{data.name}</h1>
				<h2 class="label">{data.label}</h2>
			</div>
			}
			<Location data={data.location} />
			<Contact data={data.contact} />
			<Profiles data={data.profiles} />
		</header>
		{data.summary && <section class="section">
			<section class="main-summary">
				<div>{summary}</div>
			</section>
		</section>}
	</>);
}

export default Basics;
