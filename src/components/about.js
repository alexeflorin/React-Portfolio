import React from "react";
import profilePicture from "../assets/profile_picture.png"


function About () {
	return (
		<section id="about-me-page" className="about-me-section">
		<div className="about-page">
			<h1 id="about" className="section-title"> About me </h1>
		</div>
		<div>
			<img src="{profilePicture}"  alt = "profile"
			style={{width:"75%"}}/>
		</div>
		</section>
	);
}

export default About;

